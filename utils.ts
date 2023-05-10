type CurrencyType = "NGN" | "USD"
type CountryType = "NG"
type CardBrand = "VISA" | "MASTERCARD"
type IdentityType = "PASSPORT" | "VOTERS_CARD" | "DRIVERS_LICENSE"

interface QueryParams {
    // YYYY-MM-DD
    start_date?: string
    end_date?: string
    page_size?: number
    page?: number
}

export {
    CardBrand,
    CountryType,
    CurrencyType,
    IdentityType,
    QueryParams
}