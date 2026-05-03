"use server";

import { fetcher } from "@/shared";
import type { NftDetails } from "../model/types";

export const getNftDetails = async (id: string): Promise<NftDetails | null> => {
  try {
    return await fetcher<NftDetails>({
      endpoint: `nfts/${id}`,
    });
  } catch (err) {
    console.error("ERROR Fetch NFT Details", err);
    return null;
  }
};
