import { AxiosInstance, AxiosResponse} from "axios";
import {CurrencyType} from "../utils";

const path = "/issuing"

type CardType = "physical" | "virtual"

interface CardPayload{
    customer_id :string
    type: CardType
    currency: CurrencyType
    auto_approve : boolean
}

export default class Issuing {
    private axios: AxiosInstance;
    constructor(axios: AxiosInstance) {
        this.axios = axios
    }


    public async CreateCard(payload:CardPayload): Promise<AxiosResponse | any>{
        try{
            const response = await this.axios.post(`${path}`,payload)
            return response.data
        }catch (error) {
            return error
        }
    }

    public  async GetCard(cardID: string): Promise<AxiosResponse | any>{
        try{
            const response = await this.axios.get(`${path}/${cardID}`)
            return response.data
        }catch (error) {
            return error
        }
    }

    public  async GetAllCards():Promise<AxiosResponse | any>{
        try{
            const response = await this.axios.get(`${path}`)
            return response.data
        }catch (error) {
            return error
        }
    }

    public  async GetCardTransactions(cardID: string){
        try{
            const response = await this.axios.get("")
        }catch (error) {
            return error
        }
    }

    public async FundCard(cardID :string, amount: number):Promise<AxiosResponse | any>{
        try{
            const response = await this.axios.post(`${path}/${cardID}/fund`, {
                amount
            })
            return response.data
        }catch (error) {
            return error
        }
    }

    public async WithdrawFromCard(cardID:string, amount:number): Promise<AxiosResponse | any>{
        try{
            const response = await this.axios.post(`${path}/${cardID}/withdraw`, {
                amount
            })
            return response.data
        }catch (error){
            return error
        }
    }

    public async EnableCard(cardID :string): Promise<AxiosResponse | any>{
        try{
            const response = await this.axios.patch(`${path}/${cardID}/enable`)
            return response.data
        }catch (error) {
            return error
        }
    }

    public async DisableCard(cardID :string):Promise<AxiosResponse | any>{
        try{
            const response = await this.axios.patch(`${path}/${cardID}/disable`)
            return response.data
        }catch (error) {
            return error
        }
    }
}