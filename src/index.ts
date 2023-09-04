import { Erc20 } from '@ijstech/eth-wallet';
import * as Contracts from './contracts/index';
export {Contracts};
import {IWallet, BigNumber, Utils} from '@ijstech/eth-wallet';

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
};
export interface ITimeIsMoneyResult {
    timeIsMoney: string;
    rewards: string[];
}
export interface IDeployResult {
    timeIsMoneyResultArray: ITimeIsMoneyResult[];
};
var progressHandler: any;
export var DefaultDeployOptions: IDeployOptions = {
    deploymentOptionsArray: [
        {
            timeIsMoneyOptions: {
                token: '',
                maximumTotalLock: 0,
                minimumLockTime: 0,
                startOfEntryPeriod: 0,
                endOfEntryPeriod: 0,
                perAddressCap: 0
            },
            rewardsOptions: [{
                token: '',
                multiplier: 0,
                initialReward: 0,
                vestingPeriod: 0,
                claimDeadline: 0,
                admin: ''
            }]
        }
    ]
};
function progress(msg: string){
    if (typeof(progressHandler) == 'function'){
        progressHandler(msg);
    };
}
export async function deploy(wallet: IWallet, options?: IDeployOptions): Promise<IDeployResult>{
    progress('Contracts deployment start');
    let result: IDeployResult = {
        timeIsMoneyResultArray: []
    }
    for (let deploymentOptions of options.deploymentOptionsArray) {
        let {timeIsMoneyOptions, rewardsOptions} = deploymentOptions;
        let timeIsMoney = new Contracts.TimeIsMoney(wallet);
        let timeIsMoneyToken = new Erc20(wallet, timeIsMoneyOptions.token);
        let timeIsMoneyTokenDecimals = await timeIsMoneyToken.decimals;
        progress('Deploy TimeIsMoney');
        let timeIsMoneyAddress = await timeIsMoney.deploy({
            token: timeIsMoneyOptions.token,
            maximumTotalLock: Utils.toDecimals(timeIsMoneyOptions.maximumTotalLock, timeIsMoneyTokenDecimals),
            minimumLockTime: timeIsMoneyOptions.minimumLockTime,
            startOfEntryPeriod: timeIsMoneyOptions.startOfEntryPeriod,
            endOfEntryPeriod: timeIsMoneyOptions.endOfEntryPeriod,
            perAddressCap: Utils.toDecimals(timeIsMoneyOptions.perAddressCap, timeIsMoneyTokenDecimals)
        });
        progress('TimeIsMoney deployed ' + timeIsMoneyAddress);
        const rewardAddresses: string[] = [];
        for (let rewardOptions of rewardsOptions) {
            let reward = new Contracts.Rewards(wallet);
            let rewardToken = new Erc20(wallet, rewardOptions.token);
            let rewardTokenDecimals = await rewardToken.decimals;
            progress('Deploy Reward');
            let rewardAddress = await reward.deploy({
                timeIsMoney: timeIsMoneyAddress,
                token: rewardOptions.token,
                multiplier: Utils.toDecimals(rewardOptions.multiplier, rewardTokenDecimals),
                initialReward: Utils.toDecimals(rewardOptions.initialReward, 18),
                vestingPeriod: rewardOptions.vestingPeriod,
                claimDeadline: rewardOptions.claimDeadline,
                admin: rewardOptions.admin
            });
            rewardAddresses.push(rewardAddress);
            progress('Reward deployed ' + rewardAddress);
        }
        result.timeIsMoneyResultArray.push({
            timeIsMoney: timeIsMoneyAddress,
            rewards: rewardAddresses
        });
    }
    progress('Contracts deployment finished');
    return result;
};
export function onProgress(handler: any){
    progressHandler = handler;
};
export default {
    Contracts,
    deploy,
    DefaultDeployOptions,
    onProgress
};