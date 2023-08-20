import { useState } from 'react';

export default function Sportangebote({angebote, setFilter}){

    const [selectedOption, setSelectedOption ] = useState("");

    function handleSelectChange(e){
        setSelectedOption(e.target.value);
        //filterabfrage:
        let localFilter;
        if(e.target.value === "freie Plätze"){
            localFilter = ["freieplaetze", true];
        }
        else if(e.target.value === "montags" || e.target.value === "dienstags" || e.target.value === "mittwochs" || e.target.value === "donnerstags" || e.target.value === "freitags" || e.target.value === "samstags"){
            localFilter = ["wochentag", e.target.value];
        }
        else if(e.target.value === "Erwachsene"){
            localFilter = ["alter", e.target.value];
        }
        else if(e.target.value === "Kinder"){
            localFilter = ["alter", "Jahre"]
        }
        else{
            localFilter = [];
        }
        setFilter(localFilter);
    }

    return(
    <div className="sportangebote container">
        <h2>Sportangebote</h2>
        <div className="präambel">
            Bei Interesse an einer beitragsfreien "Probestunde" bitte das Kontaktformular nutzen!
            Unsere Kinder-Sportangebote richten sich an  Kinder aus Köln-Poll!
        </div>
        <hr/>
        <select value={selectedOption} onChange={handleSelectChange}>
            <option value="ALLE">ALLE</option>
            <option value="freie Plätze">freie Plätze</option>
            <option value="Kinder">Kinder</option>
            <option value="Erwachsene">Erwachsene</option>
            <option value="montags">montags</option>
            <option value="dienstags">dienstags</option>
            <option value="mittwochs">mittwochs</option>
            <option value="donnerstags">donnerstags</option>
            <option value="freitags">freitags</option>
            <option value="samstags">samstags</option>
        </select>
        <ul>
            {angebote.map((item, i)=> 
            <li key={i}>
                <div className="angebot-titel">{item.fields.titel}</div>
                <div>{item.fields.wochentag + ", " + item.fields.uhrzeit + " Uhr"}</div>
                <div>{"Alter: " + item.fields.alter}</div>
                <div>{item.fields.ort}</div>
                {item.fields.freieplaetze ? 
                <div className="green">- Noch freie Plätze -</div> : 
                <div className="red">- Z. Zt. keine freien Plätze -</div>}
                
            </li>
            )}
        </ul>




    </div>
    );


}