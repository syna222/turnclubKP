import banner from "./images/banner.jpg";

export default function Startseite(){



    return(
    <div className="startseite">
        <h2>Willkommen!</h2>
        <img className="vereins-banner" src={banner} alt="vereins-banner"/>
        <h3>...seit 119 Jahren</h3>
    </div>
    );


}