import logo from './logo.svg';
import './App.css';
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/Searchbar";

function App() {
  return (
    <div className="App">
      <h1>Ravenous</h1>
      <SearchBar/>
      <BusinessList/>
    </div>
  );
}

export default App;
