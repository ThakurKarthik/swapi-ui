import React from 'react';
import { useLocation } from 'react-router-dom';

function People() {
  const {
    state: {
      name,
      birthYear,
      eyeColor,
      gender,
      hairColor,
      height,
      mass,
      skinColor,
      homeWorld,
      species,
      filmConnection,
      starShipConnection,
      vehicleConnection,
    },
  } = useLocation();
  return (
    <div>
      <div>{name}</div>
      <div>{birthYear}</div>
      <div>{eyeColor}</div>
      <div>{gender}</div>
      <div>{hairColor}</div>
      <div>{height}</div>
    </div>
  );
}

export default People;
