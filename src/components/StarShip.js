import React from 'react';
import { useLocation } from 'react-router-dom';
import './StarShip.css'

function StarShip() {
  const {
    state: {
      name,
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
      <h2>
        <div>{name}</div>
      </h2>
      <div className='starship-details'>
        <div>Model: {model}</div>
        <div>Starship Class: {starshipClass}</div>
        <div>Manufacturers: {manufacturers.join(',')}</div>
        <div>Cost in Credits: {costInCredits}</div>
        <div>Length: {length}</div>
        <div>Crew: {crew}</div>
        <div>passengers: {passengers}</div>
        <div>Max Atmosphering Speed: {maxAtmospheringSpeed}</div>
        <div>Hyperdrive Rating: {hyperdriveRating}</div>
        <div>MGLT: {MGLT}</div>
        <div>Cargo Capacity: {cargoCapacity}{cargoCapacity?'kg': ''}</div>
        <div>Consumables: {consumables}</div>
      </div>
      <section className="film-section">
        <h3 className='section-title'>Films</h3>
        <div>Total Films Associated with this Starship: {filmTotalCount}</div>
        <div className="bubble-items">
          {films.map((film) => (
            <div className="bubble" key={film.id}>
              {film.title}
            </div>
          ))}
        </div>
      </section>
      <section className="pilot-section">
        <h3 className='section-title'>Characters</h3>
        <div>Total Characters Associated with this Starship: {pilotTotalCount}</div>
        <div className="bubble-items">
          {pilots.map((pilot) => (
            <div className="bubble" key={pilot.id}>
              {pilot.name}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default StarShip;
