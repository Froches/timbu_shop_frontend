import React, { useState } from "react";
import { ReactComponent as Logo } from "../media/searchSettings.svg";

const SearchBar = ({ data, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value); // Call the search callback function with the current input value
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center p-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
          className="w-5/6 h-16 p-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Logo className="w-[73px] h-16" />
      </div>
    </div>
  );
};

export default SearchBar;
