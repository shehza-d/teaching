import { INft } from "@/types";

interface IProps {
  trendingNfts: INft[];
}

export default function TrendingTable(Props: IProps) {
  const { trendingNfts } = Props;

  return (
    <table className="text-white capitalize w-1/2 text-sm">
      <tr className="hover:bg-gray-700">
        <th>Rank</th>
        <th>Collection</th>
        <th></th>
        <th>floor Price</th>
        <th>volume</th>
      </tr>
      {trendingNfts.map((nft, i) => (
        <tr className="hover:bg-gray-700" key={i}>
          <td>{i + 1}</td>
          <td>
            <img
              src="/assets/nft.avif"
              alt="nft"
              width={40}
              className="rounded-lg"
            />
          </td>

          <td>{nft.name}</td>
          <td>{nft.floorPrice} ETH</td>
          <td>{nft.volume}</td>
        </tr>
      ))}
    </table>
  );
}
