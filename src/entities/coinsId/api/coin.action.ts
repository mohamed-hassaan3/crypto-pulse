"use server";

import { fetcher } from "@/shared/api/fetcher";
import { CoinDetailsData } from "../model/types";

export const coinDetails = async (id: string) => {
  try {
    return await fetcher<CoinDetailsData>(`/coins/${id}`);
  } catch (err) {
    console.error("ERROR: ", err);
  }
};
