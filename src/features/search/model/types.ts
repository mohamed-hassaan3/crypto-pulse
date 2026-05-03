export interface SearchQueryResult {
  coins: Coins[];
  categories: Categories[];
  nfts: Nfts[];
}

export interface Coins {
  id: string;
  name: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
}

export interface Categories {
  id: string;
  name: string;
}

export interface Nfts {
  id: string;
  name: string;
  symbol: string;
  thumb: string;
}
/* export type SearchResultProps = {
  resultData: SearchQueryResult | null;
  onSelect: (value: string) => void;
}; */
