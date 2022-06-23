import {AxiosInstance} from "axios";

const path = "/issuing"

type CardType = "physical" | "virtual"
type CurrencyType = "NGN" | "USD"

interface cardPayload{
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


    public async createCard(payload:cardPayload){
        try{
            const response = await this.axios.post(`${path}`,payload)
            return response.data
        }catch (error) {
            return error
        }
    }

    public  async getCard(cardID: string){
        try{
            const response = await this.axios.get(`${path}/${cardID}`)
            return response.data
        }catch (error) {
            return error
        }
    }

    public  async getAllCards(){
        try{
            const response = await this.axios.get(`${path}`)
            return response.data
        }catch (error) {
            return error
        }
    }

    public  async getCardTransactions(cardID: string){
        try{
            const response = await this.axios.get("")
        }catch (error) {
            return error
        }
    }

    public async fundCard(cardID :string){
        try{
            const response = await this.axios.get(`${path}/${cardID}/fund`)
            return response.data
        }catch (error) {
            return error
        }
    }

    public async withdrawFromCard(cardID:string){
        try{
            const response = await this.axios.get(`${path}/${cardID}/withdraw`)
            return response.data
        }catch (error) {
            return error
        }
    }

    public async enableCard(id :string){
        try{
            const response = await this.axios.patch(`${path}/${id}/enable`)
            return response.data
        }catch (error) {
            return error
        }
    }

    public async disableCard(id :string){
        try{
            const response = await this.axios.patch(`${path}/${id}/disable`)
            return response.data
        }catch (error) {
            return error
        }
    }
}