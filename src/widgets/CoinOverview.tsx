import Image from 'next/image'

export const CoinOverview = () => {
  return (
    <div>
      <div className='flex gap-3'>
        <Image src={"https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png"}
          width={50}
          height={50}
          alt='coin' />
        <div>
          <p className='text-md text-neutral-400'>Bitcoin/BTC</p>
          <h1 className='font-bold text-xl'>$82,630.00</h1>
        </div>
      </div>
    </div>
  )
}
