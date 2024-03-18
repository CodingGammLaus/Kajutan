import React from "react";
import '../styles/style.css';
import '../styles/printstyle.css';

import {Link} from 'react-router-dom';

class Footer extends React.Component {

    render() { 
        return (
            <footer>
                <div className="fot">
                    <div className="firsttextfot">
                        <p className="footertextheader">Kontakta oss</p>
                        <p className="footertext">kajjan@gmail.com</p>
                        <p className="footertext">Tel: 090-24040</p>
                        <p className="footertext">Gamla Storgatan 47 <t/> 
                            <Link id="footermaplink" to="https://www.google.com/maps/place/Kajutan/@63.7094471,20.3585933,17z/data=!3m1!4b1!4m6!3m5!1s0x467c57093ab26d6d:0x63bd2ba299ebe24d!8m2!3d63.7094447!4d20.3611682!16s%2Fg%2F1tcw6thf?entry=ttu" target="_blank">
                              (tryck för karta)
                            </Link>
                        </p>
                        <div>
                            <Link to="https://www.instagram.com/kajutan_i_holmsund/?igshid=fykxnc2uqkss&fbclid=IwAR1zCch6kVrFypU6_AxIjfgXE67RLH0PxYlkXdYhy6pjkPZQ3cYFseP2J5E" target="_blank">
                                <img src={require("../bilder/instagram.png")} alt="instagram logo" className="instagramlogo" />
                            </Link>
                            <Link to="https://www.facebook.com/profile.php?id=100054215632458" target="_blank">
                                <img src={require("../bilder/facebook.png")} alt="facebook logo" className="facebooklogo" />
                            </Link>
                        </div>
                    </div>
    
                    <div className="textfot">
                        <p className="footertextheader">Hitta snabbt </p>
    
                        <p> 
                            <Link to="kajutan-react" className="footerlinks">Hem</Link><br /> 
                            <Link to="meny" className="footerlinks">Meny</Link><br />
                            <Link to="bokabord" className="footerlinks">Boka bord</Link><br />
                            <Link to="om" className="footerlinks">Om oss</Link><br />
                            <Link to="kontakt" className="footerlinks">Kontakta oss</Link>
                        </p>  
                    </div>
                    
                    <div className="textfot" >
                        <p className="footertextheader">Öppettider</p>
                        <p className="footertext">Mån-Tors 10:00 - 20:00</p>
                        <p className="footertext">Fre 10:00 - 23:00</p>
                        <p className="footertext">Lör 12:00 - 23:00</p>
                        <p className="footertext">Sön 12:00 - 20:00</p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;