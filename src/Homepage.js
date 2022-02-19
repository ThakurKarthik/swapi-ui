import React from 'react';
import { useQuery } from '@apollo/client';
import * as queries from './queries';
import Table from './components/Table';

function Films() {
  const { loading, error, data } = useQuery(queries.filmsQuery, {
    variables: {
      first: 10,
    },
  });
  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    console.log(error);
    return <div>Error</div>;
  }
  console.log('film data', data);
  return (
    <Table
      data={data.allFilms.edges}
      fullData = {data.allFilms}
      columns={['title', 'releaseDate', 'director']}
      detailPageUrl = '/film'
    />
  );
}

function People() {
  const { loading, error, data } = useQuery(queries.peopleQuery, {
    variables: {
      first: 10,
    },
  });
  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    console.log(error);
    return <div>Error</div>;
  }
  console.log('people', data);
  return (
    <Table
      data={data.allPeople.edges}
      fullData = {data.allPeople}
      columns={['name', 'birthYear', 'gender']}
      detailPageUrl = '/person'
    />
  );
}

function Planets() {
  const { loading, error, data } = useQuery(queries.planetQuery, {
    variables: {
      first: 10,
    },
  });
  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    console.log(error);
    return <div>Error</div>;
  }
  console.log('planet', data);
  return (
    <Table
      data={data.allPlanets.edges}
      fullData = {data.allPlanets}
      columns={['name', 'population', 'diameter']}
      detailPageUrl = '/planet'
    />
  );
}

function Species() {
  const { loading, error, data } = useQuery(queries.speciesQuery, {
    variables: {
      first: 10,
    },
  });
  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    console.log(error);
    return <div>Error</div>;
  }
  console.log('species', data);
  return (
    <Table
      data={data.allSpecies.edges}
      fullData = {data.allSpecies}
      columns={['name', 'classification', 'designation']}
      detailPageUrl = '/species'
    />
  );
}

function Starships() {
  const { loading, error, data } = useQuery(queries.starShipQuery, {
    variables: {
      first: 10,
    },
  });
  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    console.log(error);
    return <div>Error</div>;
  }
  console.log('starship', data);
  return (
    <Table
      data={data.allStarships.edges}
      fullData = {data.allStarships}
      columns={['name', 'model', 'starshipClass']}
      detailPageUrl = '/star-ship'
    />
  );
}

function Vehicles() {
  const { loading, error, data } = useQuery(queries.vehiclesQuery, {
    variables: {
      first: 10,
    },
  });
  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    console.log(error);
    return <div>Error</div>;
  }
  console.log('vehicle', data);
  return (
    <Table
      data={data.allVehicles.edges}
      fullData = {data.allVehicles}
      columns={['name', 'model', 'vehicleClass']}
      detailPageUrl = '/vehicle'
    />
  );
}

class Homepage extends React.Component {
  render() {
    return (
      <div>
        Homepage
        <Films/>
        <People/>
        <Planets/>
        <Species/>
        <Starships/>
        <Vehicles/>
      </div>
    );
  }
}

export default Homepage;
