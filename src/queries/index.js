import {gql} from '@apollo/client';

const filmsQuery = gql`
query filmsQuery($first: Int, $after: String)  {
  allFilms(first: $first, after: $after) {
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    totalCount
    edges {
      cursor
      node {
        title
        id
        releaseDate
        episodeID
        director
        producers
        openingCrawl
      }
    }
  }
}
`;

const peopleQuery = gql`
query peopleQuery($first: Int, $after: String)  {
  allPeople(first: $first, after: $after){
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    totalCount
    edges {
      cursor
      node {
        id
        name
        birthYear
        eyeColor
        gender
        hairColor
        height
        mass
        skinColor
        homeworld {
          name
          id
        }
        species {
          name
          id
        }
        filmConnection {
          totalCount
          films {
            title
            episodeID
            id
          }
        }
        starshipConnection {
          totalCount
          starships {
            name
            id
            model
          }
        }
        vehicleConnection {
          totalCount
          vehicles {
            name
            id
            model
          }
        }
      }
    }
  }
}
`;

const planetQuery = gql`
query allPlanets($first: Int, $after: String)  {
  allPlanets(first: $first, after: $after) {
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    totalCount
    edges {
      node {
        id
        name
        diameter
        rotationPeriod
        orbitalPeriod
        gravity
        population
        climates
        terrains
        surfaceWater
        residentConnection {
          totalCount
        }
        filmConnection {
          totalCount
          films {
            title
            id
          }
        }
      }
      cursor
    }
  }
}
`;

const speciesQuery = gql`
query species($first: Int, $after: String)  {
  allSpecies(first: $first, after: $after) {
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    totalCount
    edges {
      node {
        name
        id
        classification
        designation
        averageHeight
        averageLifespan
        eyeColors
        hairColors
        skinColors
        language
        homeworld {
          name
          id
        }
        personConnection {
          totalCount
          people {
            name
            id
          }
        }
        filmConnection {
          totalCount
          films {
            title
            id
          }
        }
      }
      cursor
    }
  }
}
`;

const starShipQuery = gql`
query starships($first: Int, $after: String)  {
  allStarships(first: $first, after: $after) {
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    totalCount
    edges {
      node {
        name
        id
        model
        starshipClass
        manufacturers
        costInCredits
        length
        crew
        passengers
        maxAtmospheringSpeed
        hyperdriveRating
        MGLT
        cargoCapacity
        consumables
        pilotConnection {
          totalCount
          pilots {
            name
            id
          }
        }
        filmConnection {
          totalCount
          films {
            id
            title
          }
        }
      }
      cursor
    }
  }
}
`;

const vehiclesQuery = gql`
query vehicles($first: Int, $after: String) {
  allVehicles(first: $first, after: $after) {
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    totalCount
    edges {
      cursor
      node {
        id
        name
        model
        vehicleClass
        manufacturers
        costInCredits
        length
        crew
        passengers
        maxAtmospheringSpeed
        cargoCapacity
        consumables
        pilotConnection {
          totalCount
          pilots {
            name
            id
          }
        }
        filmConnection {
          totalCount
          films {
            id
            title
          }
        }
      }
    }
  }
}
`;
export {
  filmsQuery,
  peopleQuery,
  planetQuery,
  speciesQuery,
  starShipQuery,
  vehiclesQuery,
}