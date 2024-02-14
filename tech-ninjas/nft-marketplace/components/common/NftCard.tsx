import Image from "next/image";

interface IProps {
  title: string;
  price: number;
  imageSrc: string;
  volume: number;
  isSmallCard?: boolean;
}

export default function NftCard(Props: IProps) {
  const { title, price, imageSrc, isSmallCard = false, volume } = Props;

  console.log("🚀 ~ NftCard ~ isSmallCard:", isSmallCard);

  return (
    <div className="relative rounded-xl flex-shrink-0 inline-block overflow-hidden text-white">
      <Image
        className="hover:scale-110 transition-all duration-300"
        src={imageSrc}
        width={200}
        height={200}
        alt="nft"
      />
      {!isSmallCard ? (
        <div className="absolute bottom-0 p-2 text-sm left-0 bg-black/30 w-full ">
          <h5>{title}</h5>
          <span>Floor: {price} ETH</span>
        </div>
      ) : (
        <div className="absolute bottom-0 p-2 text-sm left-0 bg-gray-800 w-full">
          <h5>{title}</h5>

          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-400">Floor</span> {price}{" "}
              ETH
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-400">Total Volume</span>{" "}
              {volume} ETH
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
