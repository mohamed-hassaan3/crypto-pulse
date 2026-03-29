import { cn } from '@/lib/utils'
import CoinOverview from '@/widgets/CoinOverview'
import TopCategories from '@/widgets/TopCategories'
import TrendingCoins from '@/widgets/TrendingCoins'

const Landing = () => {
    return (
        <article className={cn("grid md:grid-cols-3 grid-cols-1 gap-4 home-grid", "home-grid")}>
            <section className='md:col-span-2 border  p-4 bg-(--primary-color) rounded-sm'>
                <CoinOverview />
            </section>
            <section className='border p-4 bg-(--primary-color) rounded-sm'>
                <TrendingCoins />
            </section>
            <section className='border p-4 bg-(--primary-color) rounded-sm'>
                <TopCategories />
            </section>
        </article>
    )
}

export default Landing