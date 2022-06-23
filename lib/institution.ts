import {AxiosInstance, AxiosResponse} from "axios";

const path = "/institutions"

interface InstitutionsParams{
    page?: string
    pageSize?: string
    type?: string
    country?: string
}
interface ResolveInstitutionPayload{
    accountNumber: string
    bankCode: string
}

export default class Institution {
    private axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios
    }
    public async GetAllInstitutions({page,pageSize,country,type}:InstitutionsParams): Promise<AxiosResponse | any> {
        let query = "?"
        query += page ? `${page}&` : ""
        query += pageSize ? `${pageSize}&` : ""
        query += country ? `${country}&` : ""
        query += type ? `${type}&` : ""

        try{
            const response = await this.axios.get(path+query)
            return response.data
        }catch (error){
            return error
        }
    }
    public async ResolveInstitution(payload: ResolveInstitutionPayload):Promise<AxiosResponse | any>{
        try{
            const response = await this.axios.post(`${path}/resolve`, payload)
            return response.data
        }catch (error){
            return error
        }
    }
}