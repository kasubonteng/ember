import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";

const Search = () => {
  return (
    <div className="relative">
      <Input
        placeholder="Search furniture"
        className="w-[344px] rounded-full border border-white bg-white/40 p-6 text-black outline-none backdrop-blur-sm placeholder:text-base placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-0"
      />
      <div className="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full bg-primary p-2 text-white">
        <SearchIcon />
      </div>
    </div>
  );
};

export default Search;
