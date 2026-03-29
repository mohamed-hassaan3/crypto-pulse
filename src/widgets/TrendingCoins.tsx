import DataTable from '@/components/DataTable'
import { columns } from '@/constants/columns'
import type { TrendingCoinRow } from '@/types/trending'

const TrendingCoins = () => {
  const data: TrendingCoinRow[] = []
  return (
    <div>
      <DataTable columns={columns} data={data} rowKey={(coin) => coin.item.id} />
    </div>
  )
}

export default TrendingCoins