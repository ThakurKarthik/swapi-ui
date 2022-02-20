import React from 'react';
import { useLocation } from 'react-router-dom';
import './Film.css';

function Film() {
  const {
    state: {
      title,
      releaseDate,
      director,
      episodeID,
      producers,
      openingCrawl,
      characterConnection: { totalCount: totalCharacters, characters },
      speciesConnection: { totalCount: totalSpecies, species },
      planetConnection: { totalCount: totalPlanets, planets },
      vehicleConnection: { totalCount: totalVehicles, vehicles },
      starshipConnection: { totalCount: totalStarships, starships },
    },
  } = useLocation();
  return (
    <div className="container">
      <h1 className="title">{title}</h1>
      <div className='episode'>
        <span>Episode - {episodeID}</span>
      </div>
      <blockquote>
        <p>{openingCrawl}</p>
      </blockquote>
      <div className="makers">
        <div>Released on: {releaseDate}</div>
        <div>
          Directed by:
          <ul>
            <li>{director}</li>
          </ul>
        </div>
        <div>
          Produced by:
          <ul>
            {producers.map((producer) => (
              <li key={producer}>{producer}</li>
            ))}
          </ul>
        </div>
      </div>
      <section className="character-section">
        <h3 className='section-title'>Characters</h3>
        <div>Total Characters Associated with this film: {totalCharacters}</div>
        <div className="bubble-items">
          {characters.map((character) => (
            <div className="bubble" key={character.id}>
              {character.name}
            </div>
          ))}
        </div>
      </section>
      <section className="species-section">
        <h3 className='section-title'>Species</h3>
        <div>Total Species Associated with this film: {totalSpecies}</div>
        <div className="bubble-items">
          {species.map((spec) => (
            <div className="bubble" key={spec.id}>
              {spec.name}
            </div>
          ))}
        </div>
      </section>
      <section className="planets-section">
        <h3 className='section-title'>Planets</h3>
        <div>Total Planets Associated with this film: {totalPlanets}</div>
        <div className="bubble-items">
          {planets.map((planet) => (
            <div className="bubble" key={planet.id}>
              {planet.name}
            </div>
          ))}
        </div>
      </section>
      <section className="starships-section">
        <h3 className='section-title'>Starships</h3>
        <div>Total Starships Associated with this film: {totalStarships}</div>
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
        <div>Total Vehicles Associated with this film: {totalVehicles}</div>
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

export default Film;
