import {AxiosInstance} from "axios";

export default class Misc {
    private axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios
    }

    public async GetCurrencies(){
        try{
            const response = await this.axios.get("/currencies")
            return response.data
        }catch (error){
            return error
        }
    }


}