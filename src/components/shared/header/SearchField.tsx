import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SearchField = () => {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="email"
        placeholder="Search products"
        className="placeholder:opacity-60 rounded-xl"
      />
      <Button type="submit" className="rounded-xl">
        Search
      </Button>
    </div>
  );
};

export default SearchField;
