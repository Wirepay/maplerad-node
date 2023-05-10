import Axios from "axios";
import Issuing from "./lib/issuing";
import Identity from "./lib/identity";
import Transfers from "./lib/transfer";
import Bills from "./lib/bills";
import Fx from "./lib/fx";
import Misc from "./lib/misc";
import Collections from "./lib/collections";
import Customers from "./lib/customers";
import Institution from "./lib/institution";
import Counterparty from "./lib/counterparty";
import Wallets from "./lib/wallets";
import Transactions from "./lib/transactions";

type Env = "live" | "sandbox";

export default class Maplerad {
    private readonly secretKey: string;
    public Issuing: Issuing;
    public Identity: Identity;
    public Transfers: Transfers;
    public Bills: Bills;
    public Fx: Fx;
    public Misc: Misc;
    public Collections: Collections;
    public Customers: Customers;
    public Institution: Institution;
    public Counterparty: Counterparty;
    public Wallets: Wallets;
    public Transactions: Transactions;

    // key can be gotten from your Maplerad dashboard.
    // environment can only be "live" or "sandbox".
    constructor(key: string, environment: Env) {
        this.secretKey = key;
        const live = "https://api.maplerad.com/v1";
        const sandbox = "https://sandbox.api.maplerad.com/v1";
        const axios = Axios.create({
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

        this.Issuing = new Issuing(axios);
        this.Identity = new Identity(axios);
        this.Transfers = new Transfers(axios);
        this.Bills = new Bills(axios);
        this.Fx = new Fx(axios);
        this.Misc = new Misc(axios);
        this.Collections = new Collections(axios);
        this.Customers = new Customers(axios);
        this.Institution = new Institution(axios);
        this.Counterparty = new Counterparty(axios);
        this.Wallets = new Wallets(axios);
        this.Transactions = new Transactions(axios);
    }
}
