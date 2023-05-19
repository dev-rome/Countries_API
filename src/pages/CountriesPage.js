import { useState } from "react";
import useFetch from "../hooks/useFetch";
import SearchForm from "../components/SearchForm";
import Countries from "../components/Countries";
import FilterForm from "../components/FilterForm";

function CountriesPage() {
  const [selection, setSelection] = useState(null);
  const url = "https://restcountries.com/v3.1/all";
  const { data, loading, error } = useFetch(url);

  const handleSelect = (option) => {
    setSelection(option);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className="bg-[#F2F2F2] dark:bg-[#202C36]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between px-4 xl:px-0">
          <SearchForm />
          <FilterForm value={selection} onChange={handleSelect} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-16 px-14 sm:px-4 xl:px-0 mt-20 sm:mt-12">
          {data.map((country, index) => (
            <Countries key={index} country={country} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CountriesPage;
