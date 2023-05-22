"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeIsMoneyEther = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const TimeIsMoneyEther_json_1 = __importDefault(require("./TimeIsMoneyEther.json"));
class TimeIsMoneyEther extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, TimeIsMoneyEther_json_1.default.abi, TimeIsMoneyEther_json_1.default.bytecode);
        this.assign();
    }
    deploy(params, options) {
        return this.__deploy([this.wallet.utils.toString(params.maximumTotalLock), this.wallet.utils.toString(params.minimumLockTime), this.wallet.utils.toString(params.startOfEntryPeriod), this.wallet.utils.toString(params.endOfEntryPeriod), this.wallet.utils.toString(params.perAddressCap)], options);
    }
    parseDepositEvent(receipt) {
        return this.parseEvents(receipt, "Deposit").map(e => this.decodeDepositEvent(e));
    }
    decodeDepositEvent(event) {
        let result = event.data;
        return {
            account: result.account,
            amount: new eth_contract_1.BigNumber(result.amount),
            _event: event
        };
    }
    parseWithdrawalEvent(receipt) {
        return this.parseEvents(receipt, "Withdrawal").map(e => this.decodeWithdrawalEvent(e));
    }
    decodeWithdrawalEvent(event) {
        let result = event.data;
        return {
            account: result.account,
            amount: new eth_contract_1.BigNumber(result.amount),
            heldLongEnough: result.heldLongEnough,
            _event: event
        };
    }
    assign() {
        let endOfEntryPeriod_call = async (options) => {
            let result = await this.call('endOfEntryPeriod', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.endOfEntryPeriod = endOfEntryPeriod_call;
        let getCredit_call = async (account, options) => {
            let result = await this.call('getCredit', [account], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.getCredit = getCredit_call;
        let lockAmount_call = async (param1, options) => {
            let result = await this.call('lockAmount', [param1], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.lockAmount = lockAmount_call;
        let maximumTotalLock_call = async (options) => {
            let result = await this.call('maximumTotalLock', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.maximumTotalLock = maximumTotalLock_call;
        let minimumLockTime_call = async (options) => {
            let result = await this.call('minimumLockTime', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.minimumLockTime = minimumLockTime_call;
        let perAddressCap_call = async (options) => {
            let result = await this.call('perAddressCap', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.perAddressCap = perAddressCap_call;
        let readyToWithdraw_call = async (account, options) => {
            let result = await this.call('readyToWithdraw', [account], options);
            return result;
        };
        this.readyToWithdraw = readyToWithdraw_call;
        let releaseTime_call = async (param1, options) => {
            let result = await this.call('releaseTime', [param1], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.releaseTime = releaseTime_call;
        let startOfEntryPeriod_call = async (options) => {
            let result = await this.call('startOfEntryPeriod', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.startOfEntryPeriod = startOfEntryPeriod_call;
        let totalLocked_call = async (options) => {
            let result = await this.call('totalLocked', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.totalLocked = totalLocked_call;
        let withdrawn_call = async (param1, options) => {
            let result = await this.call('withdrawn', [param1], options);
            return result;
        };
        this.withdrawn = withdrawn_call;
        let lock_send = async (options) => {
            let result = await this.send('lock', [], options);
            return result;
        };
        let lock_call = async (options) => {
            let result = await this.call('lock', [], options);
            return;
        };
        let lock_txData = async (options) => {
            let result = await this.txData('lock', [], options);
            return result;
        };
        this.lock = Object.assign(lock_send, {
            call: lock_call,
            txData: lock_txData
        });
        let withdraw_send = async (allowWithdrawalBeforeRelease, options) => {
            let result = await this.send('withdraw', [allowWithdrawalBeforeRelease], options);
            return result;
        };
        let withdraw_call = async (allowWithdrawalBeforeRelease, options) => {
            let result = await this.call('withdraw', [allowWithdrawalBeforeRelease], options);
            return;
        };
        let withdraw_txData = async (allowWithdrawalBeforeRelease, options) => {
            let result = await this.txData('withdraw', [allowWithdrawalBeforeRelease], options);
            return result;
        };
        this.withdraw = Object.assign(withdraw_send, {
            call: withdraw_call,
            txData: withdraw_txData
        });
    }
}
exports.TimeIsMoneyEther = TimeIsMoneyEther;
TimeIsMoneyEther._abi = TimeIsMoneyEther_json_1.default.abi;
