import './App.css';
import fakeData from '../src/fakeData/fakeData.json';
import Header from './components/Header/Header';
import { useEffect, useState } from 'react';
import Players from './components/Players/Players';
import Footer from './components/Footer/Footer';

function App() {
  const [players, setPlayers] = useState([]);
  useEffect(()=>{
    // fetch('https://api.mocki.io/v1/abc1aa45')
    // .then(res => res.json())
    // .then(data =>setPlayers(data))
    setPlayers(fakeData);
  },[]);
  
  return (
   <div className="all-players">
     <Header></Header>
     <Players players={players}></Players>
     <Footer></Footer>
   </div>
  );
}

export default App;
