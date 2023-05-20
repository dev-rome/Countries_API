import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Country from "../components/Country";

function CountryInfoPage() {
  const { name } = useParams();
  const url = `https://restcountries.com/v3.1/name/${name}?fullText=true`
  const { data, loading, error } = useFetch(url);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className="min-h-screen bg-[#F2F2F2] dark:bg-[#202C36]">
      <div className="max-w-7xl mx-auto">
        {data.map((country, index) => (
          <Country key={index} country={country} />
        ))}
      </div>
    </section>
  );
}

export default CountryInfoPage;
