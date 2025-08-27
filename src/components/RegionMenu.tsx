import Select, { type SingleValue } from "react-select";
import type { Country } from "../App";

export default function RegionMenu({
  countries,
  filteredCountries,
}: {
  countries: Country[];
  filteredCountries: React.Dispatch<React.SetStateAction<Country[]>>;
}) {
  interface Option {
    value: string;
    label: string;
  }

  const options: Option[] = [
    { value: "all regions", label: "All regions" },
    { value: "africa", label: "Africa" },
    { value: "asia", label: "Asia" },
    { value: "europe", label: "Europe" },
    { value: "oceania", label: "Oceania" },
  ];

  const handelRegoinChange = (newValue: SingleValue<Option>) => {
    if (newValue?.value === "all regions") {
      filteredCountries(countries);
      return;
    }
    console.log(newValue?.value);
    const filtered = countries.filter((country) => {
      if (!newValue) {
        console.log("no");
        return true;
      }
      return country.region === newValue.label;
    });
    filteredCountries(filtered);
  };

  return (
    <Select
      defaultValue={options[0]}
      options={options}
      onChange={handelRegoinChange}
      classNames={{
        input: () => "dark:!text-red-100",
        singleValue: () => "dark:!text-gray-100",

        control: () =>
          "h-14 w-52 !bg-gray-50 dark:!bg-gray-800 rounded-md shadow !border-none px-4 focus:outline-none",
        menu: () => "!bg-gray-50 dark:!bg-gray-800",
        indicatorSeparator: () => "hidden",
        // option: () => " dark:hover:!text-gray-800",
        option: ({ isFocused }) =>
          `cursor-pointer p-2 ${
            isFocused
              ? "bg-gray-200 dark:!bg-gray-700 dark:!text-gray-100"
              : "dark:!text-gray-100"
          }`,
      }}
    />
  );
}
