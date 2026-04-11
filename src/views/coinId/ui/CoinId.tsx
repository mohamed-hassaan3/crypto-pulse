import { coinDetails } from "@/entities/coinsId";

export const CoinId = async ({ id }: { id: string }) => {
  const details = await coinDetails(id);

  if (!details) {
    return <p className="text-neutral-400">Unable to load coin details.</p>;
  }

  return (
    <div className="space-y-2">
      <p className="text-neutral-300">
        {details.name} ({details.symbol.toUpperCase()})
      </p>
      <p className="text-neutral-400">
        Price (USD): {details.market_data.current_price.usd}
      </p>
    </div>
  );
};
