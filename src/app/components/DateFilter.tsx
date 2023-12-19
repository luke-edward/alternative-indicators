import {
  ChevronDownIcon,
  Clock1,
  Clock2,
  Clock3,
  Clock5,
  Clock6,
  Cloud,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function DateFilter() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Last 5 Years" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="3">3 Months</SelectItem>
          <SelectItem value="6">6 Months</SelectItem>
          <SelectItem value="1">1 Year</SelectItem>
          <SelectItem value="2">2 Years</SelectItem>
          <SelectItem value="5">5 Years</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
