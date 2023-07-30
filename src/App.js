import './App.css';
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import NavHeader from './NavHeader';
import Footer from "./Footer";
import Startseite from "./Startseite";
import News from "./News"
import Sportangebote from "./Sportangebote";
import ÜberUns from "./ÜberUns";
import Historisches from './Historisches';
import Sonstiges from "./Sonstiges";
import Kontakt from "./Kontakt";
import useContentfulAngebote from './useContentfulAngebote';
import useContentfulHistorisches from './useContentfulHistorisches';
import Impressum from './Impressum';


function App() {

  const { getAngebote } = useContentfulAngebote();
  const { getHistorisches } = useContentfulHistorisches();
  const [ angebote, setAngebote ] = useState([]);
  const [filter, setFilter ] = useState([]);
  const [ historien, setHistorien ] = useState([]);

  //comparator-func for sorting angebote alphabetically:
  function compareA (a, b){
    if(a.fields.titel < b.fields.titel){
      return -1;
    }
    if(a.fields.titel > b.fields.titel){
      return 1;
    }
    return 0;
  }

  useEffect(() => {
    getAngebote(filter).then((response) => {
        //console.log(response.items);        //items = Array of Sportangebote-objects
        let sorted_items = response.items;
        sorted_items.sort( compareA )
        setAngebote(sorted_items)});
  }, [filter]);

  //comparator-func for sorting angebote alphabetically:
  function compareH (a, b){
    if(a.fields.ordnungsnummer < b.fields.ordnungsnummer){
      return -1;
    }
    if(a.fields.ordnungsnummer > b.fields.ordnungsnummer){
      return 1;
    }
    return 0;
  }

  useEffect(() => {
    getHistorisches().then((response) => {
      let sorted_items = response.items;
      sorted_items.sort( compareH )
      setHistorien(sorted_items)});
  }, []);



  return (
    <div className="App">
      <NavHeader/>

      <Routes>
        <Route path="/" element={<Startseite />} />
        <Route path="/news" element={<News />} />
        <Route path="/sportangebote" element={<Sportangebote angebote={angebote} setFilter={setFilter}/>} />
        <Route path="/ueberuns" element={<ÜberUns />} />
        <Route path="/sonstiges" element={<Sonstiges />} />
        <Route path="/sonstiges/historisches" element={<Historisches historien={historien}/>} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
