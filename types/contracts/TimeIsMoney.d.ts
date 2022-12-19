import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    token: string;
    maximumTotalLock: number | BigNumber;
    minimumLockTime: number | BigNumber;
    startOfEntryPeriod: number | BigNumber;
    endOfEntryPeriod: number | BigNumber;
    perAddressCap: number | BigNumber;
}
export declare class TimeIsMoney extends _Contract {
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
export declare module TimeIsMoney {
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
