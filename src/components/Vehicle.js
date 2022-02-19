import React from 'react';
import { useLocation } from 'react-router-dom';

function Vehicle() {
  const {
    state: {
      id,
      name,
      model,
      vehicleClass,
      manufacturers,
      costInCredits,
      length,
      crew,
      passengers,
      maxAtmospheringSpeed,
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
      <div>{vehicleClass}</div>
    </div>
  );
}

export default Vehicle;
