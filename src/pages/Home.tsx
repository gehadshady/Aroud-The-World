import CountryList from "../components/CountryList";
import RegionMenu from "../components/RegionMenu";
import SearchInput from "../components/SearchInput";
import ShowMessage from "../components/ShowMessage";
import useFetchData from "../useFetchData";

export default function Home() {
  const { loading, error, countries, filteredCountries, setFilteredCountries } =
    useFetchData(
      "/api/v3.1/all?fields=cca3,name,population,region,capital,flags",
      "multiple",
    );
  return (
    <>
      {loading && <ShowMessage message={"Loading..."} />}
      {error && <ShowMessage message={`Error: ${error}`} type="error" />}
      {!loading && !error && (
        <>
          <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:gap-0">
            <SearchInput
              countries={countries}
              filteredCountries={setFilteredCountries}
            />
            <RegionMenu
              countries={countries}
              filteredCountries={setFilteredCountries}
            />
          </div>

          <CountryList countries={filteredCountries} />
        </>
      )}
    </>
  );
}
