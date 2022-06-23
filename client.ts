import Axios from "axios";
import Issuing from "./lib/issuing";
import Transfer from "./lib/transfer";
import Bills from "./lib/bills";
import Fx from "./lib/fx";

type Env = "live" | "sandbox"

export default class Maplerad {
    private readonly secretKey: string;
    public Issuing: Issuing;
    public Transfer: Transfer;
    public Bills: Bills;
    public Fx: Fx;


    // key can be gotten from your Maplerad dashboard
    // environment can only be "live" or "sandbox"
    constructor(key:string, environment: Env) {
        this.secretKey = key
        const axios = Axios.create({
            baseURL : environment === "live" ? "https://api.maplerad.com/v1" : "https://api.sandbox.maplerad.com/v1" ,
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
        this.Transfer = new Transfer(axios)
        this.Bills = new Bills(axios)
        this.Fx = new Fx(axios)

    }
}


const client = new Maplerad("", "live")
// client.Issuing.createCard()
// client.Transfer.CashPickupTransfer()
// client.Bills.BuyAirtime()
