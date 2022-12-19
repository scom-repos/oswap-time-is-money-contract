"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RewardsCommonStartDate = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const RewardsCommonStartDate_json_1 = __importDefault(require("./RewardsCommonStartDate.json"));
class RewardsCommonStartDate extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, RewardsCommonStartDate_json_1.default.abi, RewardsCommonStartDate_json_1.default.bytecode);
        this.assign();
    }
    deploy(params, options) {
        return this.__deploy([params.timeIsMoney, params.token, this.wallet.utils.toString(params.multiplier), this.wallet.utils.toString(params.initialReward), this.wallet.utils.toString(params.vestingStartDate), this.wallet.utils.toString(params.vestingPeriod), this.wallet.utils.toString(params.claimDeadline), params.admin], options);
    }
    parseAdminDrainEvent(receipt) {
        return this.parseEvents(receipt, "AdminDrain").map(e => this.decodeAdminDrainEvent(e));
    }
    decodeAdminDrainEvent(event) {
        let result = event.data;
        return {
            amount: new eth_contract_1.BigNumber(result.amount),
            _event: event
        };
    }
    parseClaimEvent(receipt) {
        return this.parseEvents(receipt, "Claim").map(e => this.decodeClaimEvent(e));
    }
    decodeClaimEvent(event) {
        let result = event.data;
        return {
            account: result.account,
            amount: new eth_contract_1.BigNumber(result.amount),
            totalSoFar: new eth_contract_1.BigNumber(result.totalSoFar),
            _event: event
        };
    }
    assign() {
        let admin_call = async (options) => {
            let result = await this.call('admin', [], options);
            return result;
        };
        this.admin = admin_call;
        let claimDeadline_call = async (options) => {
            let result = await this.call('claimDeadline', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.claimDeadline = claimDeadline_call;
        let claimSoFar_call = async (param1, options) => {
            let result = await this.call('claimSoFar', [param1], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.claimSoFar = claimSoFar_call;
        let initialReward_call = async (options) => {
            let result = await this.call('initialReward', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.initialReward = initialReward_call;
        let multiplier_call = async (options) => {
            let result = await this.call('multiplier', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.multiplier = multiplier_call;
        let reward_call = async (options) => {
            let result = await this.call('reward', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.reward = reward_call;
        let rewardForAccount_call = async (account, options) => {
            let result = await this.call('rewardForAccount', [account], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.rewardForAccount = rewardForAccount_call;
        let timeIsMoney_call = async (options) => {
            let result = await this.call('timeIsMoney', [], options);
            return result;
        };
        this.timeIsMoney = timeIsMoney_call;
        let token_call = async (options) => {
            let result = await this.call('token', [], options);
            return result;
        };
        this.token = token_call;
        let unclaimed_call = async (options) => {
            let result = await this.call('unclaimed', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.unclaimed = unclaimed_call;
        let unclaimedForAccount_call = async (account, options) => {
            let result = await this.call('unclaimedForAccount', [account], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.unclaimedForAccount = unclaimedForAccount_call;
        let vestingPeriod_call = async (options) => {
            let result = await this.call('vestingPeriod', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.vestingPeriod = vestingPeriod_call;
        let vestingStartDate_call = async (options) => {
            let result = await this.call('vestingStartDate', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.vestingStartDate = vestingStartDate_call;
        let claim_send = async (options) => {
            let result = await this.send('claim', [], options);
            return result;
        };
        let claim_call = async (options) => {
            let result = await this.call('claim', [], options);
            return;
        };
        this.claim = Object.assign(claim_send, {
            call: claim_call
        });
        let claimFor_send = async (account, options) => {
            let result = await this.send('claimFor', [account], options);
            return result;
        };
        let claimFor_call = async (account, options) => {
            let result = await this.call('claimFor', [account], options);
            return;
        };
        this.claimFor = Object.assign(claimFor_send, {
            call: claimFor_call
        });
        let putFundParams = (params) => [params.from, this.wallet.utils.toString(params.amount)];
        let putFund_send = async (params, options) => {
            let result = await this.send('putFund', putFundParams(params), options);
            return result;
        };
        let putFund_call = async (params, options) => {
            let result = await this.call('putFund', putFundParams(params), options);
            return;
        };
        this.putFund = Object.assign(putFund_send, {
            call: putFund_call
        });
        let takeUnclaimed_send = async (options) => {
            let result = await this.send('takeUnclaimed', [], options);
            return result;
        };
        let takeUnclaimed_call = async (options) => {
            let result = await this.call('takeUnclaimed', [], options);
            return;
        };
        this.takeUnclaimed = Object.assign(takeUnclaimed_send, {
            call: takeUnclaimed_call
        });
    }
}
exports.RewardsCommonStartDate = RewardsCommonStartDate;
RewardsCommonStartDate._abi = RewardsCommonStartDate_json_1.default.abi;
