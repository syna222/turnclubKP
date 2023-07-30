import banner from "./images/banner.jpg";

export default function Startseite(){



    return(
    <div className="startseite container">
        <h2>Willkommen!</h2>
        <div className="banner-container">
            <img className="vereins-banner" src={banner} alt="vereins-banner"/>
        </div>
        <h3>...seit 119 Jahren</h3>
    </div>
    );


}