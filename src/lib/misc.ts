import { AxiosInstance, AxiosResponse } from 'axios'
import { CurrencyType } from '../utils'

interface TestWalletPayload {
  amount: string
  currency: CurrencyType
}

export default class Misc {
  constructor(private readonly axios: AxiosInstance) {}

  public async GetCurrencies(): Promise<AxiosResponse | any> {
    try {
      return await this.axios.get('/currencies')
    } catch (error) {
      return error
    }
  }

  public async GetCountries(): Promise<AxiosResponse | any> {
    try {
      return await this.axios.get('/countries')
    } catch (error) {
      return error
    }
  }

  public async CreditTestWallet(
    _payload: TestWalletPayload,
  ): Promise<AxiosResponse | any> {
    try {
      return await this.axios.get('/test/wallet/credit')
    } catch (error) {
      return error
    }
  }
}
