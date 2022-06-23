import {AxiosInstance, AxiosResponse} from "axios";

const path = "/customers"

interface IAddress {
    city:string
    country:string
    postal_code:string
    state:string
    street:string
    street2:string
}
interface _Identity{
    country:string
    image?:string
    number:string
    type:string
}

interface CreateCustomerPayload {
    address : IAddress
    dob:string
    email:string
    identity: _Identity
    first_name:string
    last_name:string
    phone_number:string
}

export default class Customer {
    private axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios
    }

    public async CreateCustomer(payload: CreateCustomerPayload): Promise<AxiosResponse | any>{
        try{
            const response = await this.axios.post(`${path}`)
            return response.data
        }catch (error){
            return error
        }
    }
    public async GetCustomer(customerID: string): Promise<AxiosResponse | any>{
        try{
            const response = await this.axios.get(`${path}/${customerID}`)
            return response.data
        }catch (error){
            return error
        }
    }
    public async GetAllCustomers(): Promise<AxiosResponse | any>{
        try{
            const response = await this.axios.get(`${path}`)
            return response.data
        }catch (error){
            return error
        }
    }
    public async GetCustomerCards(customerID: string): Promise<AxiosResponse | any>{
        try{
            const response = await this.axios.get(`${path}/${customerID}/cards`)
            return response.data
        }catch (error){
            return error
        }
    }
    public async GetCustomerTransactions(customerID: string): Promise<AxiosResponse | any>{
        try{
            const response = await this.axios.get(`${path}/${customerID}/transactions`)
            return response.data
        }catch (error){
            return error
        }
    }
    public async SetCustomerBlacklistActive(customerID: string, status: boolean): Promise<AxiosResponse | any>{
        try{
            const response = await this.axios.post(`${path}/${customerID}/active`, {
                blacklist:status
            })
            return response.data
        }catch (error){
            return error
        }
    }
}