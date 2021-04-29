import './App.css';
import Header from './components/Header'
import SearchForm from './components/SearchForm'
import Table from './components/Table'
import API from './util/API';
import { useState, useEffect } from 'react';

function App() {
  const [userInput, setUserInput] = useState("");
  const [res, setRes] = useState();

  const handleInputChange = event => setUserInput(event.target.value);

  useEffect(() => {
    API.search()
      .then(res => setRes(res.data.results))
      .catch(err => console.log(err));
  }, []);
  
  return (
    <div className="App">
      <div className="container" id="appContainer">
        <Header />
        <br />
        <SearchForm userInput={userInput} handleInputChange={event => handleInputChange(event)}/>
        <br />
        {console.log(res)}
        <Table data={res} />
      </div>
    </div>
  );
}

export default App;
