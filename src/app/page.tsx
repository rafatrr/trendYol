import ProductList from "./components/ProductList";
import Image from "next/image";
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const category = params?.category ?? "all";
  return (
    <div>
      <div className="relative aspect-[3/1] mb-4">
        <Image src="/featured.png" alt="featured product" fill />
      </div>
      <ProductList category={category} params="Homepage" />
       
    </div>
  );
}



