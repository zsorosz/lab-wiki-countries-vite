import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function CountriesList({ countries }) {
  return (
    <div>
      {countries.map((country) => (
        <div key={country.name.official} className="country">
          <Link to={`/${country.alpha3Code}`}>
            {country.name.official}
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt="flag"
            ></img>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CountriesList;
