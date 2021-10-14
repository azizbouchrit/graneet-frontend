import React from "react";
import CityCard from "./CityCard";
import InfoCard from "./InfoCard";
import "./Cities.css";

const Cities = ({ title, cities }) => {
  return (
    <div className='card card--cities'>
      <h1>{title}</h1>
      <InfoCard citiesNumber={cities?.length} />
      <div className='cities-grid-container'>
        {cities.map((city) => (
          <CityCard key={city._id} city={city} />
        ))}
      </div>
    </div>
  );
};

export default Cities;
