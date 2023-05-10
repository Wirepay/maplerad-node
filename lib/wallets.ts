import { AxiosInstance, AxiosResponse } from "axios";
import { CurrencyType, QueryParams } from "../utils";

const path = "/wallets";

export default class Wallets {
    private axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios;
    }

    public async GetWallets(): Promise<AxiosResponse | any> {
        try {
            const response = await this.axios.get(path);
            return response.data;
        } catch (error) {
            return error;
        }
    }

    public async GetWalletsHistory(
        params?: QueryParams
    ): Promise<AxiosResponse | any> {
        try {
            const response = await this.axios.get(`${path}/history`, {
                params,
            });
            return response.data;
        } catch (error) {
            return error;
        }
    }

    public async GetWalletsHistoryByCurrency(
        currencyCode: CurrencyType,
        params?: QueryParams
    ): Promise<AxiosResponse | any> {
        try {
            const response = await this.axios.get(
                `${path}/${currencyCode}/history`,
                { params }
            );
            return response.data;
        } catch (error) {
            return error;
        }
    }
}
