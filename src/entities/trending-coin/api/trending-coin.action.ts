"use server"
import { fetcher } from '@/shared/api/fetcher'
import type { TrendingCoinProps } from '../model/types'

export const getTrendingCoin = async (): Promise<{ coins: TrendingCoinProps[] } | null> => {
  try {
    return await fetcher<{ coins: TrendingCoinProps[] }>('/search/trending')
  } catch (err: unknown) {
    console.error('ERROR: ', err)
    return null
  }
}
