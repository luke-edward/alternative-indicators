import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CategoryFilter() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="All Categories" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="3">Features</SelectItem>
          <SelectItem value="6">Finance</SelectItem>
          <SelectItem value="1">Tech</SelectItem>
          <SelectItem value="2">Marketing</SelectItem>
          <SelectItem value="5">AI</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
