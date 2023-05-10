import { AxiosInstance, AxiosResponse } from "axios";

const path = "/counterparties";

export default class Counterparty {
    private axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios;
    }

    public async Blacklist(
        counterpartyID: string,
        status: boolean
    ): Promise<AxiosResponse | any> {
        try {
            const response = await this.axios.post(
                `${path}/blacklist/${counterpartyID}`,
                {
                    blacklist: status,
                }
            );
            return response.data;
        } catch (error) {
            return error;
        }
    }

    public async GetCounterparty(
        counterpartyID: string
    ): Promise<AxiosResponse | any> {
        try {
            const response = await this.axios.get(`${path}/${counterpartyID}`);
            return response.data;
        } catch (error) {
            return error;
        }
    }

    public async GetAllCounterparties(): Promise<AxiosResponse | any> {
        try {
            const response = await this.axios.get(path);
            return response.data;
        } catch (error) {
            return error;
        }
    }
}
