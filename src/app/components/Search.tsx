import { Input } from "@/components/ui/input";
import { SearchIcon, ZoomInIcon } from "lucide-react";

export function Search() {
  //   return <Input type="text" placeholder="Search" />
  return (
    <div className="relative flex items-center max-w-2xl ">
      <SearchIcon className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
      <Input
        placeholder="Your search..."
        //   value={search}
        //   onChange={(event) => setSearch(event.target.value)}
        className=" pl-8"
      />
    </div>
  );
}
