// Coins ID
export type AreaChartOHLCData = [number, number, number, number, number];
export interface InfoDataProps {
  id: string;
  symbol: string;
  name: string;
  web_slug: string;
  block_time_in_minutes: number;
  hashing_algorithm: string;
  categories: string[];
  description: Description;
  links: Links;
  image: Image;
  country_origin: string;
  genesis_date: string;
  sentiment_votes_up_percentage: number;
  sentiment_votes_down_percentage: number;
  watchlist_portfolio_users: number;
  market_cap_rank: number;
  market_cap_rank_with_rehypothecated: number;
  market_data: MarketData;
  community_data: CommunityData;
  last_updated: string;
  tickers: Ticker[];
  treasury_coins?: number | null;
}
export interface Description {
  en: string;
}
export interface Links {
  homepage: string[];
  whitepaper: string;
  blockchain_site: string[];
  official_forum_url: string[];
  chat_url: string[];
  announcement_url: string[];
  snapshot_url: string;
  twitter_screen_name: string;
  facebook_username: string;
  telegram_channel_identifier: string;
  subreddit_url: string;
}
export interface Image {
  thumb: string;
  small: string;
  large: string;
}
export interface MarketData {
  current_price: CurrentPrice;
  market_cap: MarketCap;
  market_cap_rank: number;
  fully_diluted_valuation: FullyDilutedValuation;
  market_cap_fdv_ratio: number;
  total_volume: TotalVolume;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  total_supply: number;
  max_supply: number;
  circulating_supply: number;
  last_updated: string;
  total_value_locked?: TotalValueLocked | null;
  price_change_percentage_1h_in_currency?: { usd: number };
  price_change_percentage_24h_in_currency?: { usd: number };
  price_change_percentage_7d_in_currency?: { usd: number };
  price_change_percentage_14d_in_currency?: { usd: number };
  price_change_percentage_30d_in_currency?: { usd: number };
  price_change_percentage_1y_in_currency?: { usd: number };
}
export interface CurrentPrice {
  usd: number;
}
export interface MarketCap {
  usd: number;
}
export interface FullyDilutedValuation {
  usd: number;
}
export interface TotalVolume {
  usd: number;
}

export interface TotalValueLocked {
  usd: number;
}

export interface PriceChangePercentage24hInCurrency {
  usd: number;
}
export interface CommunityData {
  facebook_likes: string | number;
  reddit_average_posts_48h: number;
  reddit_average_comments_48h: number;
  reddit_subscribers: number;
  reddit_accounts_active_48h: number;
  telegram_channel_user_count: string | number;
}
export interface Ticker {
  base: string;
  target: string;
  market: Market;
  last: number;
  volume: number;
  converted_last: ConvertedLast;
  converted_volume: ConvertedVolume;
  trust_score: string | number;
  bid_ask_spread_percentage: number;
  timestamp: string;
  last_traded_at: string;
  last_fetch_at: string;
  is_anomaly: boolean;
  is_stale: boolean;
  trade_url?: string;
  token_info_url: string;
  coin_id: string;
  target_coin_id?: string;
  coin_mcap_usd: number;
}
export interface Market {
  name: string;
  identifier: string;
  has_trading_incentive: boolean;
}
export interface ConvertedLast {
  btc: number;
  eth: number;
  usd: number;
}

export interface ConvertedVolume {
  btc: number;
  eth: number;
  usd: number;
}

// Overview Coins
export interface OverviewCoinData {
  id: string;
  name: string;
  symbol: string;
  image: {
    large: string;
    small: string;
  };
  market_data: {
    current_price: {
      usd: number;
    };
  };
}

export type OverviewCoinOHLCData = [number, number, number, number, number];

export type OverviewChartPeriod = "1" | "7" | "30" | "90" | "180" | "365";

// Trending Coins
export interface TrendingCoinProps {
  item: {
    id: string;
    name: string;
    symbol: string;
    market_cap_rank: number;
    thumb: string;
    large: string;
    data: {
      price: number;
      price_change_percentage_24h: {
        usd: number;
      };
    };
  };
}

export interface TrendingCoinRow {
  item: {
    id: string;
    name: string;
    large: string;
    data: {
      price: number;
      price_change_percentage_24h: { usd: number };
    };
  };
}

// Categories
export interface CategoryRow {
  id: string;
  name: string;
  top_3_coins: string[];
  market_cap_change_24h: number;
  market_cap: number;
  volume_24h: number;
  top_3_coins_id: string[];
}

// All Coins
export interface AllCoinsRow {
  id: string;
  name: string;
  image: string;
  market_cap_rank: number;
  total_volume: number;
  market_cap: number;
  circulating_supply: number;
  total_supply: number;
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_24h: number;
  price_change_percentage_7d_in_currency: number;
  price_change_percentage_30d_in_currency: number;
  symbol: string;
  current_price: number;
}
