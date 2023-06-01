import { AxiosInstance, AxiosResponse } from 'axios'

const path = '/institutions'

interface InstitutionsParams {
  page?: string
  pageSize?: string
  type?: string
  country?: string
}

interface ResolveInstitutionPayload {
  account_number: string
  bank_code: string
}

export default class Institution {
  constructor(private readonly axios: AxiosInstance) {}

  public async GetAllInstitutions(
    params: InstitutionsParams,
  ): Promise<AxiosResponse | any> {
    try {
      return await this.axios.get(path, { params: params })
    } catch (error) {
      return error
    }
  }

  public async ResolveInstitution(
    payload: ResolveInstitutionPayload,
  ): Promise<AxiosResponse | any> {
    try {
      return await this.axios.post(`${path}/resolve`, { payload })
    } catch (error: any) {
      return error.data
    }
  }
}
