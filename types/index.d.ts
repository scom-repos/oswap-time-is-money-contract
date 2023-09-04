import * as Contracts from './contracts/index';
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
export declare var DefaultDeployOptions: IDeployOptions;
export declare function deploy(wallet: IWallet, options?: IDeployOptions): Promise<IDeployResult>;
export declare function onProgress(handler: any): void;
declare const _default: {
    Contracts: typeof Contracts;
    deploy: typeof deploy;
    DefaultDeployOptions: IDeployOptions;
    onProgress: typeof onProgress;
};
export default _default;
