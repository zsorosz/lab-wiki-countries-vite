import { useState, useEffect } from "react";
import "./App.css";
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
      <div class="container">
        <div class="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route path="/:alpha3Code" element={<CountryDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
