import React from 'react';
import { useLocation } from 'react-router-dom';

function StarShip() {
  const {
    state: {
      name,
      id,
      model,
      starshipClass,
      manufacturers,
      costInCredits,
      length,
      crew,
      passengers,
      maxAtmospheringSpeed,
      hyperdriveRating,
      MGLT,
      cargoCapacity,
      consumables,
      pilotConnection: { totalCount: pilotTotalCount, pilots },
      filmConnection: { totalCount: filmTotalCount, films },
    },
  } = useLocation();
  return (
    <div>
      <div>{name}</div>
      <div>{model}</div>
    </div>
  );
}

export default StarShip;
