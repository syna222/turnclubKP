import './App.css';
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import NavHeader from './NavHeader';
import Footer from "./Footer";
import Startseite from "./Startseite";
import News from "./News"
import Sportangebote from "./Sportangebote";
import UeberUns from "./UeberUns";
import Historisches from './Historisches';
import EhrungenJubilaeen from './EhrungenJubilaeen';
import Allianz from './Allianz';
import RolleRueckwaerts from './RolleRueckwaerts';
import Sonstiges from "./Sonstiges";
import Kontakt from "./Kontakt";
import useCFAngebote from './useCFAngebote';
import useCFHistorisches from './useCFHistorisches';
import useCFEhrungen from './useCFEhrungen';
import useCFNews from "./useCFNews";
import useCFRueckschau from './useCFRueckschau';
import useCFAllianz from './useCFAllianz';
import Impressum from './Impressum';


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
        <Route path="/sonstiges" element={<Sonstiges />} />
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
