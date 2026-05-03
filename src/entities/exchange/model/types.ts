export interface ExchangeRate {
  name: string;
  unit: string;
  value: number;
  type: string;
}

export interface ExchangeRatesResult {
  rates: {
    usd: ExchangeRate;
    [key: string]: ExchangeRate;
  };
}
