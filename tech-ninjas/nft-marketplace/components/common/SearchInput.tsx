import { IoMdSearch } from "react-icons/io";

export default function SearchInput() {
  return (
    <div className="bg-white/10 flex items-center backdrop-blur-[20px] px-3 py-1 rounded-xl">
      <IoMdSearch className="text-xl" />
      <input className="focus:outline-none bg-transparent" type="text" />
      <span className="p-0.5 px-2 rounded-lg bg-white/[0.16]">/</span>
    </div>
  );
}
