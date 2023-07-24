import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import NavHeader from './NavHeader';
import Startseite from "./Startseite";
import News from "./News"
import Sportangebote from "./Sportangebote";
import ÜberUns from "./ÜberUns";
import Sonstiges from "./Sonstiges";
import Kontakt from "./Kontakt";
import useContentfulAngebote from './useContentfulAngebote';


function App() {

  const { getAngebote } = useContentfulAngebote();
  const [ angebote, setAngebote ] = useState([]);

  //comparator-func for sorting angebote alphabetically:
  function compareT (a, b){
    if(a.fields.titel < b.fields.titel){
      return -1;
    }
    if(a.fields.titel > b.fields.titel){
      return 1;
    }
    return 0;
  }

  useEffect(() => {
    getAngebote().then((response) => {
        console.log(response.items);        //items = Array of Sportangebote-objects
        let sorted_items = response.items;
        sorted_items.sort( compareT )
        setAngebote(sorted_items)});
  }, []);


  return (
    <div className="App">
      <NavHeader/>

      <Routes>
        <Route path="/" element={<Startseite />} />
        <Route path="/news" element={<News />} />
        <Route path="/sportangebote" element={<Sportangebote angebote={angebote}/>} />
        <Route path="/ueberuns" element={<ÜberUns />} />
        <Route path="/sonstiges" element={<Sonstiges />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>

    </div>
  );
}

export default App;
