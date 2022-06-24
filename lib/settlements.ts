import {AxiosInstance, AxiosResponse} from "axios";
import {CurrencyType} from "../utils";

const path = "/settlements"

interface SettlementPayload{
    account_name: string
    account_number: string
    bank_code: string
    currency: CurrencyType

}

export default class Settlement {
    private axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios
    }

    public async MakeSettlement(payload: SettlementPayload):Promise<AxiosResponse | any>{
        try{
            const response = await this.axios.post(path, payload)
            return response.data
        }catch (error){
            return error
        }
    }

    public async GetSettlements():Promise<AxiosResponse | any>{
        try{
            const response = await this.axios.get(path)
            return response.data
        }catch (error){
            return error
        }
    }

    public async DeleteSettlement():Promise<AxiosResponse | any>{
        try{
            const response = await this.axios.delete(path)
            return response.data
        }catch (error){
            return error
        }
    }
}