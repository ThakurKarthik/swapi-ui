import React from 'react';
import { useLocation } from 'react-router-dom';
import './Planet.css';

function Planet() {
  const {
    state: {
      name,
      diameter,
      rotationPeriod,
      orbitalPeriod,
      gravity,
      population,
      climates,
      terrains,
      surfaceWater,
      residentConnection: { totalCount: residentTotalCount, residents },
      filmConnection: { totalCount: filmTotalCount, films },
    },
  } = useLocation();
  return (
    <div>
      <h2>
        <div>{name}</div>
      </h2>
      <div className='planet-details'>
        <div>Diameter: {diameter}</div>
        <div>RotationPeriod: {rotationPeriod}</div>
        <div>Orbital Period: {orbitalPeriod}</div>
        <div>Gravity: {gravity}</div>
        <div>Population: {population}</div>
        <div>Climates: {climates.join(',')}</div>
        <div>Terrains: {terrains.join(',')}</div>
        <div>surfaceWater: {surfaceWater}%</div>
      </div>
      <section className="film-section">
        <h3 className='section-title'>Films</h3>
        <div>Total Films Associated with this Planet: {filmTotalCount}</div>
        <div className="bubble-items">
          {films.map((film) => (
            <div className="bubble" key={film.id}>
              {film.title}
            </div>
          ))}
        </div>
      </section>
      <section className="resident-section">
        <h3 className='section-title'>Residents</h3>
        <div>Total Residents Associated with this Planet: {residentTotalCount}</div>
        <div className="bubble-items">
          {residents.map((resident) => (
            <div className="bubble" key={resident.id}>
              {resident.name}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Planet;
