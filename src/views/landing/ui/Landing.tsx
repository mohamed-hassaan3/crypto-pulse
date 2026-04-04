import { cn } from '@/shared/lib/utils'
import { CoinOverview, TopCategories, TrendingCoin } from '@/widgets'

export const Landing = () => {
  return (
    <article className={cn('grid md:grid-cols-3 grid-cols-1 gap-4', 'home-grid')}>
      <section className="md:col-span-2 border  p-4 bg-(--primary-color) rounded-sm">
        <CoinOverview />
      </section>
      <section className="border p-4 md:col-span-1 bg-(--primary-color) rounded-sm">
        <TrendingCoin />
      </section>
      <section className="border md:col-span-3 p-4 bg-(--primary-color) rounded-sm">
        <TopCategories />
      </section>
    </article>
  )
}
