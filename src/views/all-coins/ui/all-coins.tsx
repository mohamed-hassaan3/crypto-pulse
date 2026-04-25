import { allCoins } from "@/entities/coins";
import { AllCoinsTable } from "@/widgets";

export const Coins = async () => {
  const coinsData = await allCoins("1h");
  console.log(coinsData);
  return (
    <article>
      <h4 className="heading-title">All Cryptocurrencies</h4>
      <p className="sub-heading-title ">
        View a full list of active cryptocurrencies
      </p>
      <div>
        <AllCoinsTable coinsData={coinsData ?? []} />
      </div>
    </article>
  );
};
