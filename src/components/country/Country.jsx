import { useState } from 'react';
import './country.css';

const Country = ({country, handleVisitedCountry, handleVisitedFlag}) => {
    // console.log(country)
    const {name, flags, population, area, cca2} = country;

    const [visited, setVisited] = useState(false);

    const visitedEvent = () => {
        setVisited(!visited);
    }

    // console.log(handleVisitedFlag)

    return (
        <div className="country space-y-3">
            <h3>Name: {name?.common} </h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca2}</p>
            <button onClick={visitedEvent}>{visited?'Visited':'Going'}</button>
            <br />
            <button onClick={()=> handleVisitedCountry(country)}>Mark as visited</button>
            <br />
            <button onClick={() => handleVisitedFlag(country)}>Mark as flag</button>
        </div>
    );
};

export default Country;