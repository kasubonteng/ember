import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";

const Search = () => {
  return (
    // <div className="flex w-[344px] justify-between rounded-full border border-white bg-white/30 p-4 backdrop-blur-sm">
    //   <input type="text" className="h-full flex-1 bg-transparent" />
    //   <div className="rounded-full bg-primary">
    //     <SearchIcon className="text-white" />
    //   </div>
    // </div>

    <div className="relative">
      <Input
        placeholder="Search furniture"
        className="w-[344px] rounded-full border border-white bg-white/40 p-6 text-white outline-none backdrop-blur-sm placeholder:text-base placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-0"
      />
      <div className="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full bg-primary p-2 text-white">
        <SearchIcon />
      </div>
    </div>
  );
};

export default Search;
