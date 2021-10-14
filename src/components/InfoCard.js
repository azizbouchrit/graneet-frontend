import React from "react";
import "./InfoCard.css";

const InfoCard = ({ citiesNumber = 1 }) => {
  return (
    <div className={`info-card ${citiesNumber ? 'info-card--green' : 'info-card--red'}`}>
      {citiesNumber
        ? `${citiesNumber} villes correspondant au texte saisi`
        : "Aucune ville correspondant au texte saisi"}
    </div>
  );
};

export default InfoCard;
