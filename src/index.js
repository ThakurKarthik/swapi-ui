import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import './index.css';
import Homepage from './Homepage';
import Film from './components/Film';
import People from './components/People';
import Planet from './components/Planet';
import Species from './components/Species';
import StarShip from './components/StarShip';
import Vehicle from './components/Vehicle';

const cacheUpdateFn = ['allFilms', 'allPeople', 'allVehicles', 'allStarships', 'allSpecies', 'allPlanets'].reduce((cacheUpdate, dataKey) => {
  cacheUpdate[dataKey] = {
    keyArgs: false,
    merge(existing={}, incoming) {
      const totalEdges = [...((existing && existing.edges) || []), ...incoming.edges]
      return {
        ...incoming,
        edges: totalEdges
      }
    }
  }
  return cacheUpdate
}, {});

const client = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          ...cacheUpdateFn
        }
      }
    }
  }),
  connectToDevTools: true
});

ReactDOM.render(
    <ApolloProvider client={client}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <React.StrictMode>
            <Homepage/>
          </React.StrictMode>
        }></Route>
        <Route path="/film" element={
          <React.StrictMode>
            <Film/>
          </React.StrictMode>
        }></Route>
        <Route path="/person" element={
          <React.StrictMode>
            <People/>
          </React.StrictMode>
        }></Route>
        <Route path="/planet" element={
          <React.StrictMode>
            <Planet/>
          </React.StrictMode>
        }></Route>
        <Route path="/species" element={
          <React.StrictMode>
            <Species/>
          </React.StrictMode>
        }></Route>
        <Route path="/star-ship" element={
          <React.StrictMode>
            <StarShip/>
          </React.StrictMode>
        }></Route>
        <Route path="/vehicle" element={
          <React.StrictMode>
            <Vehicle/>
          </React.StrictMode>
        }></Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
