import Button from "./common/Button";
import SearchInput from "./common/SearchInput";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";
import Image from "next/image";

export default function Header() {
  return (
    <header className="text-gray-200 z-30 flex w-full backdrop-blur-lg h-20 fixed top-0 bgblack/25 justify-between items-center">
      <div className="flex gap-2 items-center">
        <Image src="/assets/opensea.svg" alt="" height={30} width={30} />

        <h2 className="border-r-[1px] border-gray-300 pr-2">OpenSea</h2>

        <nav className="flex gap-2">
          <a href="">Drop</a>
          <a href="">Stats</a>
          <a href="">Create</a>
        </nav>
      </div>

      <SearchInput />

      <div className="flex gap-3">
        <Button className="flex gap-2 items-center">
          <MdOutlinePayment />
          <span> Login</span>
        </Button>
        <Button>
          <FaRegCircleUser />
        </Button>
        <Button>
          <LuShoppingCart />
        </Button>
      </div>
    </header>
  );
}
