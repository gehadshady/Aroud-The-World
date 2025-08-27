import { Link, useParams } from "react-router-dom";
import useFetchData from "../useFetchData";
import ShowMessage from "../components/ShowMessage";

export default function Country() {
  const { countryId } = useParams<{ countryId: string }>();
  const { loading, error, country } = useFetchData(
    `/api/v3.1/alpha/${countryId}?fields=cca3,name,population,region,subregion,capital,flags,tld,currencies,languages`,
    "single",
  );

  console.log(country);
  return (
    <>
      {loading && <ShowMessage message={"Loading..."} />}
      {error && <ShowMessage message={`Error: ${error}`} type="error" />}
      {!loading && !error && (
        <>
          <Link to="/" className="mb-10 block">
            <svg
              width="70"
              height="68"
              viewBox="0 0 70 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_2005_992)">
                <rect
                  x="14"
                  y="8"
                  width="42"
                  height="40"
                  rx="6"
                  className="fill-white dark:fill-gray-800"
                />
              </g>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M31.8927 22.5355L33.0712 23.714L29.1821 27.6031L44.0314 27.6031L44.0314 29.253L29.1821 29.253L33.0712 33.1421L31.8927 34.3206L26.0001 28.4281L31.8927 22.5355Z"
                className="fill-gray-900 dark:fill-white"
              />
              <defs>
                <filter
                  id="filter0_d_2005_992"
                  x="0"
                  y="0"
                  width="70"
                  height="68"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="6" />
                  <feGaussianBlur stdDeviation="7" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2005_992"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2005_992"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </Link>
          <div className="lg:gap-30 grid gap-11 lg:grid-cols-2">
            <img
              className="mb-4 h-[400px] w-[560px] rounded-md object-cover"
              src={country.flag}
              alt=""
            />
            <div className="mt-8 text-left">
              <h1 className="mb-3 text-3xl font-extrabold lg:mb-4">
                {country.name}
              </h1>
              <div className="flex flex-col items-start justify-start gap-3 lg:flex-row lg:gap-20">
                <div className="flex-1">
                  <p className="mb-2">
                    <span className="font-semibold">Native Name: </span>
                    <span className="font-light">{country.name}</span>
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Population: </span>
                    <span className="font-light">{country.population}</span>
                  </p>

                  <p className="mb-2">
                    <span className="font-semibold">Region: </span>
                    <span className="font-light">{country.region}</span>
                  </p>

                  <p className="mb-2">
                    <span className="font-semibold">Capital: </span>
                    <span className="font-light">{country.capital}</span>
                  </p>
                </div>
                <div className="flex-1">
                  <p className="mb-2">
                    <span className="font-semibold">Top Level Domain:</span>
                    <span className="font-light">{country.tld}</span>
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Currencies: </span>
                    <span className="font-light">{country.currencies}</span>
                  </p>

                  <p className="mb-2">
                    <span className="font-semibold">Languages: </span>
                    <span className="font-light">{country.languages}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
