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
