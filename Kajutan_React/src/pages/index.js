import React from "react";
import '../styles/style.css';
import '../styles/printstyle.css';
import {Link} from 'react-router-dom';

export default function Home() {

    return (  
        <body >
    
            <h1>Välkommen till <br /> KAJUTAN</h1>
    
            <div className="slideshow" style={{marginBottom: "40px", width: "90%", position: "relative"}}>
    
                <img src={require("../bilder/matkajjan.jpg")} alt="mat bild" id="frontpic" className="image fade" />
    
                <div id="booktablediv">
                    <p id="booktabletext">Boka bord på Kajutan</p>
                    <Link to="/bokabord" className="footerlinks">
                        <button id="reserve_table_button">Boka bord</button>
                    </Link>
                </div>
            </div>
    
            <div id="menuweek" className="slideshow slide popup" style={{marginBottom: "40px", width: "90%"}}>
                <div className="hours">
                    <h1 id="week" style={{marginTop: "30px"}}>Veckans Lunchmatsedel Vecka 8 <br /> 10:00 - 13:00</h1>
                    <table>
                        <tr>
                            <td className="lunchday">Måndag</td>
                            <td id="monday">Panerad fisk</td>
                        </tr>
                        <tr>
                            <td className="lunchday">Tisdag</td>
                            <td id="tuesday">Kyckling med potatisklyftor</td>
                        </tr>
                        <tr>
                            <td className="lunchday">Onsdag</td>
                            <td id="wednesday">Ungsstekt chorizo med potatismos</td>
                        </tr>
                        <tr>
                            <td className="lunchday">Torsdag</td>
                            <td id="thursday">Köttbullar med stuvade makaroner</td>
                        </tr>
                        <tr>
                            <td className="lunchday">Fredag</td>
                            <td id="friday">Grillad benfri kotlett</td>
                        </tr>
                    </table>
                    <p id="lunchprice">Pris 115 kr</p>
                </div>
            </div>
    
            <div className="slideshow popup" style={{width: "90%"}}>
                <div className="hours">
                    <h1 style={{marginTop: "30px"}}>Öppettider</h1>
                    <p>Mån-Tors 10 - 20, Fre 10 - 23, Lör 12 - 23, Sön 12 - 20</p>
                    <p className="boldparagraphtext">Telefonnummer: 090 - 240 40</p>
                </div>
            </div>
    
            <div className="slideshow" style={{width: "90%"}}>
                <h1 style={{marginTop: "70px"}}>Kajutan på Instagram</h1>
                <Link to="https://www.instagram.com/kajutan_i_holmsund/?igshid=fykxnc2uqkss&fbclid=IwAR1zCch6kVrFypU6_AxIjfgXE67RLH0PxYlkXdYhy6pjkPZQ3cYFseP2J5E" target="_blank">
                    <img style={{marginLeft: "0px", width: "24%", height: "24%", position: "relative"}} alt="bild 1" src={require("../bilder/kajjan1.png")} />
                    <img style={{marginLeft: "5px", width: "24%", height: "24%", position: "relative"}} alt="bild 2" src={require("../bilder/kajjan2.png")} />
                    <img style={{marginLeft: "5px", width: "24%", height: "24%", position: "relative"}} alt="bild 3" src={require("../bilder/kajjan3.png")} />
                    <img style={{marginLeft: "5px", width: "24%", height: "24%", position: "relative"}} alt="bild 4" src={require("../bilder/kajjan4.png")} />
                </Link>                                
            </div>
    
        
            <div className="slideshow" style={{width: "90%"}}>
                <h1 style={{marginTop: "70px"}}>Hitta oss</h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1767.183923698348!2d20.361168199999998!3d63.70944469999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467c57093ab26d6d%3A0x63bd2ba299ebe24d!2sKajutan!5e0!3m2!1ssv!2sse!4v1706901571342!5m2!1ssv!2sse" style={{width: "100%", height: "500px", border: "2px solid black"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </body>
    );
}