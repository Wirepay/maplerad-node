import Axios from "axios";
import Issuing from "./lib/issuing";
import Transfers from "./lib/transfer";
import Bills from "./lib/bills";
import Fx from "./lib/fx";
import Misc from "./lib/misc";
import Collections from "./lib/collections";
import Customers from "./lib/customers";
import Institution from "./lib/institution";
import Counterparty from "./lib/counterparty";
import Wallets from "./lib/wallets";

type Env = "live" | "sandbox"

export default class Maplerad {
    private readonly secretKey: string;
    public Issuing: Issuing;
    public Transfers: Transfers;
    public Bills: Bills;
    public Fx: Fx;
    public Misc: Misc;
    public Collections: Collections
    public Customers: Customers
    public Institution: Institution
    public Counterparty: Counterparty
    public Wallets: Wallets


    // key can be gotten from your Maplerad dashboard.
    // environment can only be "live" or "sandbox".
    constructor(key:string, environment: Env) {
        this.secretKey = key
        const axios = Axios.create({
            baseURL : environment.toLowerCase() === "live" ? "https://api.maplerad.com/v1" : "https://api.sb.maplerad.com/v1" ,
            headers: {
                Authorization: `Bearer ${(this.secretKey)}`,
                'Content-Type': 'application/json'
            },

        })
        axios.interceptors.request.use(request => {
            console.log('Starting Request', JSON.stringify(request, null, 2))
            return request
        })

        axios.interceptors.response.use(response => {
            console.log('Response', JSON.stringify(response, null, 2))
            return response
        })

        this.Issuing = new Issuing(axios)
        this.Transfers = new Transfers(axios)
        this.Bills = new Bills(axios)
        this.Fx = new Fx(axios)
        this.Misc = new Misc(axios)
        this.Collections = new Collections(axios)
        this.Customers = new Customers(axios)
        this.Institution = new Institution(axios)
        this.Counterparty = new Counterparty(axios)
        this.Wallets = new Wallets(axios)

    }
}


const client = new Maplerad("", "live")
// client.Issuing.createCard()
// client.Transfer.CashPickupTransfer()
// client.Bills.BuyAirtime()
// client.Fx.ExchangeCurrency()
// client.Misc.GetCurrencies()
// client.Collections.CreateVirtualAccount()
// client.Customer.GetAllCustomers().then(data => console.log(data)).catch()
// client.Institution.GetAllInstitutions()
// client.Counterparty.GetAllCounterparties()
// client.Wallets.GetWalletByCurrency()