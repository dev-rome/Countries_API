function CountryBorders({ borders }) {
  return (
    <>
      {borders.map((code) => (
        <li
          key={code}
          className="dark:bg-[#2B3844] bg-[#FFFFFF] rounded-sm py-1 px-5 mr-2 first:ml-4 last:mr-0 cursor-pointer"
        >
          {code}
        </li>
      ))}
    </>
  );
}

export default CountryBorders;
