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
        else{
            localFilter = [];
        }

        setFilter(localFilter);
    }

    return(
    <div className="sportangebote">
        <h2>Sportangebote</h2>
        <div className="präambel">
            Bei Interesse an einer beitragsfreien "Probestunde" bitte das Kontaktformular nutzen!
            Unsere Kinder-Sportangebote richten sich an  Kinder aus Köln-Poll!
        </div>
        <hr/>
        <select value={selectedOption} onChange={handleSelectChange}>
            <option value="ALLE">ALLE</option>
            <option value="freie Plätze">freie Plätze</option>
        </select>
        <ul>
            {angebote.map(item => 
            <li>
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