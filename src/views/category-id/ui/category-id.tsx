import { getCategoryCoins } from "@/entities/coins";
import { AllCoinsTable } from "@/widgets";

const formatCategoryName = (id: string) =>
  decodeURIComponent(id)
    .split("-")
    .filter(Boolean)
    .map((word) => word[0]?.toUpperCase() + word.slice(1))
    .join(" ");

export const CategoryId = async ({ id }: { id: string }) => {
  const coinsData = await getCategoryCoins(id);

  return (
    <article>
      <h1 className="heading-title">{formatCategoryName(id)}</h1>
      <p className="sub-heading-title">
        Market data for this category priced in USD.
      </p>
      <AllCoinsTable coinsData={coinsData} />
    </article>
  );
};
