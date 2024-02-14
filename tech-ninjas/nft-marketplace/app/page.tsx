import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrendingTableSection from "@/components/TrendingTable/TrendingTableSection";
import NftCollections from "@/components/common/NftCollections";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TrendingTableSection />
      <NftCollections />
    </>
  );
}
