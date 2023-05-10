import { CurrencyType } from "../utils";
import { AxiosInstance, AxiosResponse } from "axios";

const path = "/transfers";

interface IMeta {
    scheme: "DOM" | "CASHPICKUP";
    sender: {
        first_name: string;
        last_name: string;
        phone_number: string;
        address: string;
        country: string;
    };
    counterparty: {
        first_name: string;
        last_name: string;
        phone_number: string;
        address: string;
        country: string;
        identity: string;
    };
}

interface NairaTransferPayload {
    account_number: string;
    amount: number;
    bank_code: string;
    currency: "NGN";
}

interface TransferPayload {
    account_number: string;
    amount: number;
    bank_code: string;
    currency: CurrencyType;
    meta: IMeta;
    reason: string;
    reference: string;
}

export default class Transfers {
    private axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios;
    }

    public async NairaTransfer(
        payload: NairaTransferPayload
    ): Promise<AxiosResponse | any> {
        try {
            const response = await this.axios.post(path, payload);
            return response.data;
        } catch (error) {
            return error;
        }
    }

    public async DOMTransfer(
        payload: TransferPayload
    ): Promise<AxiosResponse | any> {
        if (payload.meta.scheme !== "DOM")
            return "Invalid Scheme type for this method";
        try {
            const response = await this.axios.post(path, payload);
            return response.data;
        } catch (error) {
            return error;
        }
    }

    public async CashPickupTransfer(
        payload: TransferPayload
    ): Promise<AxiosResponse | any> {
        if (payload.meta.scheme !== "CASHPICKUP")
            return "Invalid Scheme type for this method";
        try {
            const response = await this.axios.post(path, payload);
            return response.data;
        } catch (error) {
            return error;
        }
    }

    public async GetTransfer(transferID: string): Promise<AxiosResponse | any> {
        try {
            const response = await this.axios.get(`${path}/${transferID}`);
            return response.data;
        } catch (error) {
            return error;
        }
    }

    public async GetAllTransfers(): Promise<AxiosResponse | any> {
        try {
            const response = await this.axios.get(path);
            return response.data;
        } catch (error) {
            return error;
        }
    }
}
