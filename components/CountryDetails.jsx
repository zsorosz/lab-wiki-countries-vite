import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function CountryDetails({ countries }) {
  const [countryState, setCountryState] = useState({
    name: { official: "" },
    capital: "",
    area: "",
    borders: [],
    alpha2Code: "",
  });
  const { alpha3Code } = useParams();
  //   const foundCountry = countries.find((oneCountry) => {
  //     return oneCountry.alpha3Code === alpha3Code;
  //   });
  //   const findBorderCountry = (alpha3Code) => {
  //     let foundBorderCountry = countries.find((oneCountry) => {
  //       return oneCountry.alpha3Code === alpha3Code;
  //     });
  //     return foundBorderCountry;
  //   };
  useEffect(() => {
    async function fetchCountries() {
      const response = await axios.get(
        `https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`
      );
      setCountryState(response.data);
    }
    fetchCountries();
  }, [alpha3Code]);

  return (
    <div>
      {!countryState ? (
        <p>Country not found</p>
      ) : (
        <div>
          <img
            src={`https://flagpedia.net/data/flags/w580/${countryState.alpha2Code.toLowerCase()}.png`}
            alt="flag"
          ></img>
          <h2>{countryState.name.official}</h2>
          <table class="table">
            <tbody>
              <tr>
                <th scope="row">Capital</th>
                <td>{countryState.capital}</td>
              </tr>
              <tr>
                <th scope="row">Area</th>
                <td>{countryState.area} km²</td>
              </tr>
              <tr>
                <th scope="row">Borders</th>
                <td colspan="2">
                  {countryState.borders.map((country) => (
                    <li key={country}>
                      <Link to={`/${country}`}>
                        {/* {findBorderCountry(country).name.common} */}
                      </Link>
                    </li>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default CountryDetails;
