"use client";

import Image from "next/image";
import Link from "next/link";
import type { SearchQueryResult } from "../model/types";

type SearchResultProps = {
  resultData: SearchQueryResult | null;
  onSelect: () => void;
};

export const SearchResult = ({ resultData, onSelect }: SearchResultProps) => {
  const coins = resultData?.coins.slice(0, 6) ?? [];
  const categories = resultData?.categories.slice(0, 4) ?? [];
  const nfts = resultData?.nfts.slice(0, 4) ?? [];
  const hasResults =
    coins.length > 0 || categories.length > 0 || nfts.length > 0;

  if (!hasResults) return null;

  return (
    <div className="search-results-panel">
      {coins.length > 0 ? (
        <section>
          <p className="px-4 pt-3 pb-2 text-xs font-semibold uppercase text-neutral-500">
            Coins
          </p>
          {coins.map((coin) => (
            <Link
              key={coin.id}
              href={`/coins/${coin.id}`}
              className="search-result-item"
              onClick={onSelect}
            >
              <Image
                src={coin.thumb}
                width={24}
                height={24}
                alt=""
                className="size-6 shrink-0 rounded-full"
              />
              <span className="min-w-0 flex-1 truncate">{coin.name}</span>
              <span className="text-xs uppercase text-neutral-500">
                {coin.symbol}
              </span>
            </Link>
          ))}
        </section>
      ) : null}

      {categories.length > 0 ? (
        <section className="border-t border-dark-400">
          <p className="px-4 pt-3 pb-2 text-xs font-semibold uppercase text-neutral-500">
            Categories
          </p>
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.id}`}
              className="search-result-item"
              onClick={onSelect}
            >
              <span className="min-w-0 flex-1 truncate">{category.name}</span>
            </Link>
          ))}
        </section>
      ) : null}

      {nfts.length > 0 ? (
        <section className="border-t border-dark-400">
          <p className="px-4 pt-3 pb-2 text-xs font-semibold uppercase text-neutral-500">
            NFTs
          </p>
          {nfts.map((nft) => (
            <Link
              key={nft.id}
              href={`/nfts/${nft.id}`}
              className="search-result-item"
              onClick={onSelect}
            >
              {nft.thumb ? (
                <Image
                  src={nft.thumb}
                  width={24}
                  height={24}
                  alt=""
                  className="size-6 shrink-0 rounded-full"
                />
              ) : null}
              <span className="min-w-0 flex-1 truncate">{nft.name}</span>
              <span className="text-xs uppercase text-neutral-500">
                {nft.symbol}
              </span>
            </Link>
          ))}
        </section>
      ) : null}
    </div>
  );
};
