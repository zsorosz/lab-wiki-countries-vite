import React from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";

function CountryDetails({ countries }) {
  const { alpha3Code } = useParams();
  const foundCountry = countries.find((oneCountry) => {
    return oneCountry.alpha3Code === alpha3Code;
  });
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
        </div>
      )}
    </div>
  );
}

export default CountryDetails;
