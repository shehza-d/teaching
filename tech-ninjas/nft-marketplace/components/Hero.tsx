"use client";
import { useEffect, useState } from "react";
import Button from "@/components/common/Button";
import NftCard from "./common/NftCard";
import { nfts } from "@/data";

export default function Hero() {
  const [bgImage, setBgImage] = useState(0);
  const [sliderNfts, setSliderNfts] = useState(nfts.slice(0, 4));

  const backgroundImages = ["bg1.avif", "bg2.avif", "bg3.avif"];

  useEffect(() => {
    const id = setInterval(() => {
      if (bgImage >= backgroundImages.length - 1) {
        setBgImage(0);
        return;
      }

      setBgImage(bgImage + 1);
    }, 4000);

    const id2 = setInterval(() => {
      setSliderNfts(nfts.slice(4, 8));
    }, 4000);

    return () => clearInterval(id);
  }, [bgImage]);

  return (
    <div
      className="overflow-hidden h-[60vh] bg-no-repeat bg-cover transition-all duration-1000"
      style={{
        backgroundImage: `url(/assets/${
          backgroundImages[bgImage] || "bg1.avif"
        })`,
      }}
    >
      <div className="pt-20 text-gray-100 relative z-20 w-full h-full backdrop-blur-lg bg-black/25">
        <div>
          <Button>All</Button>
          <Button>Arts</Button>
          <Button>Gaming</Button>
          <Button>Memberships</Button>
          <Button>PFPs</Button>
          <Button>Photography</Button>
          <Button>Music</Button>
        </div>

        <div className="w-screen gap-4 flex overflow-x-scroll no-scrollbar">
          {sliderNfts.map((nft, i) => (
            <NftCard
              title={nft.name}
              price={nft.floorPrice}
              imageSrc={nft.imageSrc || ""}
              key={i}
            />
          ))}
        </div>
      </div>
      <div className="bg-gray-800 h-12 blur-sm -m-8"></div>
    </div>
  );
}
