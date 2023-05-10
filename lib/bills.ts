import { AxiosInstance, AxiosResponse } from "axios";
import { CountryType } from "../utils";

const path = "/bills/airtime";

interface BuyAirtimePayload {
    phone_number: string;
    identifier?: string;
    amount: number;
}

export default class Bills {
    private axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios;
    }

    public async BuyAirtime(
        payload: BuyAirtimePayload
    ): Promise<AxiosResponse | any> {
        try {
            const response = await this.axios.post(path, payload);
            return response.data;
        } catch (error) {
            return error;
        }
    }

    public async GetAirtimeBillers(
        country: CountryType
    ): Promise<AxiosResponse | any> {
        try {
            const response = await this.axios.get(`${path}/billers/${country}`);
            return response.data;
        } catch (error) {
            return error;
        }
    }

    public async GetAirtimeHistory(): Promise<AxiosResponse | any> {
        try {
            const response = await this.axios.get(path);
            return response.data;
        } catch (error) {
            return error;
        }
    }
}
