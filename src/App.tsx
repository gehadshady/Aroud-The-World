import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/Home";
import Country from "./pages/Country";
import NoPage from "./pages/NoPage";

export interface Country {
  id: string;
  name: string;
  tld?: string;
  currencies?: string;
  population: string;
  region: string;
  subregion?: string;
  capital: string;
  flag: string;
  languages?: string;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="country/:countryId" element={<Country />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
