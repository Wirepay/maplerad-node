import { AxiosInstance, AxiosResponse } from 'axios'
import { CurrencyType, QueryParams, CardBrand } from '../utils'

const path = '/issuing'

type CardType = 'PHYSICAL' | 'VIRTUAL'

interface CardPayload {
  customer_id: string
  type: CardType
  currency: CurrencyType
  auto_approve: boolean
  brand?: CardBrand
  amount?: number
  card_pin?: number
}

interface BusinessCardPayload extends CardPayload {
  name: string
}

export default class Issuing {
  constructor(private readonly axios: AxiosInstance) {}

  public async CreateCard(payload: CardPayload): Promise<AxiosResponse | any> {
    try {
      return await this.axios.post(`${path}`, payload)
    } catch (error) {
      return error
    }
  }

  public async CreateBusinessCard(
    payload: BusinessCardPayload,
  ): Promise<AxiosResponse | any> {
    try {
      return await this.axios.post(`${path}/business`, payload)
    } catch (error) {
      return error
    }
  }

  public async SetCardPin(
    cardID: string,
    pin: string,
  ): Promise<AxiosResponse | any> {
    try {
      return await this.axios.patch(`${path}/${cardID}/set-pin`, { card_pin: pin })
    } catch (error) {
      return error
    }
  }

  public async GetCard(cardID: string): Promise<AxiosResponse | any> {
    try {
      return await this.axios.get(`${path}/${cardID}`)
    } catch (error) {
      return
    }
  }

  public async GetAllCards(): Promise<AxiosResponse | any> {
    try {
      return await this.axios.get(`${path}`)
    } catch (error) {
      return error
    }
  }

  public async GetCardTransactions(cardID: string, params?: QueryParams) {
    try {
      return await this.axios.get(`${path}/${cardID}/transactions`, {
        params: params,
      })
    } catch (error) {
      return error
    }
  }

  public async FundCard(
    cardID: string,
    amount: number,
  ): Promise<AxiosResponse | any> {
    try {
      return await this.axios.post(`${path}/${cardID}/fund`, {
        amount,
      })
    } catch (error) {
      return error
    }
  }

  public async WithdrawFromCard(
    cardID: string,
    amount: number,
  ): Promise<AxiosResponse | any> {
    try {
      return await this.axios.post(`${path}/${cardID}/withdraw`, {
        amount,
      })
    } catch (error) {
      return error
    }
  }

  public async FreezeCard(cardID: string): Promise<AxiosResponse | any> {
    try {
      return await this.axios.patch(`${path}/${cardID}/freeze`)
    } catch (error) {
      return error
    }
  }

  public async UnFreezeCard(cardID: string): Promise<AxiosResponse | any> {
    try {
      return await this.axios.patch(`${path}/${cardID}/unfreeze`)
    } catch (error) {
      return error
    }
  }
}
