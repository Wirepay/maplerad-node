import { AxiosInstance, AxiosResponse } from 'axios'
import { CountryType } from '../utils'

const path = '/bills/airtime'

interface BuyAirtimePayload {
  phone_number: string
  identifier?: string
  amount: number
}

export default class Bills {
  constructor(private readonly axios: AxiosInstance) {}

  public async BuyAirtime(
    payload: BuyAirtimePayload,
  ): Promise<AxiosResponse | any> {
    try {
      return await this.axios.post(path, payload)
    } catch (error) {
      return error
    }
  }

  public async GetAirtimeBillers(
    country: CountryType,
  ): Promise<AxiosResponse | any> {
    try {
      return await this.axios.get(`${path}/billers/${country}`)
    } catch (error) {
      return error
    }
  }

  public async GetAirtimeHistory(): Promise<AxiosResponse | any> {
    try {
      return await this.axios.get(path)
    } catch (error) {
      return error
    }
  }
}
