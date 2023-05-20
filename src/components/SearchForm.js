import { useState } from "react";

function SearchForm({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(search);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 lg:mt-12">
      <input
        className="w-full md:w-[480px] input-bg dark:bg-[#2B3844] bg-[#FFFFFF] py-4 pl-16 rounded outline-none dark:text-[#FFFFFF] text-[#111517] dark:placeholder:text-[#FFFFFF] placeholder:text-[##C4C4C4]"
        type="text"
        placeholder="Search for a country..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </form>
  );
}

export default SearchForm;
