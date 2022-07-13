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
import Transactions from "./lib/transactions";

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
    public Transactions: Transactions


    // key can be gotten from your Maplerad dashboard.
    // environment can only be "live" or "sandbox".
    constructor(key:string, environment: Env) {
        this.secretKey = key
        const axios = Axios.create({
            baseURL : environment.toLowerCase() === "live" ? "https://api.maplerad.com/v1" : "https://sandbox.api.maplerad.com/v1" ,
            headers: {
                Authorization: `Bearer ${(this.secretKey)}`,
                'Content-Type': 'application/json'
            },

        })
        axios.interceptors.request.use(request => {
            console.log('Starting Request', JSON.stringify(request, null, 2))
            return request
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
        this.Transactions = new Transactions(axios)

    }
}



//
// { name: 'Access Bank', code: '173' },
// { name: 'Access Money', code: '129' },
// { name: 'ASO Savings and & Loans', code: '156' },
// { name: 'Cellulant', code: '155' },
// { name: 'ChamsMobile', code: '144' },
// { name: 'CitiBank', code: '127' },
// { name: 'Coronation Merchant Bank', code: '165' },
// { name: 'Covenant Microfinance Bank', code: '146' },
// { name: 'Diamond Bank', code: '152' },
// { name: 'Eartholeum', code: '130' },
// { name: 'Ecobank Plc', code: '134' },
// { name: 'EcoMobile', code: '135' },
// { name: 'Enterprise Bank', code: '151' },
// { name: 'eTranzact', code: '125' },
// { name: 'FBNMobile', code: '118' },
// { name: 'FET', code: '169' },
// { name: 'Fidelity Bank', code: '126' },
// { name: 'Fidelity Mobile', code: '136' },
// { name: 'First Bank of Nigeria', code: '119' },
// { name: 'First City Monument Bank', code: '168' },
// { name: 'Fortis Microfinance Bank', code: '141' },
// { name: 'FortisMobile', code: '116' },
// { name: 'FSDH', code: '166' },
// { name: 'Globus Bank', code: '176' },
// { name: 'GTBank Plc', code: '159' },
// { name: 'GTMobile', code: '171' },
// { name: 'Hedonmark', code: '131' },
// { name: 'Heritage', code: '157' },
// { name: 'HighStreet MFB bank', code: '175' },
// { name: 'Imperial Homes Mortgage Bank', code: '147' },
// { name: 'JAIZ Bank', code: '133' },
// { name: 'Jubilee Life Mortgage Bank', code: '158' },
// { name: 'Keystone Bank', code: '163' },
// { name: 'Mkudi', code: '167' },
// { name: 'MoneyBox', code: '132' },
// { name: 'NIP Virtual Bank', code: '138' },
// { name: 'NPF MicroFinance Bank', code: '148' },
// { name: 'Omoluabi Mortgage Bank', code: '121' },
// { name: 'Pagatech', code: '164' },
// { name: 'Page MFBank', code: '114' },
// { name: 'Parralex', code: '149' },
// { name: 'PayAttitude Online', code: '142' },
// { name: 'Paycom', code: '153' },
// { name: 'Polaris Bank', code: '162' },
// { name: 'ReadyCash (Parkway)', code: '122' },
// { name: 'SafeTrust Mortgage Bank', code: '145' },
// { name: 'Stanbic IBTC Bank', code: '140' },
// { name: 'Stanbic Mobile Money', code: '115' },
// { name: 'Standard Chartered Bank', code: '124' },
// { name: 'Sterling Bank', code: '161' },
// { name: 'Sterling Mobile', code: '120' },
// { name: 'SunTrust Bank', code: '154' },
// { name: 'TagPay', code: '117' },
// { name: 'TCF MFB', code: '174' },
// { name: 'TeasyMobile', code: '137' },
// { name: 'Trustbond', code: '170' },
// { name: 'Union Bank', code: '160' },
// { name: 'United Bank for Africa', code: '172' },
// { name: 'Unity Bank', code: '128' },
// { name: 'VTNetworks', code: '139' },
// { name: 'Wema Bank', code: '150' },
// { name: 'Zenith Bank', code: '123' },
// { name: 'ZenithMobile', code: '143' }

