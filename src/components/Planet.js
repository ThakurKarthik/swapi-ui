import React from 'react';
import { useLocation } from 'react-router-dom';

function Planet() {
  const {
    state: {
      id,
      name,
      diameter,
      rotationPeriod,
      orbitalPeriod,
      gravity,
      population,
      climates,
      terrains,
      surfaceWater,
      residentConnection: { totalCount: residentTotalCount },
      filmConnection: { totalCount: filmTotalCount, films },
    },
  } = useLocation();
  return (
    <div>
      <div>{name}</div>
      <div>{diameter}</div>
      <div>{rotationPeriod}</div>
    </div>
  );
}

export default Planet;
