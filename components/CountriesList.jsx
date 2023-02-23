import React from "react";
import { Link } from "react-router-dom";

function CountriesList({ countries }) {
  return (
    <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
      {countries.map((country) => (
        <div key={country.alpha3Code} className="list-group">
          <Link
            to={`/${country.alpha3Code}`}
            className="list-group-item list-group-item-action"
            style={{
              display: "flex",
              flexDirection: "column-reverse",
              alignItems: "center",
            }}
          >
            {country.name.common}
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt="flag"
              style={{ width: "50px" }}
            ></img>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CountriesList;
