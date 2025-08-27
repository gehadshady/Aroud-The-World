import { Link } from "react-router-dom";
import type { Country } from "../App";

export default function CountryCard({ country }: { country: Country }) {
  return (
    <Link to={`/country/${country.id}`}>
      <div className="h-full w-[264px] rounded-lg bg-gray-50 p-3 pb-9 shadow-sm dark:bg-gray-800">
        <img
          className="mb-4 h-40 w-full rounded-md object-cover"
          src={country.flag}
          alt=""
        />
        <div className="ml-4">
          <h2 className="mb-4 text-lg font-extrabold">{country.name}</h2>

          <p>
            <span className="font-semibold">Population: </span>
            <span className="text-sm font-light">{country.population}</span>
          </p>

          <p>
            <span className="font-semibold">Region: </span>
            <span className="text-sm font-light">{country.region}</span>
          </p>
          <p>
            <span className="font-semibold">Capital: </span>
            <span className="text-sm font-light">{country.capital}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
