import { AxiosInstance, AxiosResponse } from "axios";

const path = "/identity";

export default class Identity {
    private axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios;
    }

    public async VerifyIdentity(bvn: string): Promise<AxiosResponse | any> {
        try {
            const response = await this.axios.post(`${path}`, {
                bvn,
            });
            return response.data;
        } catch (error) {
            return error;
        }
    }
}
