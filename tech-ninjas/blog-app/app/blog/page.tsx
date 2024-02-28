import Link from "next/link";
import { getAllBlogs } from "../../sanity/sanity-utils";

export default async function page() {
  const data = await getAllBlogs();

  console.log("🚀 ~ page ~ data:", data);

  return (
    <main>
      <h1>blog page</h1>

      <div className="grid grid-cols-2">
        {data.map((item) => (
          <Link
            href={`/blog/${item.slug}`}
            className="p-6 m-10 border-2 border-red-400"
            key={item._id}
          >
            <img src={item.mainImage} />
            <h3 className="text-2xl">{item.title}</h3>
          </Link>
        ))}
      </div>
    </main>
  );
}
