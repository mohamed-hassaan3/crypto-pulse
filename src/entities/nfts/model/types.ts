export interface NftDetails {
  id: string;
  contract_address: string;
  asset_platform_id: string;
  name: string;
  symbol: string;
  image?: {
    small?: string;
    small_2x?: string;
  };
  banner_image?: string;
  description?: string;
  native_currency?: string;
  floor_price?: NftCurrencyValue;
  market_cap?: NftCurrencyValue;
  volume_24h?: NftCurrencyValue;
  floor_price_in_usd_24h_percentage_change?: number;
  volume_in_usd_24h_percentage_change?: number;
  number_of_unique_addresses?: number;
  total_supply?: number;
  one_day_sales?: number;
  links?: {
    homepage?: string;
    twitter?: string;
    discord?: string;
  };
}

export interface NftCurrencyValue {
  native_currency?: number;
  usd?: number;
}
