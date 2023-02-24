import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function CountryDetails({ countries }) {
  const [countryState, setCountryState] = useState({
    name: { common: "" },
    capital: "",
    area: "",
    borders: [],
    alpha2Code: "",
  });

  const { alpha3Code } = useParams();

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
    <div className="col-7">
      {!countryState ? (
        <p>Country not found</p>
      ) : (
        <div>
          <img
            src={`https://flagpedia.net/data/flags/w580/${countryState.alpha2Code.toLowerCase()}.png`}
            alt="flag"
          ></img>
          <h2>{countryState.name.official}</h2>
          <table className="table">
            <tbody>
              <tr>
                <th scope="row" style={{ width: "30%" }}>
                  Capital
                </th>
                <td>{countryState.capital}</td>
              </tr>
              <tr>
                <th scope="row">Area</th>
                <td>{countryState.area} km²</td>
              </tr>
              <tr>
                <th scope="row">Borders</th>
                <td colSpan="2">
                  {countryState.borders.map((border) => (
                    <Link to={`/${border}`}>
                      <li>
                        {
                          countries.filter(
                            (country) => country.alpha3Code === border
                          )[0].name.common
                        }
                      </li>
                    </Link>
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
