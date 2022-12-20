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
        };
        claimDeadline: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        claimFor: {
            (account: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (account: string, options?: TransactionOptions) => Promise<void>;
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
        };
        claimDeadline: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        claimFor: {
            (account: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (account: string, options?: TransactionOptions) => Promise<void>;
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
/// <amd-module name="@scom/oswap-time-is-money-contract/contracts/index.ts" />
declare module "@scom/oswap-time-is-money-contract/contracts/index.ts" {
    export { Rewards } from "@scom/oswap-time-is-money-contract/contracts/Rewards.ts";
    export { RewardsCommonStartDate } from "@scom/oswap-time-is-money-contract/contracts/RewardsCommonStartDate.ts";
    export { TimeIsMoney } from "@scom/oswap-time-is-money-contract/contracts/TimeIsMoney.ts";
    export { TimeIsMoneyEther } from "@scom/oswap-time-is-money-contract/contracts/TimeIsMoneyEther.ts";
}
/// <amd-module name="@scom/oswap-time-is-money-contract" />
declare module "@scom/oswap-time-is-money-contract" {
    export * as Contracts from "@scom/oswap-time-is-money-contract/contracts/index.ts";
}
