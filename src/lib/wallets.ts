import { AxiosInstance, AxiosResponse } from 'axios'
import { CurrencyType, QueryParams } from '../utils'

const path = '/wallets'

export default class Wallets {
  constructor(private readonly axios: AxiosInstance) {}

  public async GetWallets(): Promise<AxiosResponse | any> {
    try {
      return await this.axios.get(path)
    } catch (error) {
      return error
    }
  }

  public async GetWalletsHistory(
    params?: QueryParams,
  ): Promise<AxiosResponse | any> {
    try {
      return await this.axios.get(`${path}/history`, { params })
    } catch (error) {
      return error
    }
  }

  public async GetWalletsHistoryByCurrency(
    currencyCode: CurrencyType,
    params?: QueryParams,
  ): Promise<AxiosResponse | any> {
    try {
      return await this.axios.get(`${path}/${currencyCode}/history`, {
        params,
      })
    } catch (error) {
      return error
    }
  }
}
