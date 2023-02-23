import React from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";

function CountryDetails({ countries }) {
  const { alpha3Code } = useParams();
  const foundCountry = countries.find((oneCountry) => {
    return oneCountry.alpha3Code === alpha3Code;
  });
  const findBorderCountry = (alpha3Code) => {
    let foundBorderCountry = countries.find((oneCountry) => {
      return oneCountry.alpha3Code === alpha3Code;
    });
    return foundBorderCountry;
  };

  return (
    <div>
      {!foundCountry ? (
        <p>Country not found</p>
      ) : (
        <div>
          <img
            src={`https://flagpedia.net/data/flags/w580/${foundCountry.alpha2Code.toLowerCase()}.png`}
            alt="flag"
          ></img>
          <h2>{foundCountry.name.official}</h2>
          <table class="table">
            <tbody>
              <tr>
                <th scope="row">Capital</th>
                <td>{foundCountry.capital}</td>
              </tr>
              <tr>
                <th scope="row">Area</th>
                <td>{foundCountry.area} km²</td>
              </tr>
              <tr>
                <th scope="row">Borders</th>
                <td colspan="2">
                  {foundCountry.borders.map((country) => (
                    <li key={country}>
                      <Link to={`/${country}`}>
                        {findBorderCountry(country).name.common}
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
