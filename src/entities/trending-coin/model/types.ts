export interface TrendingCoinProps {
  item: {
    id: string
    name: string
    symbol: string
    market_cap_rank: number
    thumb: string
    large: string
    data: {
      price: number
      price_change_percentage_24h: {
        usd: number
      }
    }
  }
}

export interface TrendingCoinRow {
  item: {
    id: string
    name: string
    large: string
    data: {
      price: number
      price_change_percentage_24h: { usd: number }
    }
  }
}
