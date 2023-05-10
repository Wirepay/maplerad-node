import { AxiosInstance, AxiosResponse } from "axios";
import { CurrencyType } from "../utils";

interface TestWalletPayload {
    amount: string;
    currency: CurrencyType;
}

export default class Misc {
    private axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios;
    }

    public async GetCurrencies(): Promise<AxiosResponse | any> {
        try {
            const response = await this.axios.get("/currencies");
            return response.data;
        } catch (error) {
            return error;
        }
    }

    public async GetCountries(): Promise<AxiosResponse | any> {
        try {
            const response = await this.axios.get("/countries");
            return response.data;
        } catch (error) {
            return error;
        }
    }

    public async CreditTestWallet(
        payload: TestWalletPayload
    ): Promise<AxiosResponse | any> {
        try {
            const response = await this.axios.get("/test/wallet/credit");
            return response.data;
        } catch (error) {
            return error;
        }
    }
}
