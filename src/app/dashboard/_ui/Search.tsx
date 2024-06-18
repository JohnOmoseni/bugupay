import InputField from "@/components/InputField";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

function Search() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    console.log("Searching");
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    e.code === "Enter" && handleSearch();
  };

  return (
    <div className="flex max-w-[800px] flex-1 max-sm:hidden">
      <InputField
        type="text"
        name="search"
        value={searchValue}
        placeholder="Search..."
        onChange={handleInputChange}
        onKeyDown={handleKey}
        dir="right"
        icon={BiSearchAlt}
        className=""
      />
    </div>
  );
}
export default Search;
