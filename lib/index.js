"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onProgress = exports.deploy = exports.DefaultDeployOptions = exports.Contracts = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Contracts = __importStar(require("./contracts/index"));
exports.Contracts = Contracts;
const eth_wallet_2 = require("@ijstech/eth-wallet");
;
;
var progressHandler;
exports.DefaultDeployOptions = {
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
function progress(msg) {
    if (typeof (progressHandler) == 'function') {
        progressHandler(msg);
    }
    ;
}
async function deploy(wallet, options) {
    progress('Contracts deployment start');
    let result = {
        timeIsMoneyResultArray: []
    };
    for (let deploymentOptions of options.deploymentOptionsArray) {
        let { timeIsMoneyOptions, rewardsOptions } = deploymentOptions;
        let timeIsMoney = new Contracts.TimeIsMoney(wallet);
        let timeIsMoneyToken = new eth_wallet_1.Erc20(wallet, timeIsMoneyOptions.token);
        let timeIsMoneyTokenDecimals = await timeIsMoneyToken.decimals;
        progress('Deploy TimeIsMoney');
        let timeIsMoneyAddress = await timeIsMoney.deploy({
            token: timeIsMoneyOptions.token,
            maximumTotalLock: eth_wallet_2.Utils.toDecimals(timeIsMoneyOptions.maximumTotalLock, timeIsMoneyTokenDecimals),
            minimumLockTime: timeIsMoneyOptions.minimumLockTime,
            startOfEntryPeriod: timeIsMoneyOptions.startOfEntryPeriod,
            endOfEntryPeriod: timeIsMoneyOptions.endOfEntryPeriod,
            perAddressCap: eth_wallet_2.Utils.toDecimals(timeIsMoneyOptions.perAddressCap, timeIsMoneyTokenDecimals)
        });
        progress('TimeIsMoney deployed ' + timeIsMoneyAddress);
        const rewardAddresses = [];
        for (let rewardOptions of rewardsOptions) {
            let reward = new Contracts.Rewards(wallet);
            let rewardToken = new eth_wallet_1.Erc20(wallet, rewardOptions.token);
            let rewardTokenDecimals = await rewardToken.decimals;
            progress('Deploy Reward');
            let rewardAddress = await reward.deploy({
                timeIsMoney: timeIsMoneyAddress,
                token: rewardOptions.token,
                multiplier: eth_wallet_2.Utils.toDecimals(rewardOptions.multiplier, rewardTokenDecimals),
                initialReward: eth_wallet_2.Utils.toDecimals(rewardOptions.initialReward, 18),
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
}
exports.deploy = deploy;
;
function onProgress(handler) {
    progressHandler = handler;
}
exports.onProgress = onProgress;
;
exports.default = {
    Contracts,
    deploy,
    DefaultDeployOptions: exports.DefaultDeployOptions,
    onProgress
};
