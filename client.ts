import Axios from "axios";
import Issuing from "./lib/issuing";

type Env = "live" | "sandbox"
type Method = "get"|" GET" | "post" | "POST" | "put" | "PUT" | "delete" | "DELETE" | "patch" | "PATCH"


export default class Maplerad {
    private readonly secretKey: string;
    public Issuing: Issuing;

    // key can be gotten from your Maplerad dashboard
    // environment can only be "live" or "sandbox"
    constructor(key:string, environment: Env) {
        this.secretKey = key
        const axios = Axios.create({
            baseURL : environment === "live" ? "https://api.maplerad.com/v1" : "https://api.sandbox.maplerad.com/v1" ,
            headers: {
                Authorization: `Bearer ${(this.secretKey)}`,
                'Content-Type': 'application/json'
            }
        })
        this.Issuing = new Issuing(axios)

    }
}


const client = new Maplerad("", "live")
// client.Issuing.createCard()
