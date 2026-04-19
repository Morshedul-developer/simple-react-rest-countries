import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry, handleVisitedFlag}) => {
    // console.log(country);
    const [visited, setVisited] = useState(false);
    const handleVisit = () => {
        // system 1
        // setVisited(visited ? false : true);
        // system 2
        setVisited(!visited);
        handleVisitedCountry(country);
    }
    return (
        <div className={`border ${visited && "bg"}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? "(Large)" : "(Small)"}</p>
            <button style={{
                marginRight: "5px",
                cursor: "pointer"
            }} onClick={handleVisit}>
                {visited ? "Visited" : "Not Visited"}
            </button>
            <button style={{
                cursor: "pointer"
            }} onClick={() => handleVisitedFlag(country.flags.flags.png)}>
                Visit Flag
            </button>
        </div>
    );
};

export default Country;