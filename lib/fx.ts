import { AxiosInstance, AxiosResponse } from "axios";
import { CurrencyType } from "../utils";

const path = "/fx";

interface QuotePayload {
    source_currency: CurrencyType;
    target_currency: CurrencyType;
    amount: number;
}

export default class Fx {
    private axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios;
    }

    public async GenerateQuote(
        payload: QuotePayload
    ): Promise<AxiosResponse | any> {
        try {
            const response = await this.axios.post(`${path}/quote`, payload);
            return response.data;
        } catch (error) {
            return error;
        }
    }

    public async ExchangeCurrency(
        quote_reference: string
    ): Promise<AxiosResponse | any> {
        try {
            const response = await this.axios.post(path, {
                quote_reference,
            });
            return response.data;
        } catch (error) {
            return error;
        }
    }

    public async GetFXHistory(): Promise<AxiosResponse | any> {
        try {
            const response = await this.axios.get(path);
            return response.data;
        } catch (error) {
            return error;
        }
    }
}
