import React from 'react'
import {useLocation} from 'react-router-dom'

function Film() {
  const {state: {title, releaseDate, director, episodeID, producers, openingCrawl}} = useLocation();
  return(
    <div>
      <div>{title}</div>
      <div>{releaseDate}</div>
      <div>{director}</div>
      <div>{episodeID}</div>
      <div>{producers}</div>
      <div>{openingCrawl}</div>
    </div>
  )
}

export default Film;