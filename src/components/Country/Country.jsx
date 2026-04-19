import './Country.css'
const Country = ({country}) => {
    // console.log(country);
    return (
        <div className='border'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? "(Large)" : "(Small)"}</p>
        </div>
    );
};

export default Country;