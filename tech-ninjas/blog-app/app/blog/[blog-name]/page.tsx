import { getBlog } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

interface IProps {
  params: { "blog-name": string };
}

export default async function page({ params }: IProps) {
  const blogData = await getBlog(params["blog-name"]);

  console.log("🚀 ~ testingg ~ blogData:", blogData);

  return (
    <div>
      <img src={blogData.mainImage} width="100%" alt="" />
      <h1 className="text-5xl text-center my-8">{blogData.title}</h1>

      <div className="mx-8">
        <PortableText value={blogData.body!} />
      </div>
    </div>
  );
}
