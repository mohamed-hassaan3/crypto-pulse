import DataTable from '@/components/DataTable'
import { columns } from '@/constant/columns'

const TrendingCoins = () => {
  return (
    <div>
      <DataTable columns={columns} data={[]} rowKey={(coin) => coin.item.id} />
    </div>
  )
}

export default TrendingCoins