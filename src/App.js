import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Cities from './components/Cities';
import { useEffect, useState } from 'react';
import axios from 'axios';

let testInput = ''
function App() {
  const [input, setInput] = useState('');
  const [metropolianCities, setMetropolianCities] = useState([]);
  const [otherCities, setOtherCities] = useState([]);

  useEffect(async () => {
    testInput = input
    if (input !== "") {
      await sleep(500)
      if(input === testInput){
        try {
          const { data } = await axios.get('https://graneet1.herokuapp.com/cities/' + input)
          setMetropolianCities(data.metropolianCities)
          setOtherCities(data.otherCities)
        } catch (e) {
          console.log(e);
        }
      }     
    } else {
      setMetropolianCities([])
      setOtherCities([])
    }
  }, [input]);

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  return (
    <div className="App">
      <Header input={input} setInput={setInput} />
      <main className="App__main">
        <Cities title="Villes de métropole" cities={metropolianCities} />
        <Cities title='Villes d’outre-mer' cities={otherCities} />
      </main>
    </div>
  );
}

export default App;
