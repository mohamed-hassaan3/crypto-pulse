import { CategoryId } from "@/views";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main>
      <CategoryId id={id} />
    </main>
  );
}
