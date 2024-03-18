import React from "react";
import '../styles/style.css';
import '../styles/printstyle.css';
import {Link} from 'react-router-dom';
import Head from "../component/headname";

const Box = ({boldtext, text}) => {

    return (
        <div className="box">
            <p className="boldparagraphtext">{boldtext}</p>
            <p>{text}</p>
        </div>
    );
};

export default function Kontakt() {

    return (
        <body>
            <Head string={"Kontakta oss"}/>

            <div className="contact">
                <div className="info">
                    <Box boldtext={"Address"} text={"Gamla Storgatan 47"}/>
                    <Box boldtext={"Telefonnummer"} text={"090-24040"}/>
                    <Box boldtext={"Epost"} text={"kajjan@gmail.com"}/>
                    <div className="box">
                        <p className="boldparagraphtext">Följ oss</p>
                        <div>
                            <Link to="https://www.instagram.com/kajutan_i_holmsund/?igshid=fykxnc2uqkss&fbclid=IwAR1zCch6kVrFypU6_AxIjfgXE67RLH0PxYlkXdYhy6pjkPZQ3cYFseP2J5E" target="_blank">
                                <img src={require("../bilder/instagram.png")} alt="instagram logo" className="instagramlogo" />
                            </Link>
                            <Link to="https://www.facebook.com/profile.php?id=100054215632458" target="_blank">
                                <img src={require("../bilder/facebook.png")} alt="facebook logo" className="facebooklogo" />
                            </Link>
                        </div> 
                    </div>
                </div>
                <div className="contactfrom">
                    <form name="send_form">
                        <p className="menucategory">Skicka meddelande</p>

                        <p style={{textAlign: "start", marginBottom: "0px", marginTop: "0px"}}>Namn *</p>
                        <input type="text" name="fname" required/>
                        
                        <p style={{textAlign: "start", marginBottom: "0px", marginTop: "0px"}}>Email *</p>
                        <input type="email" name="email" required/>
                        
                        <p id="max_char" style={{textAlign: "start", marginBottom: "0px", marginTop: "0px;"}}>Meddelande (200 tecken) *</p>
                        <textarea name="comment" onkeyup="maxchar()" maxlength="200" required></textarea>
                        
                        <input name="send" type="submit" value="Skicka" />
                    </form>
                </div>
            </div>
        </body>
    );
}
