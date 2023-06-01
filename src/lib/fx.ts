import { AxiosInstance, AxiosResponse } from 'axios'
import { CurrencyType } from '../utils'

const path = '/fx'

interface QuotePayload {
  source_currency: CurrencyType
  target_currency: CurrencyType
  amount: number
}

export default class Fx {
  constructor(private readonly axios: AxiosInstance) {}

  public async GenerateQuote(payload: QuotePayload): Promise<AxiosResponse | any> {
    try {
      return await this.axios.post(`${path}/quote`, payload)
    } catch (error) {
      return error
    }
  }

  public async ExchangeCurrency(
    quote_reference: string,
  ): Promise<AxiosResponse | any> {
    try {
      return await this.axios.post(path, { quote_reference })
    } catch (error) {
      return error
    }
  }

  public async GetFXHistory(): Promise<AxiosResponse | any> {
    try {
      return await this.axios.get(path)
    } catch (error) {
      return error
    }
  }
}
