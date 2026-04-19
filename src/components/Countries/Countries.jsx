import { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ messageFetch }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleVisitedCountry = (country) => {
    console.log("Clicked", country);
  };
  const allCountries = use(messageFetch);
  const countries = allCountries.countries;
  return (
    <div>
      <h1>In the countries: {countries.length}</h1>
      <h2>Total visited countries: </h2>
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
