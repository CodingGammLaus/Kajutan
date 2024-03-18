import React from "react";
import '../styles/style.css';
import '../styles/printstyle.css';

const Button = ({string, size, height, marginTop}) => {

    return (
        <>
            <button 
                style={{width: {size}, height: {height}, marginTop: {marginTop}}} 
                className="custombutton">
                {string}
            </button>
        </>
    );
};

export default Button;