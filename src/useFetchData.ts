import { useEffect, useState } from "react";
import type { Country } from "./App";
type FetchType = "multiple" | "single";

export default function useFetchData(url: string, type: FetchType) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [country, setCountry] = useState<Country>({} as Country);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  function mapApiCountry(apiCountry: any): Country {
    return {
      id: apiCountry.cca3,
      name: apiCountry.name.common,
      tld: apiCountry.tld ? apiCountry.tld.join(", ") : "N/A",
      currencies: apiCountry.currencies
        ? Object.values(apiCountry.currencies)
            .map((c: any) => `${c.name} (${c.symbol})`)
            .join(", ")
        : undefined,
      population: apiCountry.population.toLocaleString(),
      region: apiCountry.region,
      subregion: apiCountry.subregion ? apiCountry.subregion : "N/A",
      capital: apiCountry.capital ? apiCountry.capital[0] : "N/A",
      flag: apiCountry.flags.svg,
      languages: apiCountry.languages
        ? Object.values(apiCountry.languages).join(", ")
        : undefined,
    };
  }
  const fetchCountries = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const data = await response.json();
      console.log(data);

      if (type === "single") {
        setCountry(mapApiCountry(data));
      } else {
        const mappedCountries = data.map(mapApiCountry);
        setCountries(mappedCountries);
        setFilteredCountries(mappedCountries);
        localStorage.setItem("countries", JSON.stringify(mappedCountries));
      }
    } catch (error) {
      console.error(error);
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };
  const fetchDataFromLocal = () => {
    if (type === "single") {
      fetchCountries();
      return;
    }
    const localData = localStorage.getItem("countries");
    if (localData) {
      const parsedData = JSON.parse(localData);
      setCountries(parsedData);
      setFilteredCountries(parsedData);
      setLoading(false);
    } else {
      fetchCountries();
    }
  };
  useEffect(() => {
    fetchDataFromLocal();
  }, []);

  return {
    loading,
    error,
    country,
    countries,
    filteredCountries,
    setFilteredCountries,
  };
}
