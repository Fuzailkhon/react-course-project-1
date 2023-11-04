import './App.css';
import CardList from './components/CardList';
import SearchBar from './components/SearchBar';

function App(): React.ReactElement {
  return (
    <>
      <section className="search-section">
        <SearchBar />
      </section>
      <section className="card-section">
        <CardList valuesList={[]} />
      </section>
    </>
  );
}

export default App;
