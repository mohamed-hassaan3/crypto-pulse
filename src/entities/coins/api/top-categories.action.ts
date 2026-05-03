import { fetcher } from "@/shared";
import type { CategoryRow } from "../model/types";

export const getTopCategories = async (): Promise<CategoryRow[]> => {
  try {
    return await fetcher<CategoryRow[]>({
      endpoint: "coins/categories",
    });
  } catch (err) {
    if (err instanceof Error) {
      console.error("ERROR Fetch Categories", err);
    }

    return [];
  }
};
