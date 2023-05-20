import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import CountryDetailsList from "./CountryDetailsList";
import CountryBorders from "./CountryBorders";

function Country({ country }) {
  const {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  } = country;
  const nativeName = Object.values(name.nativeName)[0].common;
  const formattedPopulation = population
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const currencyNames = Object.values(currencies).map(
    (currency) => `Currency: ${currency.name}`
  );
  const languageNames = `Languages: ${Object.values(languages).join(", ")}`;

  const leftDetails = [
    `Native Name: ${nativeName}`,
    `Population: ${formattedPopulation}`,
    `Region: ${region}`,
    `Sub Region: ${subregion}`,
    `Capital: ${capital}`,
  ];

  const rightDetails = [
    `Top Level Domain: ${tld.join(", ")}`,
    ...currencyNames,
    languageNames,
  ];

  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <div className="pt-10 px-7 lg:pt-20">
      <button
        onClick={handleBackHome}
        className="flex items-center gap-2 dark:text-[#FFFFFF] text-[#111517] dark:bg-[#2B3844] bg-[#FFFFFF] rounded-md py-3 px-9 font-Nunito"
      >
        <BsArrowLeft />
        back
      </button>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-11 lg:gap-x-36 pt-16 lg:pt-20">
        <img
          className="w-[35rem] rounded object-cover mx-auto"
          src={flags.png}
          alt={flags.alt}
        />
        <div>
          <h1 className="dark:text-[#FFFFFF] text-[#111517] font-Nunito font-extrabold text-xl lg:text-3xl lg:mt-8">
            {name.common}
          </h1>
          <div className="flex flex-col lg:flex-row gap-y-8 md:gap-x-28 mt-4 lg:mt-6">
            <ul className="dark:text-[#FFFFFF] text-[#111517]">
              <CountryDetailsList details={leftDetails} />
            </ul>
            <ul className="dark:text-[#FFFFFF] text-[#111517]">
              <CountryDetailsList details={rightDetails} />
            </ul>
          </div>
          <ul className="flex flex-wrap items-center gap-y-2 dark:text-[#FFFFFF] text-[#111517] mt-8 lg:mt-16">
            Border Countries: <CountryBorders borders={borders} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Country;
