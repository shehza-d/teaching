import { trendingNfts } from "@/data";
import TrendingTable from "./TrendingTable";
import Button from "@/components/common/Button";

export default function TrendingTableSection() {
  return (
    <div>
      <Button className="text-white ">Trending</Button>
      <Button className="text-gray-400 ">Top</Button>

      <div className="flex gap-6 px-6">
        <TrendingTable trendingNfts={trendingNfts} />
        <TrendingTable trendingNfts={trendingNfts} />
      </div>
    </div>
  );
}
