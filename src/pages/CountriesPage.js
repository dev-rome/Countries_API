import { useState } from "react";
import SearchForm from "../components/SearchForm";
import Countries from "../components/Countries";
import FilterForm from "../components/FilterForm";

function CountriesPage() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  return (
    <section className="h-screen bg-[#F2F2F2] dark:bg-[#202C36]">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center px-4 md:px-20">
        <SearchForm />
        <FilterForm value={selection} onChange={handleSelect} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 md:px-20">
        <Countries />
      </div>
    </section>
  );
}

export default CountriesPage;
