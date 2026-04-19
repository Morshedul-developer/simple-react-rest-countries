import { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ messageFetch }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleVisitedCountry = (country) => {
    const newArr = [...visitedCountries, country];
    setVisitedCountries(newArr);
  };
  const allCountries = use(messageFetch);
  const countries = allCountries.countries;
  return (
    <div>
      <h1>In the countries: {countries.length}</h1>
      <h2>Total visited countries: {visitedCountries.length}</h2>
      <ol>
        {visitedCountries.map((country) => (
          <li key={country.cca3.cca3}>{country.name.common}</li>
        ))}
      </ol>
      <div className="countries">
        {countries.map((country) => (
          <Country 
          key={country.cca3.cca3} 
          country={country}
          handleVisitedCountry = {handleVisitedCountry}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
