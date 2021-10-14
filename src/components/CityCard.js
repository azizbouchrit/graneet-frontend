import React from 'react';
import './CityCard.css'

const CityCard = ({city}) => {
  return ( <div className="city-card">
    <span className="city-card__name">{city.nomCommune}</span>
    <span className="city-card__zip">{city.codePostal}</span>
  </div> );
}
 
export default CityCard;