"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();


    const handelFilter = (value: string) => {
    const params = new URLSearchParams(searchParams); // searchparams here is object of all params
    params.set("sort", value || "all"); // i pass the value of category
    router.push(`${pathName}?${params.toString()}`, { scroll: false }); // pathname is / and params.tostring() is category=shoes
  };


  return (
    <div className="flex justify-end items-center text-sm text-gray-500 my-6 gap-1">
      <span className="">Sort by:</span>
      <select
        className="ring-1 ring-gray-200  shadow-md p-1"
        name="sort"
        id="sort"
        onChange={(e) => handelFilter(e.target.value)}
        >
        <option value="newest">newest</option>
        <option value="oldest">oldest</option>
        <option value="asc">Price: Low to high</option>
        <option value="desc">Price: high to Low</option>
      </select>
    </div>
  );
};

export default Filter;
