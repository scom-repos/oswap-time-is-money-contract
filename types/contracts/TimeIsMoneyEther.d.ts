import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    maximumTotalLock: number | BigNumber;
    minimumLockTime: number | BigNumber;
    startOfEntryPeriod: number | BigNumber;
    endOfEntryPeriod: number | BigNumber;
    perAddressCap: number | BigNumber;
}
export declare class TimeIsMoneyEther extends _Contract {
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
export declare module TimeIsMoneyEther {
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
