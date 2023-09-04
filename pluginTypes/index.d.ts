/// <amd-module name="@scom/oswap-time-is-money-contract/contracts/Rewards.json.ts" />
declare module "@scom/oswap-time-is-money-contract/contracts/Rewards.json.ts" {
    const _default: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default;
}
/// <amd-module name="@scom/oswap-time-is-money-contract/contracts/Rewards.ts" />
declare module "@scom/oswap-time-is-money-contract/contracts/Rewards.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        timeIsMoney: string;
        token: string;
        multiplier: number | BigNumber;
        initialReward: number | BigNumber;
        vestingPeriod: number | BigNumber;
        claimDeadline: number | BigNumber;
        admin: string;
    }
    export interface IPutFundParams {
        from: string;
        amount: number | BigNumber;
    }
    export class Rewards extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseAdminDrainEvent(receipt: TransactionReceipt): Rewards.AdminDrainEvent[];
        decodeAdminDrainEvent(event: Event): Rewards.AdminDrainEvent;
        parseClaimEvent(receipt: TransactionReceipt): Rewards.ClaimEvent[];
        decodeClaimEvent(event: Event): Rewards.ClaimEvent;
        admin: {
            (options?: TransactionOptions): Promise<string>;
        };
        claim: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
            txData: (options?: TransactionOptions) => Promise<string>;
        };
        claimDeadline: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        claimFor: {
            (account: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (account: string, options?: TransactionOptions) => Promise<void>;
            txData: (account: string, options?: TransactionOptions) => Promise<string>;
        };
        claimSoFar: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        initialReward: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        multiplier: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        putFund: {
            (params: IPutFundParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IPutFundParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IPutFundParams, options?: TransactionOptions) => Promise<string>;
        };
        reward: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        rewardForAccount: {
            (account: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        takeUnclaimed: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
            txData: (options?: TransactionOptions) => Promise<string>;
        };
        timeIsMoney: {
            (options?: TransactionOptions): Promise<string>;
        };
        token: {
            (options?: TransactionOptions): Promise<string>;
        };
        unclaimed: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        unclaimedForAccount: {
            (account: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        vestingPeriod: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        private assign;
    }
    export module Rewards {
        interface AdminDrainEvent {
            amount: BigNumber;
            _event: Event;
        }
        interface ClaimEvent {
            account: string;
            amount: BigNumber;
            totalSoFar: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/oswap-time-is-money-contract/contracts/RewardsCommonStartDate.json.ts" />
declare module "@scom/oswap-time-is-money-contract/contracts/RewardsCommonStartDate.json.ts" {
    const _default_1: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_1;
}
/// <amd-module name="@scom/oswap-time-is-money-contract/contracts/RewardsCommonStartDate.ts" />
declare module "@scom/oswap-time-is-money-contract/contracts/RewardsCommonStartDate.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        timeIsMoney: string;
        token: string;
        multiplier: number | BigNumber;
        initialReward: number | BigNumber;
        vestingStartDate: number | BigNumber;
        vestingPeriod: number | BigNumber;
        claimDeadline: number | BigNumber;
        admin: string;
    }
    export interface IPutFundParams {
        from: string;
        amount: number | BigNumber;
    }
    export class RewardsCommonStartDate extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseAdminDrainEvent(receipt: TransactionReceipt): RewardsCommonStartDate.AdminDrainEvent[];
        decodeAdminDrainEvent(event: Event): RewardsCommonStartDate.AdminDrainEvent;
        parseClaimEvent(receipt: TransactionReceipt): RewardsCommonStartDate.ClaimEvent[];
        decodeClaimEvent(event: Event): RewardsCommonStartDate.ClaimEvent;
        admin: {
            (options?: TransactionOptions): Promise<string>;
        };
        claim: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
            txData: (options?: TransactionOptions) => Promise<string>;
        };
        claimDeadline: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        claimFor: {
            (account: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (account: string, options?: TransactionOptions) => Promise<void>;
            txData: (account: string, options?: TransactionOptions) => Promise<string>;
        };
        claimSoFar: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        initialReward: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        multiplier: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        putFund: {
            (params: IPutFundParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IPutFundParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IPutFundParams, options?: TransactionOptions) => Promise<string>;
        };
        reward: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        rewardForAccount: {
            (account: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        takeUnclaimed: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
            txData: (options?: TransactionOptions) => Promise<string>;
        };
        timeIsMoney: {
            (options?: TransactionOptions): Promise<string>;
        };
        token: {
            (options?: TransactionOptions): Promise<string>;
        };
        unclaimed: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        unclaimedForAccount: {
            (account: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        vestingPeriod: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        vestingStartDate: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        private assign;
    }
    export module RewardsCommonStartDate {
        interface AdminDrainEvent {
            amount: BigNumber;
            _event: Event;
        }
        interface ClaimEvent {
            account: string;
            amount: BigNumber;
            totalSoFar: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/oswap-time-is-money-contract/contracts/TimeIsMoney.json.ts" />
declare module "@scom/oswap-time-is-money-contract/contracts/TimeIsMoney.json.ts" {
    const _default_2: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_2;
}
/// <amd-module name="@scom/oswap-time-is-money-contract/contracts/TimeIsMoney.ts" />
declare module "@scom/oswap-time-is-money-contract/contracts/TimeIsMoney.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        token: string;
        maximumTotalLock: number | BigNumber;
        minimumLockTime: number | BigNumber;
        startOfEntryPeriod: number | BigNumber;
        endOfEntryPeriod: number | BigNumber;
        perAddressCap: number | BigNumber;
    }
    export class TimeIsMoney extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseDepositEvent(receipt: TransactionReceipt): TimeIsMoney.DepositEvent[];
        decodeDepositEvent(event: Event): TimeIsMoney.DepositEvent;
        parseWithdrawalEvent(receipt: TransactionReceipt): TimeIsMoney.WithdrawalEvent[];
        decodeWithdrawalEvent(event: Event): TimeIsMoney.WithdrawalEvent;
        endOfEntryPeriod: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        getCredit: {
            (account: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        lock: {
            (amount: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (amount: number | BigNumber, options?: TransactionOptions) => Promise<void>;
            txData: (amount: number | BigNumber, options?: TransactionOptions) => Promise<string>;
        };
        lockAmount: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        maximumTotalLock: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        minimumLockTime: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        perAddressCap: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        readyToWithdraw: {
            (account: string, options?: TransactionOptions): Promise<boolean>;
        };
        releaseTime: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        startOfEntryPeriod: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        token: {
            (options?: TransactionOptions): Promise<string>;
        };
        totalLocked: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        withdraw: {
            (allowWithdrawalBeforeRelease: boolean, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (allowWithdrawalBeforeRelease: boolean, options?: TransactionOptions) => Promise<void>;
            txData: (allowWithdrawalBeforeRelease: boolean, options?: TransactionOptions) => Promise<string>;
        };
        withdrawn: {
            (param1: string, options?: TransactionOptions): Promise<boolean>;
        };
        private assign;
    }
    export module TimeIsMoney {
        interface DepositEvent {
            account: string;
            amount: BigNumber;
            _event: Event;
        }
        interface WithdrawalEvent {
            account: string;
            amount: BigNumber;
            heldLongEnough: boolean;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/oswap-time-is-money-contract/contracts/TimeIsMoneyEther.json.ts" />
declare module "@scom/oswap-time-is-money-contract/contracts/TimeIsMoneyEther.json.ts" {
    const _default_3: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_3;
}
/// <amd-module name="@scom/oswap-time-is-money-contract/contracts/TimeIsMoneyEther.ts" />
declare module "@scom/oswap-time-is-money-contract/contracts/TimeIsMoneyEther.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        maximumTotalLock: number | BigNumber;
        minimumLockTime: number | BigNumber;
        startOfEntryPeriod: number | BigNumber;
        endOfEntryPeriod: number | BigNumber;
        perAddressCap: number | BigNumber;
    }
    export class TimeIsMoneyEther extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseDepositEvent(receipt: TransactionReceipt): TimeIsMoneyEther.DepositEvent[];
        decodeDepositEvent(event: Event): TimeIsMoneyEther.DepositEvent;
        parseWithdrawalEvent(receipt: TransactionReceipt): TimeIsMoneyEther.WithdrawalEvent[];
        decodeWithdrawalEvent(event: Event): TimeIsMoneyEther.WithdrawalEvent;
        endOfEntryPeriod: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        getCredit: {
            (account: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        lock: {
            (options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        lockAmount: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        maximumTotalLock: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        minimumLockTime: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        perAddressCap: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        readyToWithdraw: {
            (account: string, options?: TransactionOptions): Promise<boolean>;
        };
        releaseTime: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        startOfEntryPeriod: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        totalLocked: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        withdraw: {
            (allowWithdrawalBeforeRelease: boolean, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (allowWithdrawalBeforeRelease: boolean, options?: TransactionOptions) => Promise<void>;
            txData: (allowWithdrawalBeforeRelease: boolean, options?: TransactionOptions) => Promise<string>;
        };
        withdrawn: {
            (param1: string, options?: TransactionOptions): Promise<boolean>;
        };
        private assign;
    }
    export module TimeIsMoneyEther {
        interface DepositEvent {
            account: string;
            amount: BigNumber;
            _event: Event;
        }
        interface WithdrawalEvent {
            account: string;
            amount: BigNumber;
            heldLongEnough: boolean;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/oswap-time-is-money-contract/contracts/TimeIsMoneyEtherV2.json.ts" />
declare module "@scom/oswap-time-is-money-contract/contracts/TimeIsMoneyEtherV2.json.ts" {
    const _default_4: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_4;
}
/// <amd-module name="@scom/oswap-time-is-money-contract/contracts/TimeIsMoneyEtherV2.ts" />
declare module "@scom/oswap-time-is-money-contract/contracts/TimeIsMoneyEtherV2.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        maximumTotalLock: number | BigNumber;
        minimumLockTime: number | BigNumber;
        startOfEntryPeriod: number | BigNumber;
        endOfEntryPeriod: number | BigNumber;
        perAddressCap: number | BigNumber;
    }
    export class TimeIsMoneyEtherV2 extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseDepositEvent(receipt: TransactionReceipt): TimeIsMoneyEtherV2.DepositEvent[];
        decodeDepositEvent(event: Event): TimeIsMoneyEtherV2.DepositEvent;
        parseWithdrawalEvent(receipt: TransactionReceipt): TimeIsMoneyEtherV2.WithdrawalEvent[];
        decodeWithdrawalEvent(event: Event): TimeIsMoneyEtherV2.WithdrawalEvent;
        endOfEntryPeriod: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        getCredit: {
            (account: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        lock: {
            (to: string, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (to: string, options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (to: string, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        lockAmount: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        maximumTotalLock: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        minimumLockTime: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        perAddressCap: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        readyToWithdraw: {
            (account: string, options?: TransactionOptions): Promise<boolean>;
        };
        releaseTime: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        startOfEntryPeriod: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        totalLocked: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        withdraw: {
            (allowWithdrawalBeforeRelease: boolean, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (allowWithdrawalBeforeRelease: boolean, options?: TransactionOptions) => Promise<void>;
            txData: (allowWithdrawalBeforeRelease: boolean, options?: TransactionOptions) => Promise<string>;
        };
        withdrawn: {
            (param1: string, options?: TransactionOptions): Promise<boolean>;
        };
        private assign;
    }
    export module TimeIsMoneyEtherV2 {
        interface DepositEvent {
            staker: string;
            sender: string;
            amount: BigNumber;
            _event: Event;
        }
        interface WithdrawalEvent {
            account: string;
            amount: BigNumber;
            heldLongEnough: boolean;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/oswap-time-is-money-contract/contracts/TimeIsMoneyV2.json.ts" />
declare module "@scom/oswap-time-is-money-contract/contracts/TimeIsMoneyV2.json.ts" {
    const _default_5: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_5;
}
/// <amd-module name="@scom/oswap-time-is-money-contract/contracts/TimeIsMoneyV2.ts" />
declare module "@scom/oswap-time-is-money-contract/contracts/TimeIsMoneyV2.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        token: string;
        maximumTotalLock: number | BigNumber;
        minimumLockTime: number | BigNumber;
        startOfEntryPeriod: number | BigNumber;
        endOfEntryPeriod: number | BigNumber;
        perAddressCap: number | BigNumber;
    }
    export interface ILockParams {
        to: string;
        amount: number | BigNumber;
    }
    export class TimeIsMoneyV2 extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseDepositEvent(receipt: TransactionReceipt): TimeIsMoneyV2.DepositEvent[];
        decodeDepositEvent(event: Event): TimeIsMoneyV2.DepositEvent;
        parseWithdrawalEvent(receipt: TransactionReceipt): TimeIsMoneyV2.WithdrawalEvent[];
        decodeWithdrawalEvent(event: Event): TimeIsMoneyV2.WithdrawalEvent;
        endOfEntryPeriod: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        getCredit: {
            (account: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        lock: {
            (params: ILockParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ILockParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ILockParams, options?: TransactionOptions) => Promise<string>;
        };
        lockAmount: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        maximumTotalLock: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        minimumLockTime: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        perAddressCap: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        readyToWithdraw: {
            (account: string, options?: TransactionOptions): Promise<boolean>;
        };
        releaseTime: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        startOfEntryPeriod: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        token: {
            (options?: TransactionOptions): Promise<string>;
        };
        totalLocked: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        withdraw: {
            (allowWithdrawalBeforeRelease: boolean, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (allowWithdrawalBeforeRelease: boolean, options?: TransactionOptions) => Promise<void>;
            txData: (allowWithdrawalBeforeRelease: boolean, options?: TransactionOptions) => Promise<string>;
        };
        withdrawn: {
            (param1: string, options?: TransactionOptions): Promise<boolean>;
        };
        private assign;
    }
    export module TimeIsMoneyV2 {
        interface DepositEvent {
            staker: string;
            sender: string;
            amount: BigNumber;
            _event: Event;
        }
        interface WithdrawalEvent {
            account: string;
            amount: BigNumber;
            heldLongEnough: boolean;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/oswap-time-is-money-contract/contracts/index.ts" />
declare module "@scom/oswap-time-is-money-contract/contracts/index.ts" {
    export { Rewards } from "@scom/oswap-time-is-money-contract/contracts/Rewards.ts";
    export { RewardsCommonStartDate } from "@scom/oswap-time-is-money-contract/contracts/RewardsCommonStartDate.ts";
    export { TimeIsMoney } from "@scom/oswap-time-is-money-contract/contracts/TimeIsMoney.ts";
    export { TimeIsMoneyEther } from "@scom/oswap-time-is-money-contract/contracts/TimeIsMoneyEther.ts";
    export { TimeIsMoneyEtherV2 } from "@scom/oswap-time-is-money-contract/contracts/TimeIsMoneyEtherV2.ts";
    export { TimeIsMoneyV2 } from "@scom/oswap-time-is-money-contract/contracts/TimeIsMoneyV2.ts";
}
/// <amd-module name="@scom/oswap-time-is-money-contract" />
declare module "@scom/oswap-time-is-money-contract" {
    import * as Contracts from "@scom/oswap-time-is-money-contract/contracts/index.ts";
    export { Contracts };
    import { IWallet } from '@ijstech/eth-wallet';
    export interface ITimeIsMoneyOptions {
        token: string;
        maximumTotalLock: number;
        minimumLockTime: number;
        startOfEntryPeriod: number;
        endOfEntryPeriod: number;
        perAddressCap: number;
    }
    export interface IRewardOptions {
        token: string;
        multiplier: number;
        initialReward: number;
        vestingPeriod: number;
        claimDeadline: number;
        admin: string;
    }
    export interface IDeploymentOptions {
        timeIsMoneyOptions: ITimeIsMoneyOptions;
        rewardsOptions: IRewardOptions[];
    }
    export interface IDeployOptions {
        deploymentOptionsArray: IDeploymentOptions[];
    }
    export interface ITimeIsMoneyResult {
        timeIsMoney: string;
        rewards: string[];
    }
    export interface IDeployResult {
        timeIsMoneyResultArray: ITimeIsMoneyResult[];
    }
    export var DefaultDeployOptions: IDeployOptions;
    export function deploy(wallet: IWallet, options?: IDeployOptions): Promise<IDeployResult>;
    export function onProgress(handler: any): void;
    const _default_6: {
        Contracts: typeof Contracts;
        deploy: typeof deploy;
        DefaultDeployOptions: IDeployOptions;
        onProgress: typeof onProgress;
    };
    export default _default_6;
}
