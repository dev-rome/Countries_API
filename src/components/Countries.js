import Card from "./Card";

function Countries({ country }) {
  const { flags, name, population, region, capital } = country;
  const numberFormat = population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <Card className="w-full max-w-[265px] mx-auto dark:bg-[#2B3844] bg-[#FFFFFF] rounded">
      <img className="w-full h-[160px] object-cover" src={flags.png} alt={flags.alt} />
      <div className="px-6 pb-11">
        <h1 className="font-Nunito text-lg font-extrabold dark:text-[#FFFFFF] text-[#111517] mt-6">
          {name.common}
        </h1>
        <ul className="font-Nunito dark:text-[#FFFFFF] text-[#111517] mt-4">
          <li>Population: {numberFormat}</li>
          <li className="mt-2">Region: {region}</li>
          <li className="mt-2">Capital: {capital}</li>
        </ul>
      </div>
    </Card>
  );
}

export default Countries;
