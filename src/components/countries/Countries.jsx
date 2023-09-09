import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountry, setVisitedCountry] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const handleVisitedCountry = (country) => {
        const newVisitedCountry = [...visitedCountry, country];
        setVisitedCountry(newVisitedCountry);
    }

    const handleVisitedFlag = (country) => {
        const newVisitedFlag = [...visitedFlag, country];
        setVisitedFlag(newVisitedFlag);
    }

    console.log(visitedFlag)

    return (
        <div>
            <h3>Country: {countries.length} </h3>
            <div className="flex justify-between items-center gap-4">
                <div>
                    <h5>Visited Countries: {visitedCountry.length}</h5>
                    <ul>
                        {
                        visitedCountry.map(country => <li key={country.cca2}>
                            {country.name.common}
                            </li>)
                        }
                    </ul>
                </div>
                <div>
                    <h4>Visited Flag: {visitedFlag.length} </h4>
                    <div className=" w-40 space-y-3">
                        {
                          visitedFlag.map(country => <img src={country.flags.png} />)
                        }
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                countries.map(country => <Country 
                    key={country.cca2} 
                    country={country} 
                    handleVisitedCountry={handleVisitedCountry}
                    handleVisitedFlag={handleVisitedFlag}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;