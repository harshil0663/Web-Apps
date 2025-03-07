import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Loader } from 'lucide-react';

const fetchCountries = async () => {
  const { data } = await axios.get("https://studies.cs.helsinki.fi/restcountries/api/all");
  return data;
};

const App = () => {
  return <CountrySearch />;
};

const CountrySearch = () => {
  const [query, setQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  const { data: countries, error, isLoading } = useQuery({
    queryKey: ["countries"],
    queryFn: fetchCountries,
  });

  if (isLoading) return <Loader size="2em" />;
  if (error) return <p>Error: {error.message}</p>;

  const filteredCountries = query
    ? countries.filter((country) =>
        country.name.common.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div>
      <label>
        <strong>find countries </strong>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSelectedCountry(null); // Reset selection when search changes
          }}
        />
      </label>

      {filteredCountries.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : filteredCountries.length === 1 ? (
        <CountryDetails country={filteredCountries[0]} />
      ) : (
        <ul>
          {filteredCountries.map((country) => (
            <li key={country.cca3}>
              {country.name.common}{" "}
              <button onClick={() => setSelectedCountry(country)}>Show</button>
            </li>
          ))}
        </ul>
      )}

      {selectedCountry && <CountryDetails country={selectedCountry} />}
    </div>
  );
};

const CountryDetails = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p><strong>Capital:</strong> {country.capital?.[0] || "N/A"}</p>
      <p><strong>Area:</strong> {country.area}</p>

      <h3>Languages</h3>
      <ul>
        {country.languages
          ? Object.values(country.languages).map((lang) => <li key={lang}>{lang}</li>)
          : <li>No official languages</li>
        }
      </ul>

      <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} width="150" />
    </div>
  );
};

export default App;
