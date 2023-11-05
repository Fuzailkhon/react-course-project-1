import './App.css';
import CardList from './components/CardList';
import SearchBar from './components/SearchBar';
import { useState } from 'react';
import { ISWAPIResource, ISWAPISearch } from './models';
import { ICard } from './components/Card';

const SWAPI_RES_NAMES: string[] = ['films', 'people', 'starships'];

function App(): React.ReactElement {
  const [cardsRenderList, setCardsRenderList] = useState<ICard[]>([]);
  const [fetchingData, setFetchingData] = useState(false);

  async function fetchResource(searchVal: string) {
    if (!searchVal) return;
    let searchResultsList: ISWAPIResource[] = [];
    setFetchingData(true);
    SWAPI_RES_NAMES.forEach(async (resource) => {
      const response = await fetch(
        `https://swapi.dev/api/${resource}/?search=${searchVal}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      );
      if (!response.ok) {
        console.error('Error fetching data from API');
      }
      const json: ISWAPISearch = await response.json();
      if (!json.count) return;
      searchResultsList = searchResultsList.concat(json.results);
      saveSearchResults(searchResultsList);
    });
  }

  async function saveSearchResults(saveSearchResults: ISWAPIResource[]) {
    const list: ICard[] = [];
    saveSearchResults.forEach((element) => {
      list.push({
        title: element.name || 'Anakin',
        info: element.created || 'Unknown',
      });
    });
    setCardsRenderList(list);
    setFetchingData(false);
  }

  return (
    <>
      <section className="search-section">
        <SearchBar submitFunc={fetchResource} />
      </section>
      <section className="card-section">
        {!fetchingData ? (
          <CardList valuesList={cardsRenderList} />
        ) : (
          <p>Loading ....</p>
        )}
      </section>
    </>
  );
}

export default App;
