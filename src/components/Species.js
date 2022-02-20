import React from 'react';
import { useLocation } from 'react-router-dom';
import './Species.css';

function Species() {
  const {
    state: {
      name,
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
      <h2>
        <div>{name}</div>
      </h2>
      <div className='species-details'>
        <div>Classification: {classification}</div>
        <div>Designation: {designation}</div>
        <div>Language: {language}</div>
        <div>Average Height: {averageHeight}</div>
        <div>Average Lifespan: {averageLifespan}</div>
        <div>Home world: {homeworld ? homeworld.name : 'N/A'}</div>
        <div>Eye Colors: {eyeColors.join(',')}</div>
        <div>Hair Colors: {hairColors.join(',')}</div>
        <div>Skin Colors: {skinColors.join(',')}</div>
      </div>
      <section className="film-section">
        <h3 className='section-title'>Films</h3>
        <div>Total Films Associated with this Species: {filmTotalCount}</div>
        <div className="bubble-items">
          {films.map((film) => (
            <div className="bubble" key={film.id}>
              {film.title}
            </div>
          ))}
        </div>
      </section>
      <section className="character-section">
        <h3 className='section-title'>Characters</h3>
        <div>Total Characters Associated with this Species: {personTotalCount}</div>
        <div className="bubble-items">
          {people.map((character) => (
            <div className="bubble" key={character.id}>
              {character.name}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Species;
