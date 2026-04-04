import { getTrendingCoin, trendingCoinColumns } from '@/entities/trending-coin'
import { DataTable } from '@/shared/ui'

export const revalidate = 60

export const TrendingCoin = async () => {
  const result = await getTrendingCoin()
  return (
    <div>
      <DataTable
        columns={trendingCoinColumns}
        data={result?.coins.slice(0, 6) ?? []}
        rowKey={(coin) => coin.item.id}
      />
    </div>
  )
}
