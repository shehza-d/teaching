import Image from "next/image";

interface IProps {
  title: string;
  price: string;
  imageSrc: string;
}

export default function Card(Props: IProps) {
  const { title, price, imageSrc } = Props;

  return (
    <div className="relative inline-block overflow-hidden text-white">
      <Image
        className="hover:scale-110 transition-all duration-300"
        src={imageSrc}
        width={200}
        height={200}
        alt="nft"
      />
      <div className="absolute bottom-2 left-1 bg-black/30 w-full ">
        <h5>{title}</h5>
        <span>{price}</span>
      </div>
    </div>
  );
}
