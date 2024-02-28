import { groq } from "next-sanity";
// import type { IProduct, TCategory } from "@/types";
import { client } from "./lib/client";

export const getBlog = async () => {
  return client.fetch(
    groq`*[_type == "post"]{
			_id,
			title,
			slug,
			author,
			"slug": slug.current,
			"mainImage": mainImage.asset->url,
			publishedAt,
			body
		}`
  );
};
