// SPDX-License-Identifier: GPL-3.0-only

pragma solidity 0.8.4;

interface TimeIsMoneyEtherI {
    function maximumTotalLock() external returns (uint256);
    function minimumLockTime() external returns (uint256);
    function startOfEntryPeriod() external returns (uint256);
    function endOfEntryPeriod() external returns (uint256);
    function totalLocked() external returns (uint256);
    function perAddressCap() external returns (uint256);
    
    function lockAmount(address) external returns (uint256);
    function releaseTime(address) external returns (uint256);
    function withdrawn(address) external returns (bool);
    
    event Deposit(address indexed account, uint256 amount);
    event Withdrawal(address indexed account, uint256 amount, bool heldLongEnough);
    
    /**
     * @dev Lock some ethers up! Fails if ethers are already locked.
     */
    function lock() external payable;
    
    /**
     * @dev Withdraw ethers! If you withdraw too early you will not receive credit.
     * 
     * @param allowWithdrawalBeforeRelease Whether or not to allow an early withdrawal.
     */
    function withdraw(bool allowWithdrawalBeforeRelease) external;

    /**
     * @dev Get the amount of credit an address has.
     * 
     * @return The amount of credit an address has.
     */
    function getCredit(address account) external view returns (uint256);

    /**
     * @dev Check if an account's hostage ethers are ready to be withdrawn.
     * 
     * @return true if the account's hostage ethers are ready to be withdrawn.
     */
    function readyToWithdraw(address account) external view returns (bool);
}

// OpenZeppelin Contracts v4.4.1 (security/ReentrancyGuard.sol)

pragma solidity ^0.8.0;

/**
 * @dev Contract module that helps prevent reentrant calls to a function.
 *
 * Inheriting from `ReentrancyGuard` will make the {nonReentrant} modifier
 * available, which can be applied to functions to make sure there are no nested
 * (reentrant) calls to them.
 *
 * Note that because there is a single `nonReentrant` guard, functions marked as
 * `nonReentrant` may not call one another. This can be worked around by making
 * those functions `private`, and then adding `external` `nonReentrant` entry
 * points to them.
 *
 * TIP: If you would like to learn more about reentrancy and alternative ways
 * to protect against it, check out our blog post
 * https://blog.openzeppelin.com/reentrancy-after-istanbul/[Reentrancy After Istanbul].
 */
abstract contract ReentrancyGuard {
    // Booleans are more expensive than uint256 or any type that takes up a full
    // word because each write operation emits an extra SLOAD to first read the
    // slot's contents, replace the bits taken up by the boolean, and then write
    // back. This is the compiler's defense against contract upgrades and
    // pointer aliasing, and it cannot be disabled.

    // The values being non-zero value makes deployment a bit more expensive,
    // but in exchange the refund on every call to nonReentrant will be lower in
    // amount. Since refunds are capped to a percentage of the total
    // transaction's gas, it is best to keep them low in cases like this one, to
    // increase the likelihood of the full refund coming into effect.
    uint256 private constant _NOT_ENTERED = 1;
    uint256 private constant _ENTERED = 2;

    uint256 private _status;

    constructor() {
        _status = _NOT_ENTERED;
    }

    /**
     * @dev Prevents a contract from calling itself, directly or indirectly.
     * Calling a `nonReentrant` function from another `nonReentrant`
     * function is not supported. It is possible to prevent this from happening
     * by making the `nonReentrant` function external, and making it call a
     * `private` function that does the actual work.
     */
    modifier nonReentrant() {
        // On the first call to nonReentrant, _notEntered will be true
        require(_status != _ENTERED, "ReentrancyGuard: reentrant call");

        // Any calls to nonReentrant after this point will fail
        _status = _ENTERED;

        _;

        // By storing the original value once again, a refund is triggered (see
        // https://eips.ethereum.org/EIPS/eip-2200)
        _status = _NOT_ENTERED;
    }
}

pragma solidity 0.8.4;

contract TimeIsMoneyEther is TimeIsMoneyEtherI, ReentrancyGuard {
    
    uint256 public override immutable maximumTotalLock;
    uint256 public override immutable minimumLockTime;
    uint256 public override immutable startOfEntryPeriod;
    uint256 public override immutable endOfEntryPeriod;
    uint256 public override immutable perAddressCap;
    
    uint256 public override totalLocked;
    mapping(address => uint256) public override lockAmount;
    mapping(address => uint256) public override releaseTime;
    mapping(address => bool) public override withdrawn;
    
    /**
     * @dev Create a new TimeIsMoney contract.
     * 
     * @param maximumTotalLock_ The maximum number of ethers we are going to hold hostage.
     * @param minimumLockTime_ The minimum amount of time (in seconds) that ethers should be held hostage.
     * @param endOfEntryPeriod_ The time we stop accepting new hostages.
     * @param perAddressCap_ The limit per address, or 0 for unlimited.
     */
    constructor(uint256 maximumTotalLock_, uint minimumLockTime_, uint startOfEntryPeriod_, uint endOfEntryPeriod_, uint perAddressCap_) {
        maximumTotalLock = maximumTotalLock_;
        minimumLockTime = minimumLockTime_;
        startOfEntryPeriod = startOfEntryPeriod_;
        endOfEntryPeriod = endOfEntryPeriod_;
        perAddressCap = perAddressCap_;
    }
    
    /**
     * @dev Lock some ethers up! Fails if ethers are already locked.
     */
    function lock() public override payable nonReentrant {
        uint256 amount = msg.value;
        require(block.timestamp >= startOfEntryPeriod, "It's too early to do this!");
        require(block.timestamp < endOfEntryPeriod, "Sorry, you ate too late!");
        require(lockAmount[msg.sender] == 0, "You have already participated in this.");
        require(amount > 0, "You cannot lock nothing!");
        require(amount <= perAddressCap, "You cannot lock over the limit!");
        require(amount <= maximumTotalLock - totalLocked, "This deposit would cause our total locked amount to exceed the maximum.");
        lockAmount[msg.sender] = amount;
        totalLocked += amount;
        releaseTime[msg.sender] = block.timestamp + minimumLockTime;
        emit Deposit(msg.sender, amount);
    }
    
    function safeTransferETH(address payable to, uint value) internal {
        (bool success,) = to.call{value:value}(new bytes(0));
        require(success, 'TransferHelper: ETH_TRANSFER_FAILED');
    }

    /**
     * @dev Withdraw ethers! If you withdraw too early you will not receive credit.
     * 
     * @param allowWithdrawalBeforeRelease Whether or not to allow an early withdrawal.
     */
    function withdraw(bool allowWithdrawalBeforeRelease) public override nonReentrant {
        require(!withdrawn[msg.sender] && lockAmount[msg.sender] > 0, "No ethers available to withdraw.");
        uint256 amount = lockAmount[msg.sender];
        if (block.timestamp < releaseTime[msg.sender]) {
            require(allowWithdrawalBeforeRelease, "Your ethers were not locked long enough!");
            lockAmount[msg.sender] = 0;
            releaseTime[msg.sender] = 0;
            totalLocked -= amount;
            safeTransferETH(payable(msg.sender), amount);
            emit Withdrawal(msg.sender, amount, false);
        } else {
            withdrawn[msg.sender] = true;
            safeTransferETH(payable(msg.sender), amount);
            emit Withdrawal(msg.sender, lockAmount[msg.sender], true);
        }
    }

    /**
     * @dev Get the amount of credit an address has.
     * 
     * @return The amount of credit an address has.
     */
    function getCredit(address account) public override view returns (uint256) {
        if (block.timestamp < releaseTime[account]) {
            return 0;
        }
        return lockAmount[account];
    }

    /**
     * @dev Check if an account's hostage ethers are ready to be withdrawn.
     * 
     * @return true if the account's hostage ethers are ready to be withdrawn.
     */
    function readyToWithdraw(address account) public override view returns (bool) {
        return lockAmount[account] > 0 && block.timestamp >= releaseTime[account] && !withdrawn[account];
    }
}
