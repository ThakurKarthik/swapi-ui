import React from 'react';
import { useLocation } from 'react-router-dom';
import './People.css';

function People() {
  const {state} = useLocation();
  const {
      name,
      birthYear,
      eyeColor,
      gender,
      hairColor,
      height,
      mass,
      skinColor,
      homeworld,
      filmConnection: {totalCount: totalFilms, films},
      starshipConnection: {totalCount: totalStarships, starships},
      vehicleConnection: {totalCount: totalVehicles, vehicles},
  } = state;
  const species = state.species || {name: 'N/A'};
  return (
    <div>
      <h2>
        <div>{name}</div>
      </h2>
      <div className='personal-details'>
        <div>Birth Year: {birthYear}</div>
        <div>Gender: {gender}</div>
        <div>Height: {height}</div>
        <div>Mass: {mass}kg</div>
        <div>Eye Color: {eyeColor}</div>
        <div>Hair Color: {hairColor}</div>
        <div>Skin Color: {skinColor}</div>
        <div>Homeworld: {homeworld.name}</div>
        <div>Species: {species.name}</div>
      </div>
      <section className="film-section">
        <h3 className='section-title'>Films</h3>
        <div>Total Films Associated with this character: {totalFilms}</div>
        <div className="bubble-items">
          {films.map((film) => (
            <div className="bubble" key={film.id}>
              {film.title}
            </div>
          ))}
        </div>
      </section>
      <section className="starship-section">
        <h3 className='section-title'>Starships</h3>
        <div>Total Starships Associated with this character: {totalStarships}</div>
        <div className="bubble-items">
          {starships.map((starship) => (
            <div className="bubble" key={starship.id}>
              {starship.name}
            </div>
          ))}
        </div>
      </section>
      
      <section className="vehicles-section">
        <h3 className='section-title'>Vehicles</h3>
        <div>Total Vehicles Associated with this character: {totalVehicles}</div>
        <div className="bubble-items">
          {vehicles.map((vehicle) => (
            <div className="bubble" key={vehicle.id}>
              {vehicle.name}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default People;
