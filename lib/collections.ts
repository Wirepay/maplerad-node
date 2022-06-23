import {AxiosInstance, AxiosResponse} from "axios";
import {CurrencyType} from "../utils";


const path = "/collections"

interface VirtualAccountPayload {
    customer_id : string
    currency: string
}
interface DirectDebitPayload{
    currency : CurrencyType
    amount:number
    reference: string
    description: string
}
export default class Collections {
    private axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios
    }
    public async CreateVirtualAccount(payload:VirtualAccountPayload):Promise<AxiosResponse | any>{
        try{
            const response = await this.axios.post(path+"/virtual-account", payload)
            return response.data
        }catch (error){
            return error
        }
    }
    public async DirectDebit(payload:DirectDebitPayload):Promise<AxiosResponse | any>{
        try{
            const response = await this.axios.post(`${path}/direct-debit`, payload)
            return response.data
        }catch (error){
            return  error
        }
    }

}