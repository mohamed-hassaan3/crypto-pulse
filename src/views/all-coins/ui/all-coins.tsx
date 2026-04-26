import { allCoins } from "@/entities/coins";
import { AllCoinsTable } from "@/widgets";

export const Coins = async () => {
  const coinsData = await allCoins();
  /*   const rate24h = await allCoins("24h")
  const rate7d = await allCoins("7d")
  const rate30d = await allCoins("30d") */
  console.log(coinsData);
  return (
    <article>
      <h4 className="heading-title">All Cryptocurrencies</h4>
      <p className="sub-heading-title ">
        View a full list of active cryptocurrencies
      </p>
      <div id="all-coins-table">
        <AllCoinsTable coinsData={coinsData ?? []} />
      </div>
    </article>
  );
};
