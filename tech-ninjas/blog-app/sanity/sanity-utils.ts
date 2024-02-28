import { groq } from "next-sanity";
// import type { IProduct, TCategory } from "@/types";
import { client } from "./lib/client";
import { IBlog } from "@/types";

export const getAllBlogs = async (): Promise<IBlog[]> => {
  return client.fetch(
    groq`*[_type == "post"]{
			_id,
			title,
			slug,
			author,
			"slug": slug.current,
			"mainImage": mainImage.asset->url,
			publishedAt,
		}`,
  );
};

export const getBlog = async (slug: string): Promise<IBlog> => {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
		  _id,
		  _createdAt,
		  title,
		  body,
		  "slug": slug.current,
		  productQuantity,
		  "mainImage": mainImage.asset->url,
		  author,
		  publishedAt,
		}`,
    { slug },
  );
};
