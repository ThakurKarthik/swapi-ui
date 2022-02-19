import React from 'react';
import { useLocation } from 'react-router-dom';

function Species() {
  const {
    state: {
      name,
      id,
      classification,
      designation,
      averageHeight,
      averageLifespan,
      eyeColors,
      hairColors,
      skinColors,
      language,
      homeworld,
      personConnection: { totalCount: personTotalCount, people },
      filmConnection: { totalCount: filmTotalCount, films },
    },
  } = useLocation();
  return (
    <div>
      <div>{name}</div>
      <div>{classification}</div>
    </div>
  );
}

export default Species;
