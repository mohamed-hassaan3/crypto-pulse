import { Search } from 'lucide-react'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className='flex items-center justify-between '>
        <div>
            <h3 className=' font-extrabold text-xl'>CryptoPulse</h3>
        </div>
        <div className='relative flex items-center'>
            <div className=' absolute right-5 sm:block hidden '>
                <Search color='gray' size={20} />
            </div>
            <input type="text" className='lg:w-[600px] md:w-[400px] mx-2 sm:w-[250px] sm:block hidden  py-2 px-4 bg-(--primary-color) rounded-sm placeholder:italic outline-0 text-neutral-300 pr-8' placeholder='search...' />
        </div>
        <nav className='flex items-center gap-3'>
            <Link href="/">Home</Link>
            <Link href="/coins">Coins</Link>
        </nav>
    </header>
  )
}
