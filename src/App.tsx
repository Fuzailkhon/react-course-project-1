import './App.css';
import SearchBar from './components/SearchBar';
import { AppContext } from './AppContext';
import CardList from './components/CardList';

function App(): React.ReactElement {

  return (
    <AppContext>
      <section className="search-section">
        <SearchBar />
      </section>
      <section className="card-section">
        <CardList/>
      </section>
    </AppContext>
  );
}

export default App;
