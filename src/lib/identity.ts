import { AxiosInstance, AxiosResponse } from 'axios'

const path = '/identity'

export default class Identity {
  constructor(private readonly axios: AxiosInstance) {}

  public async VerifyIdentity(bvn: string): Promise<AxiosResponse | any> {
    try {
      return await this.axios.post(`${path}`, { bvn })
    } catch (error) {
      return error
    }
  }
}
