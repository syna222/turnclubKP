import './App.css';
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import NavHeader from './components/NavHeader';
import Footer from "./components/Footer";
import Impressum from './components/Impressum';
import Startseite from "./components/Startseite";
import News from "./components/News"
import Sportangebote from "./components/Sportangebote";
import UeberUns from "./components/UeberUns";
import Historisches from './components/Historisches';
import EhrungenJubilaeen from './components/EhrungenJubilaeen';
import Allianz from './components/Allianz';
import RolleRueckwaerts from './components/RolleRueckwaerts';
import Kontakt from "./components/Kontakt";
import useCFAngebote from './gettersContentful/useCFAngebote';
import useCFHistorisches from './gettersContentful/useCFHistorisches';
import useCFEhrungen from './gettersContentful/useCFEhrungen';
import useCFNews from "./gettersContentful/useCFNews";
import useCFRueckschau from './gettersContentful/useCFRueckschau';
import useCFAllianz from './gettersContentful/useCFAllianz';


function App() {

  //methods + state variables for all contentful article types:
  const { getAngebote } = useCFAngebote();
  const { getHistorisches } = useCFHistorisches();
  const { getEhrungen } = useCFEhrungen();
  const { getNews } = useCFNews();
  const { getRueckschau } = useCFRueckschau();
  const { getAllianz } = useCFAllianz();
  const [ angebote, setAngebote ] = useState([]);
  const [filter, setFilter ] = useState([]);
  const [ historien, setHistorien ] = useState([]);
  const [ ehrungen, setEhrungen ] = useState([]);
  const [ news, setNews ] = useState([]);
  const [ rueckschau, setRueckschau ] = useState([]);
  const [ allianzposts, setAllianzposts ] = useState([]);

  //comparator-func for sorting Angebote alphabetically (asc):
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
        let sorted_items = response.items;
        sorted_items.sort( compareA )
        setAngebote(sorted_items)});
  }, [filter]);

  //comparator-func for sorting Historisches alphabetically:
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
      sorted_items.sort( compareH );
      setHistorien(sorted_items);
    });
  }, []);

  //comparator-func for sorting Ehrungen alphabetically (desc):
  function compareE (a, b){
    if(a.fields.titel > b.fields.titel){
      return -1;
    }
    if(a.fields.titel < b.fields.titel){
      return 1;
    }
    return 0;
    }

  useEffect(() => {
    getEhrungen().then((response) => {
      let sorted_items = response.items;
      sorted_items.sort( compareE );
      setEhrungen(sorted_items);
    });
  }, []);

    //comparator-func for sorting News, Rückschau + Allianz by date:
    function compareN (a, b){
      if(a.fields.stand > b.fields.stand){
        return -1;
      }
      if(a.fields.stand < b.fields.stand){
        return 1;
      }
      return 0;
      }

  useEffect(() => {
    getNews().then((response) => {
      let sorted_items = response.items;
      sorted_items.sort( compareN );
      setNews(sorted_items);
    });
  }, []);

  useEffect(() => {
    getRueckschau().then((response) => {
      let sorted_items = response.items;
      sorted_items.sort( compareN );
      setRueckschau(sorted_items);
    });
  }, []);

  useEffect(() => {
    getAllianz().then((response) => {
      let sorted_items = response.items;
      sorted_items.sort( compareN );
      setAllianzposts(sorted_items);
    });
  }, []);

  return (
    <div className="App">
      <NavHeader/>
      <Routes>
        <Route path="/" element={<Startseite />} />
        <Route path="/news" element={<News news={news}/>} />
        <Route path="/sportangebote" element={<Sportangebote angebote={angebote} setFilter={setFilter}/>} />
        <Route path="/ueberuns" element={<UeberUns />} />
        <Route path="/sonstiges/historisches" element={<Historisches historien={historien}/>} />
        <Route path="/sonstiges/ehrungen" element={<EhrungenJubilaeen ehrungen={ehrungen}/>} />
        <Route path="/sonstiges/allianz" element={<Allianz allianzposts={allianzposts}/>} />
        <Route path="/sonstiges/rollerueckwaerts" element={<RolleRueckwaerts rueckschau={rueckschau}/>} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
