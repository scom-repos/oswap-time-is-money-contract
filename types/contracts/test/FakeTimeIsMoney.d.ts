import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export declare class FakeTimeIsMoney extends _Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(token: string, options?: TransactionOptions): Promise<string>;
    parseDepositEvent(receipt: TransactionReceipt): FakeTimeIsMoney.DepositEvent[];
    decodeDepositEvent(event: Event): FakeTimeIsMoney.DepositEvent;
    parseWithdrawalEvent(receipt: TransactionReceipt): FakeTimeIsMoney.WithdrawalEvent[];
    decodeWithdrawalEvent(event: Event): FakeTimeIsMoney.WithdrawalEvent;
    amount: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    endOfEntryPeriod: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    getCredit: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    lock: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<void>;
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
        (param1: string, options?: TransactionOptions): Promise<boolean>;
    };
    releaseTime: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    setAmount: {
        (amount: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (amount: number | BigNumber, options?: TransactionOptions) => Promise<void>;
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
        (param1: boolean, options?: TransactionOptions): Promise<void>;
    };
    withdrawn: {
        (param1: string, options?: TransactionOptions): Promise<boolean>;
    };
    private assign;
}
export declare module FakeTimeIsMoney {
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
