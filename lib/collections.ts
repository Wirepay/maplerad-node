import { AxiosInstance, AxiosResponse } from "axios";
import { CurrencyType, IdentityType } from "../utils";

const path = "/collections";

interface VirtualAccountPayload {
    customer_id: string;
    currency: CurrencyType;
    preferred_bank: string;
    deposit_account_id: string;
    // meta is for USD Accounts
    meta?: {
        occupation: string;
        utility_bill: string | File;
        bank_statement: string | File;
        identity_type: IdentityType;
        identity_image: string | File;
        identity_number: string;
        identity_issued_date: string;
        identity_expiration: string;
    };
}

export default class Collections {
    private axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios;
    }

    public async CreateVirtualAccount(
        payload: VirtualAccountPayload
    ): Promise<AxiosResponse | any> {
        try {
            const response = await this.axios.post(
                path + "/virtual-account",
                payload
            );
            return response.data;
        } catch (error) {
            return error;
        }
    }
}
