import './App.css';
import SearchBar from './components/SearchBar';
import CardList from './components/CardList';
import Counter from './components/Counter';

function App(): React.ReactElement {
  return (
    <>
      <section className="search-section">
        {/* <SearchBar /> */}
        <Counter />
      </section>
      <section className="card-section">
        {/* <CardList /> */}
      </section>
    </>
  );
}

export default App;
