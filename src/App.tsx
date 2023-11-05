import './App.css';
import CardList from './components/CardList';
import SearchBar from './components/SearchBar';
import { useState } from 'react';
import { ISWAPIResource } from './models';

const SWAPI_RES_NAMES: string[] = [
  'films',
  'people',
  'planets',
  'species',
  'starships',
  'vehicles',
];

function App(): React.ReactElement {
  const [searchResults, setSearchResults] = useState([]);
  const [prevPages, setPrevPages] = useState([]);
  const [nextPages, setNextPages] = useState([]);

  async function fetchResource(searchVal: string) {
    setPrevPages([]);
    setNextPages([]);
    const previous: string[] = [];
    const next: string[] = [];
    let results: ISWAPIResource;
    SWAPI_RES_NAMES.forEach(async (resource) => {
      await fetch(`https://swapi.dev/api/${resource}/?search=${searchVal}`)
        .then((response) => response.json())
        .then((responseData) => {
          previous.push(responseData.previous);
          next.push(responseData.next);
          results = results.concat(responseData.results);
        })
        .then((responseData) => {
          console.log(prevPages, nextPages, searchResults);
          
        });
    });
  }

  return (
    <>
      <section className="search-section">
        <SearchBar submitFunc={fetchResource} />
      </section>
      <section className="card-section">
        <CardList valuesList={[]} />
      </section>
    </>
  );
}

export default App;
