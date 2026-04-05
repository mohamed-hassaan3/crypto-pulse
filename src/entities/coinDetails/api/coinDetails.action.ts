"use server";

import { fetcher } from "@/shared/api/fetcher";

export const coinDetails = async (id: string) => {
  try {
    return await fetcher<CoinDetailsData>(`/coins/${id}`);
  } catch (err) {
    console.error("ERROR: ", err);
  }
};
