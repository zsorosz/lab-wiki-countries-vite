import { useState } from "react";
import "./App.css";
import allCountries from "./countries.json";
import Navbar from "../components/Navbar";
import CountriesList from "../components/CountriesList";
import { Routes, Route } from "react-router-dom";
import CountryDetails from "../components/CountryDetails";

function App() {
  const [countries, setCountries] = useState(allCountries);
  return (
    <div className="App">
      <Navbar />
      <div style={{ display: "flex" }}>
        <CountriesList countries={countries} />
        <Routes>
          <Route
            path="/:alpha3Code"
            element={<CountryDetails countries={countries} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
