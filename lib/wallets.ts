import {AxiosInstance, AxiosResponse} from "axios";
import {CurrencyType} from "../utils";

const path = "wallets"

export default class Wallets {
    private axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios
    }

    public async GetWallets():Promise<AxiosResponse | any>{
        try{
            const response = await this.axios.get(path)
            return response.data
        }catch (error){
            return error
        }
    }
    public async GetWalletByCurrency(currencyCode: CurrencyType):Promise<AxiosResponse | any>{
        try{
            const response = await this.axios.get(`${path}/${currencyCode}`)
            return response.data
        }catch (error){
            return error
        }
    }
    public async GetWalletsHistory():Promise<AxiosResponse | any>{
        try{
            const response = await this.axios.get(`${path}/history`)
            return response.data
        }catch (error){
            return error
        }
    }
    public async GetWalletsHistoryByCurrency(currencyCode: CurrencyType):Promise<AxiosResponse | any>{
        try{
            const response = await this.axios.get(`${path}/${currencyCode}/history`)
            return response.data
        }catch (error){
            return error
        }
    }
}