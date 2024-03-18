import React from "react";
import '../styles/style.css';
import '../styles/printstyle.css';
import Head from "../component/headname";

export default function Om() {

    return (
        <body>
            <Head string={"Om oss"}/>
    
            <div id="omoss">
                <p className="abouttext">
                    Restaurang Kajutan finner ni i Holmsunds “Old Town”. 
                    Under mitten av 1900-talet vandrade tusentals personer 
                    årligen efter gatan där nu Kajutan är belägen. Från Djupviks 
                    hamn har personer från alla världens hörn promenerat längs 
                    “Gamla Storgatan” som den numera heter. Denna gata var en gång 
                    i tiden som “stråget” i Köpenhamn. Ett antal cafer, biografer, 
                    kiosker, butiker samt matställen kunde man finna efter gatan. 
                    Där vi idag har restaurangen så minns äldre  
                </p>
                <p className="abouttext">
                    genuina skärgårdsbor 
                    huset där man en gång i tiden köpte sina fina kläder i orten. 
                    Från “Nordbrandts” med start i detta hus på 30-talet, “Wincents 
                    Herrekipering” från 50-talet och därefter några år under namnet 
                    “Chicago” som då var en sportaffär. Restaurang Kajutan är därför 
                    nu stolt att sedan många år tillbaka servera allt ifrån pizzor 
                    och dagens lunch till goda a la carte middagar med smakfullt vin 
                    i ett historiskt hus efter en gata med anor som få idag kan föreställa sig.
                </p>
            </div>
            <img src={require("../bilder/Kajutan_logo.png")} alt="Kajutan logo" id="aboutpic" />
        </body>
    );
}