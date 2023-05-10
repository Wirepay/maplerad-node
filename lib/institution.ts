import { AxiosInstance, AxiosResponse } from "axios";

const path = "/institutions";

interface InstitutionsParams {
    page?: string;
    pageSize?: string;
    type?: string;
    country?: string;
}

interface ResolveInstitutionPayload {
    account_number: string;
    bank_code: string;
}

export default class Institution {
    private axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios;
    }

    public async GetAllInstitutions(
        params: InstitutionsParams
    ): Promise<AxiosResponse | any> {
        try {
            const response = await this.axios.get(path, { params: params });
            return response.data;
        } catch (error) {
            return error;
        }
    }

    public async ResolveInstitution(
        payload: ResolveInstitutionPayload
    ): Promise<AxiosResponse | any> {
        try {
            const response = await this.axios.post(`${path}/resolve`, {
                payload,
            });
            return response.data;
        } catch (error: any) {
            return error.data;
        }
    }
}
