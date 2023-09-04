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
export declare class TimeIsMoneyV2 extends _Contract {
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
export declare module TimeIsMoneyV2 {
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
