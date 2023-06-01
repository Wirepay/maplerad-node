import { AxiosInstance, AxiosResponse } from 'axios'

const path = '/counterparties'

export default class Counterparty {
  constructor(private readonly axios: AxiosInstance) {}

  public async Blacklist(
    counterpartyID: string,
    status: boolean,
  ): Promise<AxiosResponse | any> {
    try {
      return await this.axios.post(`${path}/blacklist/${counterpartyID}`, {
        blacklist: status,
      })
    } catch (error) {
      return error
    }
  }

  public async GetCounterparty(
    counterpartyID: string,
  ): Promise<AxiosResponse | any> {
    try {
      return await this.axios.get(`${path}/${counterpartyID}`)
    } catch (error) {
      return error
    }
  }

  public async GetAllCounterparties(): Promise<AxiosResponse | any> {
    try {
      return await this.axios.get(path)
    } catch (error) {
      return error
    }
  }
}
