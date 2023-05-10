import { AxiosInstance, AxiosResponse } from "axios";

const path = "/transactions";

export default class Transactions {
    private axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios;
    }

    public async GetAllTransactions(): Promise<AxiosResponse | any> {
        try {
            const response = await this.axios.get(path);
            return response.data;
        } catch (error) {
            return error;
        }
    }

    // The transaction ID or Reference is the parameter for this method
    public async GetTransaction(
        transactionId: string
    ): Promise<AxiosResponse | any> {
        try {
            const response = await this.axios.get(`${path}/${transactionId}`);
            return response.data;
        } catch (error) {
            return error;
        }
    }

    // The transaction ID or Reference is the parameter for this method
    public async VerifyCollectionTransaction(
        transactionId: string
    ): Promise<AxiosResponse | any> {
        try {
            const response = await this.axios.get(
                `${path}/verify/${transactionId}`
            );
            return response.data;
        } catch (error) {
            return error;
        }
    }
}
