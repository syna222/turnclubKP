

export default function Kontakt(){



    return(
    <div className="kontakt">
        <h2>Kontaktiere uns!</h2>
        <div className="präambel">
            Dies ist der einfachste Weg um mit dem TurnClub Köln-Poll 1904 e.V. in Kontakt zu treten. Wir bemühen uns so schnell wie möglich zu antworten.
            Wir freuen uns über Ihre Nachricht.
        </div>
        <hr/>
        <form>
            <section>
                <label htmlFor="vorname">Vorname *</label>
                <input type="text" id="vorname" name="vorname"/>
            </section>
            <section>
                <label htmlFor="nachname">Nachname *</label>
                <input type="text" id="nachname" name="nachname"/>
            </section>
            <section>
                <label htmlFor="email">Email *</label>
                <input type="text" id="email" name="email"/>
            </section>
            <section>
                <label htmlFor="telefon">Telefon</label>
                <input type="text" id="telefon" name="telefon"/>
            </section>
            <section>
                <label htmlFor="nachricht">Nachricht</label>
                <textarea id="nachricht" name="nachricht">Meine Nachricht...</textarea>
            </section>
            <section>
                <label>* Pflichtfelder</label>
                <div className="button-container"><button>Absenden</button></div>
            </section>
        </form>
    </div>
    );


}