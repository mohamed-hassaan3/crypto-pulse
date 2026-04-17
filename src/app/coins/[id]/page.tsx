import { CoinId, CoinIdFallback } from "@/views/coin-id";
import { Suspense } from "react";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <Suspense fallback={<CoinIdFallback />}>
        <CoinId id={id} />
      </Suspense>
    </div>
  );
}
