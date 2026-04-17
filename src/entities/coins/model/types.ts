// Coins ID
interface Ticker {
  market: {
    name: string;
  };
  base: string;
  target: string;
  converted_last: {
    usd: number;
  };
  timestamp: string;
  trade_url: string;
}

export interface CoinDetailsData {
  id: string;
  name: string;
  symbol: string;
  asset_platform_id?: string | null;
  detail_platforms?: Record<
    string,
    {
      geckoterminal_url: string;
      contract_address: string;
    }
  >;
  image: {
    large: string;
    small: string;
  };
  market_data: {
    current_price: {
      usd: number;
      [key: string]: number;
    };
    price_change_24h_in_currency: {
      usd: number;
    };
    price_change_percentage_24h_in_currency: {
      usd: number;
    };
    price_change_percentage_30d_in_currency: {
      usd: number;
    };
    market_cap: {
      usd: number;
    };
    total_volume: {
      usd: number;
    };
  };
  market_cap_rank: number;
  description: {
    en: string;
  };
  links: {
    homepage: string[];
    blockchain_site: string[];
    subreddit_url: string;
  };
  tickers: Ticker[];
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
