import { nfts } from "@/data";
import NftCard from "./NftCard";

export default function NftCollections() {
  return (
    <div className="w-screen gap-4 flex overflow-x-scroll no-scrollbar">
      {nfts.map((nft, i) => (
        <NftCard
          title={nft.name}
          price={nft.floorPrice}
          imageSrc={nft.imageSrc || ""}
          volume={nft.volume}
          isSmallCard={true}
          key={i}
        />
      ))}
    </div>
  );
}
