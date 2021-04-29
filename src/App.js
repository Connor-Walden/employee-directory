import './App.css';
import Header from './components/Header'
import SearchForm from './components/SearchForm'
import Table from './components/Table'
import API from './util/API';
import { useState, useEffect } from 'react';

function App() {
  const [userInput, setUserInput] = useState("");
  const [res, setRes] = useState([]);
  const [sorted, setSorted] = useState(false);

  const handleInputChange = event => setUserInput(event.target.value);

  useEffect(() => {
    API.search()
      .then(res => {
        setRes(res.data.results);
        console.log(res.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  const sortData = () => {
    setSorted(true);
  }

  const orderData = () => {
    const data = res.filter((item) => item.name.first.toLowerCase().includes(userInput.toLowerCase()));
  
    if(sorted) data.sort();

    return data;
  };
  
  return (
    <div className="App">
      <div className="container" id="appContainer">
        <Header />
        <br />
        <SearchForm userInput={userInput} handleInputChange={event => handleInputChange(event)}/>
        <br />
        <Table data={orderData()} sortData={() => sortData()} />
      </div>
    </div>
  );
}

export default App;
