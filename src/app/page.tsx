import ProductList from "./components/ProductList";
import Image from "next/image";

export default function Home({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const category = searchParams.category || "";

  return (
    <div>
      <div className="relative aspect-[3/1] mb-4">
        <Image src="/featured.png" alt="featured product" fill />
      </div>
      <ProductList category={category} params="Homepage" />
    </div>
  );
}
