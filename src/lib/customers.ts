import { AxiosInstance, AxiosResponse } from 'axios'
import { CountryType, CardBrand } from '../utils'

const path = '/customers'

interface IAddress {
  city: string
  country: string
  postal_code: string
  state: string
  street: string
  street2: string
}

interface _Identity {
  country: string
  image?: string
  number: string
  type: string
}

interface CreateCustomerPayload {
  email: string
  first_name: string
  last_name: string
  country: CountryType
}

interface TierOnePayload {
  customer_id: string
  phone: {
    phone_number: string
    phone_short_code: string
  }
  address: IAddress
  dob: string
  identification_number: string
}

interface TierTwoPayload {
  customer_id: string
  identity: _Identity
}

interface IFullEnrollCustomer {
  first_name: string
  last_name: string
  email: string
  phone: {
    phone_number: string
    phone_country_code: string
  }
  dob: string
  identification_number: string
  identity: _Identity
  address: IAddress
}

interface IUpdateCustomer {
  customer_id: string
  photo: string
  phone: {
    phone_number: string
    phone_country_code: string
  }
  middle_name: string
  identity: _Identity
}

export default class Customers {
  constructor(private readonly axios: AxiosInstance) {}

  public async FullEnrollCustomer(
    payload: IFullEnrollCustomer,
  ): Promise<AxiosResponse | any> {
    try {
      return await this.axios.post(`${path}/enroll`, payload)
    } catch (error) {
      return error
    }
  }

  public async CreateCustomer(
    payload: CreateCustomerPayload,
  ): Promise<AxiosResponse | any> {
    try {
      return await this.axios.post(`${path}`, payload)
    } catch (error) {
      return error
    }
  }

  public async UpgradeCustomerTier1(
    payload: TierOnePayload,
  ): Promise<AxiosResponse | any> {
    try {
      return await this.axios.patch(`${path}/upgrade/tier1`, payload)
    } catch (error) {
      return error
    }
  }

  public async UpgradeCustomerTier2(
    payload: TierTwoPayload,
  ): Promise<AxiosResponse | any> {
    try {
      return await this.axios.patch(`${path}/upgrade/tier2`, payload)
    } catch (error) {
      return error
    }
  }

  public async GetCustomer(customerID: string): Promise<AxiosResponse | any> {
    try {
      return await this.axios.get(`${path}/${customerID}`)
    } catch (error) {
      return error
    }
  }

  public async GetAllCustomers(): Promise<AxiosResponse | any> {
    try {
      return await this.axios.get(`${path}`)
    } catch (error) {
      return error
    }
  }

  public async GetCustomerCards(customerID: string): Promise<AxiosResponse | any> {
    try {
      return await this.axios.get(`${path}/${customerID}/cards`)
    } catch (error) {
      return error
    }
  }

  public async GetCustomerTransactions(
    customerID: string,
  ): Promise<AxiosResponse | any> {
    try {
      return await this.axios.get(`${path}/${customerID}/transactions`)
    } catch (error) {
      return error
    }
  }

  public async GetCustomerVirtualAccounts(
    customerID: string,
  ): Promise<AxiosResponse | any> {
    try {
      return await this.axios.get(`${path}/${customerID}/virtual-account`)
    } catch (error) {
      return error
    }
  }
  public async CustomerCardEnrollment(
    customerID: string,
    brand: CardBrand,
  ): Promise<AxiosResponse | any> {
    try {
      return await this.axios.patch(`${path}/card-enroll`, {
        customer_id: customerID,
        brand,
      })
    } catch (error) {
      return error
    }
  }

  public async UpdateCustomer(
    payload: IUpdateCustomer,
  ): Promise<AxiosResponse | any> {
    try {
      return await this.axios.patch(`${path}/update`, payload)
    } catch (error) {
      return error
    }
  }

  public async SetCustomerBlacklistActive(
    customerID: string,
    status: boolean,
  ): Promise<AxiosResponse | any> {
    try {
      return await this.axios.post(`${path}/${customerID}/active`, {
        blacklist: status,
      })
    } catch (error) {
      return error
    }
  }
}
