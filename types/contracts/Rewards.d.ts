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
export declare class Rewards extends _Contract {
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
export declare module Rewards {
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
