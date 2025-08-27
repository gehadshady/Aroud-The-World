import type { Country } from "../App";

export default function SearchInput({
  countries,
  filteredCountries,
}: {
  countries: Country[];
  filteredCountries: React.Dispatch<React.SetStateAction<Country[]>>;
}) {
  const onsubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchTerm = (formData.get("search") as string).trim().toLowerCase();

    console.log(searchTerm);
    const filtered =
      !searchTerm || searchTerm === ""
        ? countries
        : countries.filter((country) =>
            country.name.toLowerCase().includes(searchTerm),
          );
    filteredCountries(filtered);
  };

  return (
    <form className="relative" onSubmit={onsubmitHandler}>
      <div className="absolute left-8 top-4 md:top-5">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="search">
            <path
              id="Shape"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z"
              fill="#374151"
            />
          </g>
        </svg>
      </div>
      <input
        type="search"
        name="search"
        onInput={(e) => {
          const value = e.currentTarget.value.trim();
          if (!value) {
            filteredCountries(countries);
          }
          //display all countries when clearning search
        }}
        placeholder="Search for a country..."
        className="h-12 w-full rounded-full bg-[#F9FAFB] p-4 pl-20 shadow placeholder:text-sm placeholder:text-[#374151] focus:outline-none md:h-14 md:w-[480px] dark:bg-gray-800 dark:placeholder:text-gray-100"
      />
    </form>
  );
}
