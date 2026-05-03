"use client";
import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useDebounce } from "use-debounce";
import { searchQuery } from "../api/search-query.action";
import type { SearchQueryResult } from "../model/types";
import { SearchResult } from "./searchResult";

export const SearchQueryClient = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [resultData, setResultData] = useState<SearchQueryResult | null>(null);
  const [isResultOpen, setIsResultOpen] = useState(false);
  const [debounceValue] = useDebounce(searchTerm, 300);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const closeSearch = () => {
    setSearchTerm("");
    setResultData(null);
    setIsResultOpen(false);
  };

  useEffect(() => {
    let isActive = true;

    const getSearch = async () => {
      if (!debounceValue.trim()) {
        setResultData(null);
        setIsResultOpen(false);
        return;
      }

      const data = await searchQuery(debounceValue);
      if (isActive) {
        setResultData(data);
        setIsResultOpen(Boolean(data));
      }
    };

    getSearch();

    return () => {
      isActive = false;
    };
  }, [debounceValue]);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!searchContainerRef.current?.contains(event.target as Node)) {
        closeSearch();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  return (
    <div ref={searchContainerRef} className="relative flex items-center">
      <div className="pointer-events-none absolute right-5 hidden text-neutral-500 sm:block">
        <Search size={20} />
      </div>
      <input
        type="text"
        className="search-input"
        placeholder="search..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setIsResultOpen(true);
        }}
        onFocus={() => {
          if (resultData) setIsResultOpen(true);
        }}
      />
      {isResultOpen ? (
        <SearchResult resultData={resultData} onSelect={closeSearch} />
      ) : null}
    </div>
  );
};
