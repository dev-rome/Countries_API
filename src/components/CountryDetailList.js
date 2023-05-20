function CountryDetailsList({ details }) {
  return (
    <>
      {details.map((detail, index) => (
        <li key={index} className="font-Nunito mt-1 first:mt-0">
          {detail}
        </li>
      ))}
    </>
  );
}

export default CountryDetailsList;
