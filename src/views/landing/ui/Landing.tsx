import { cn } from "@/shared/lib/utils";
import { CoinOverview, TopCategories, TrendingCoin } from "@/widgets";

export const Landing = () => {
  return (
    <article
      className={cn(
        "grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 md:px-8 lg:px-4 xl:px-0",
        "home-grid",
      )}
    >
      <section className="xl:col-span-2 border p-4 bg-(--primary-color) rounded-sm">
        <CoinOverview />
      </section>
      <section className="border p-4 xl:col-span-1 bg-(--primary-color) rounded-sm">
        <TrendingCoin />
      </section>
      <section className="border lg:col-span-3 col-span-1 p-4 bg-(--primary-color) rounded-sm">
        <TopCategories />
      </section>
    </article>
  );
};
