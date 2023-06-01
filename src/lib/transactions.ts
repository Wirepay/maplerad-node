import { AxiosInstance, AxiosResponse } from 'axios'

const path = '/transactions'

export default class Transactions {
  constructor(private readonly axios: AxiosInstance) {}

  public async GetAllTransactions(): Promise<AxiosResponse | any> {
    try {
      return await this.axios.get(path)
    } catch (error) {
      return error
    }
  }

  // The transaction ID or Reference is the parameter for this method
  public async GetTransaction(
    transactionId: string,
  ): Promise<AxiosResponse | any> {
    try {
      return await this.axios.get(`${path}/${transactionId}`)
    } catch (error) {
      return error
    }
  }

  // The transaction ID or Reference is the parameter for this method
  public async VerifyCollectionTransaction(
    transactionId: string,
  ): Promise<AxiosResponse | any> {
    try {
      return await this.axios.get(`${path}/verify/${transactionId}`)
    } catch (error) {
      return error
    }
  }
}
