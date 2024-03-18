import React from "react";
import '../styles/style.css';
import '../styles/printstyle.css';

const Head = ({string}) => {

    return (
        <>
            <h1>{string}</h1>
            <hr/>
        </>
    );
};

export default Head;