"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const issuing_1 = __importDefault(require("./lib/issuing"));
const identity_1 = __importDefault(require("./lib/identity"));
const transfer_1 = __importDefault(require("./lib/transfer"));
const bills_1 = __importDefault(require("./lib/bills"));
const fx_1 = __importDefault(require("./lib/fx"));
const misc_1 = __importDefault(require("./lib/misc"));
const collections_1 = __importDefault(require("./lib/collections"));
const customers_1 = __importDefault(require("./lib/customers"));
const institution_1 = __importDefault(require("./lib/institution"));
const counterparty_1 = __importDefault(require("./lib/counterparty"));
const wallets_1 = __importDefault(require("./lib/wallets"));
const transactions_1 = __importDefault(require("./lib/transactions"));
class Maplerad {
    // key can be gotten from your Maplerad dashboard.
    // environment can only be "live" or "sandbox".
    constructor(key, environment) {
        this.secretKey = key;
        const live = "https://api.maplerad.com/v1";
        const sandbox = "https://sandbox.api.maplerad.com/v1";
        const axios = axios_1.default.create({
            baseURL: environment.toLowerCase() === "live" ? live : sandbox,
            headers: {
                Authorization: `Bearer ${this.secretKey}`,
                "Content-Type": "application/json",
            },
        });
        axios.interceptors.request.use((request) => {
            console.log("Starting Request", JSON.stringify(request, null, 2));
            return request;
        });
        this.Issuing = new issuing_1.default(axios);
        this.Identity = new identity_1.default(axios);
        this.Transfers = new transfer_1.default(axios);
        this.Bills = new bills_1.default(axios);
        this.Fx = new fx_1.default(axios);
        this.Misc = new misc_1.default(axios);
        this.Collections = new collections_1.default(axios);
        this.Customers = new customers_1.default(axios);
        this.Institution = new institution_1.default(axios);
        this.Counterparty = new counterparty_1.default(axios);
        this.Wallets = new wallets_1.default(axios);
        this.Transactions = new transactions_1.default(axios);
    }
}
exports.default = Maplerad;
