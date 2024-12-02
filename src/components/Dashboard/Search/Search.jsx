import { Input } from "@/components/ui/input";



function Search({ search, onSearchChange }) {
  return (
    <div className="mx-8 border-gray-400 dark border-none">
      <Input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => {
          onSearchChange(e);
        }}
      />
    </div>
  );
}

export default Search;
