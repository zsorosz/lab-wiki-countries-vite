import { useState, useEffect } from "react";
import "./App.css";
// import allCountries from "./countries.json";
import Navbar from "../components/Navbar";
import CountriesList from "../components/CountriesList";
import { Routes, Route } from "react-router-dom";
import CountryDetails from "../components/CountryDetails";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchCountries() {
      const response = await axios.get(
        "https://ih-countries-api.herokuapp.com/countries"
      );
      setCountries(response.data);
    }
    fetchCountries();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div style={{ display: "flex" }}>
        <CountriesList countries={countries} />
        <Routes>
          {/* <Route path="/" element={<CountriesList countries={countries} />} /> */}
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
