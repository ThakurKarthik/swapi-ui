import React from 'react';
import { useQuery } from '@apollo/client';
import * as queries from './queries';
import Table from './components/Table';

function StarWarsFetcher(props) {
  const {query, dataKey, columns, detailPageUrl} = props;
  const { loading, error, data, fetchMore } = useQuery(query, {
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
  const responseData = data[dataKey];
  const nodes = responseData.edges.map(edge => edge.node);
  const pageInfo = responseData.pageInfo
  return (
    <Table
      data={nodes}
      fullData = {responseData}
      columns={columns}
      detailPageUrl = {detailPageUrl}
      fetchNextData = {() => {
        if(pageInfo.hasNextPage) {
          fetchMore({
            variables: {
              after: pageInfo.endCursor
            }
          })
        }
      }}
    />
  );
}
class Homepage extends React.Component {
  render() {
    return (
      <div>
        Homepage
        <StarWarsFetcher
          title = "Films"
          dataKey = 'allFilms'
          detailPageUrl = '/film'
          columns={['title', 'releaseDate', 'director']}
          query = {queries.filmsQuery}
        />
        <StarWarsFetcher
          title = "People"
          dataKey = 'allPeople'
          detailPageUrl = '/person'
          columns={['name', 'birthYear', 'gender']}
          query = {queries.peopleQuery}
        />
        <StarWarsFetcher
          title = "Planets"
          dataKey = 'allPlanets'
          detailPageUrl = '/planet'
          columns={['name', 'population', 'diameter']}
          query = {queries.planetQuery}
        />
        <StarWarsFetcher
          title = "Species"
          dataKey = 'allSpecies'
          detailPageUrl = '/species'
          columns={['name', 'classification', 'designation']}
          query = {queries.speciesQuery}
        />
        <StarWarsFetcher
          title = "Starships"
          dataKey = 'allStarships'
          detailPageUrl = '/star-ship'
          columns={['name', 'model', 'starshipClass']}
          query = {queries.starShipQuery}
        />
        <StarWarsFetcher
          title = "Vehicles"
          dataKey = 'allVehicles'
          detailPageUrl = '/vehicle'
          columns={['name', 'model', 'vehicleClass']}
          query = {queries.vehiclesQuery}
        />
      </div>
    );
  }
}

export default Homepage;
