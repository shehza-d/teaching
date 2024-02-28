import { PortableTextBlock } from "sanity";

export interface IBlog {
  _id: string;
  slug: string;
  mainImage: string;
  publishedAt: Date;
  title: string;
  author: string;
  body?: PortableTextBlock;
}
