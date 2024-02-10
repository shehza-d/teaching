"use client";
import { useEffect, useState } from "react";
import Button from "@/components/common/Button";
import Card from "./common/Card";
import { nfts } from "@/data";

export default function Hero() {
  const [bgImage, setBgImage] = useState(0);

  let backgroundImages = ["bg1.avif", "bg2.avif", "bg3.avif"];

  useEffect(() => {
    setInterval(() => {
      if (bgImage >= backgroundImages.length - 1) {
        // setBgImage(0);
        // return;
      }

      setBgImage(bgImage + 1);
    }, 3000);
  }, []);

  return (
    <div
      className=" h-[60vh] bg-no-repeat bg-cover transition-all duration-1000"
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

        {nfts.map((nft, i) => (
          <Card
            title={nft.title}
            price={nft.price}
            imageSrc={nft.imageSrc}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
