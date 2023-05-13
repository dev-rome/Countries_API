function SearchForm() {
  return (
    <form className="mt-6 lg:mt-12">
      <input
        className="w-full md:w-[480px] input-bg dark:bg-[#2B3844] bg-[#FFFFFF] py-4 pl-16 rounded outline-none dark:text-[#FFFFFF] text-[#111517] dark:placeholder:text-[#FFFFFF] placeholder:text-[##C4C4C4]"
        type="text"
        placeholder="Search for a country..."
      />
    </form>
  );
}

export default SearchForm;
