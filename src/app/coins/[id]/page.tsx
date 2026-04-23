import { CoinId } from "@/views";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <main>
      <CoinId id={id} />
    </main>
  );
}
