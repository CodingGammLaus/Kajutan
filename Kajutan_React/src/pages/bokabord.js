import { React, useState } from "react";
import '../styles/style.css';
import '../styles/printstyle.css';
import Head from "../component/headname";
import ReCAPTCHA from 'react-google-recaptcha';


export default function Bord()  {

    const [capVal, setCapVal] = useState(null);

    return ( 
        
        <body>
            <Head string={"Boka bord"}/>

            <div className="slideshow">
                <form  name="send_form" style={{margin: "auto"}}>
                    <p className="menucategory">Boka bord på Kajutan</p>
                    
                    <p style={{textAlign: "start", marginBottom: "0px"}}>Namn *</p>
                    <input name="fname" type="text" required/>
                    
                    <p style={{textAlign: "start", marginBottom: "0px", marginTop: "0px"}}>Telefonnummer & Antal personer *</p>
                    <div style={{display: "flex"}}>
                        <input name="number" type="tel" style={{marginRight: "2%"}} required />
                        <input name="persons" type="number" max="20" min="1" placeholder="Antal personer (max 20)" style={{width: "30%"}} required />
                    </div>
                    
                    <p style={{textAlign: "start", marginBottom: "0px", marginTop: "0px"}}>Datum och tid *</p>
                    <input name="bookdate" type="datetime-local" style={{resize: "none"}} required />
                    
                    <p id="max_char" style={{textAlign: "start", marginBottom: "0px", marginTop: "0px"}}>Meddelande (200 tecken)</p>
                    <textarea name="comment" onkeyup="maxchar()" maxlength="200"></textarea>

                    <div style={{justifyContent: "center", display: "flex", marginBottom: "20px"}}>
                        <ReCAPTCHA sitekey={"6LfJeIApAAAAAMWCvj00z8WwD7H5HzSIwjrDhKOY"} onChange={(val) => setCapVal(val)}/>
                    </div>
                    
                    <button id="booktablebutton" disabled={!capVal}>Boka</button>
                </form>
            </div>
        </body>
    );
}

