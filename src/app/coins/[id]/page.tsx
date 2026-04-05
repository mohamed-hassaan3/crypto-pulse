import { coinDetails } from "@/entities/coinDetails";
import { CoinId } from "@/views/coinId";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const coinIdDetails = await coinDetails(id);
  console.log("DATA", coinIdDetails);
  return (
    <div>
      <CoinId id={id} />
    </div>
  );
}
