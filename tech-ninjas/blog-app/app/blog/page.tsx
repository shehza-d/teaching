import { getBlog } from "../../sanity/sanity-utils";

export default async function page() {
  const data = await getBlog();
 
  console.log("🚀 ~ page ~ data:", data);
 
  return <div>blog page</div>;
}
