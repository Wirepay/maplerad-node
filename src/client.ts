import Axios from 'axios'
import Issuing from './lib/issuing'
import Identity from './lib/identity'
import Transfers from './lib/transfer'
import Bills from './lib/bills'
import Fx from './lib/fx'
import Misc from './lib/misc'
import Collections from './lib/collections'
import Customers from './lib/customers'
import Institution from './lib/institution'
import Counterparty from './lib/counterparty'
import Wallets from './lib/wallets'
import Transactions from './lib/transactions'

type Env = 'live' | 'sandbox'

export default class Maplerad {
  readonly baseUrl: string

  public readonly Issuing: Issuing
  public readonly Identity: Identity
  public readonly Transfers: Transfers
  public readonly Bills: Bills
  public readonly Fx: Fx
  public readonly Misc: Misc
  public readonly Collections: Collections
  public readonly Customers: Customers
  public readonly Institution: Institution
  public readonly Counterparty: Counterparty
  public readonly Wallets: Wallets
  public readonly Transactions: Transactions

  // key can be gotten from your Maplerad dashboard.
  // environment can only be "live" or "sandbox".
  constructor(readonly key?: string, readonly environment: Env = 'live') {
    if (!key) {
      this.key = process.env.MAPLERAD_SECRET_KEY

      if (!this.key) {
        throw new Error(
          'Missing API key. Pass it to the constructor `new Maplerad("re_123")`',
        )
      }
    }

    const live = 'https://api.maplerad.com/v1'
    const sandbox = 'https://sandbox.api.maplerad.com/v1'

    this.baseUrl =
      process.env.MAPLERAD_BASE_URL ||
      (environment.toLowerCase() === 'live' ? live : sandbox)

    const axios = Axios.create({
      baseURL: this.baseUrl,
      headers: {
        Authorization: `Bearer ${this.key}`,
        'Content-Type': 'application/json',
      },
    })

    axios.interceptors.request.use((request) => {
      console.log('Starting Request', JSON.stringify(request, null, 2))
      return request
    })

    axios.interceptors.response.use(
      (response) => {
        if (response.data) {
          return response.data
        }

        return response
      },
      (error) => {
        if (error?.response?.data?.error) {
          return Promise.reject(error.response.data.error)
        }

        if (error?.response?.data) {
          return Promise.reject(error.response.data)
        }

        return Promise.reject(error)
      },
    )

    this.Issuing = new Issuing(axios)
    this.Identity = new Identity(axios)
    this.Transfers = new Transfers(axios)
    this.Bills = new Bills(axios)
    this.Fx = new Fx(axios)
    this.Misc = new Misc(axios)
    this.Collections = new Collections(axios)
    this.Customers = new Customers(axios)
    this.Institution = new Institution(axios)
    this.Counterparty = new Counterparty(axios)
    this.Wallets = new Wallets(axios)
    this.Transactions = new Transactions(axios)
  }
}
