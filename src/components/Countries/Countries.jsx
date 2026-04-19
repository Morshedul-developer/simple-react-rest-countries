import { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ messageFetch }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedCountry = (country) => {
    const newArr = [...visitedCountries, country];
    setVisitedCountries(newArr);
  };
  const handleVisitedFlag = (flag) => {
    const newArr = [...visitedFlags, flag];
    setVisitedFlags(newArr);
  }
  const allCountries = use(messageFetch);
  const countries = allCountries.countries;
  return (
    <div>
      <h1>In the countries: {countries.length}</h1>
      <h2>Total visited countries: {visitedCountries.length}</h2>
      <h3>Total visited flags: {visitedFlags.length}</h3>
      <ol>
        {visitedCountries.map((country) => (
          <li key={country.cca3.cca3}>{country.name.common}</li>
        ))}
      </ol>
      <ol>
        {visitedFlags.map((flag, index) => <li key={index}><img src={flag} alt="Flag" /></li>)}
      </ol>
      <div className="countries">
        {countries.map((country) => (
          <Country 
          key={country.cca3.cca3} 
          country={country}
          handleVisitedCountry = {handleVisitedCountry}
          handleVisitedFlag = {handleVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
