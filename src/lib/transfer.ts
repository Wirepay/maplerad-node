import { CurrencyType } from '../utils'
import { AxiosInstance, AxiosResponse } from 'axios'

const path = '/transfers'

interface IMeta {
  scheme: 'DOM' | 'CASHPICKUP'
  sender: {
    first_name: string
    last_name: string
    phone_number: string
    address: string
    country: string
  }
  counterparty: {
    first_name: string
    last_name: string
    phone_number: string
    address: string
    country: string
    identity: string
  }
}

interface NairaTransferPayload {
  account_number: string
  amount: number
  bank_code: string
  currency: 'NGN'
}

interface TransferPayload {
  account_number: string
  amount: number
  bank_code: string
  currency: CurrencyType
  meta: IMeta
  reason: string
  reference: string
}

export default class Transfers {
  constructor(private readonly axios: AxiosInstance) {}

  public async NairaTransfer(
    payload: NairaTransferPayload,
  ): Promise<AxiosResponse | any> {
    try {
      return await this.axios.post(path, payload)
    } catch (error) {
      return error
    }
  }

  public async DOMTransfer(
    payload: TransferPayload,
  ): Promise<AxiosResponse | any> {
    if (payload.meta.scheme !== 'DOM') {
      throw new Error('Invalid Scheme type for this method')
    }

    try {
      return await this.axios.post(path, payload)
    } catch (error) {
      return error
    }
  }

  public async CashPickupTransfer(
    payload: TransferPayload,
  ): Promise<AxiosResponse | any> {
    if (payload.meta.scheme !== 'CASHPICKUP') {
      throw new Error('Invalid Scheme type for this method')
    }

    try {
      return await this.axios.post(path, payload)
    } catch (error) {
      return error
    }
  }

  public async GetTransfer(transferID: string): Promise<AxiosResponse | any> {
    try {
      return await this.axios.get(`${path}/${transferID}`)
    } catch (error) {
      return error
    }
  }

  public async GetAllTransfers(): Promise<AxiosResponse | any> {
    try {
      return await this.axios.get(path)
    } catch (error) {
      return error
    }
  }
}
