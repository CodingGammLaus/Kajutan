import React from "react";
import '../styles/style.css';
import '../styles/printstyle.css';
import Head from "../component/headname";

const Food = ({name, price}) => {

    return (
        <div className="pizzadiv">
            <p className="pizza">{name}</p>
            <p>{price}</p>
        </div>
    );
};

export default function Meny() {

 
    return ( 
        <body>
            <Head string={"Meny"}/>

            <p className="menucategory">Pizza</p>
            <div className="foodcat">
                <Food name={"1. Margerita"} price={"99 kr"} />
                <Food name={"2. Vesuvio"} price={"109 kr"} />
                <Food name={"3. Truino"} price={"109 kr"} />
                <Food name={"4. Capricciosa"} price={"109 kr"} />
                <Food name={"5. Hawaii"} price={"109 kr"} />
                <Food name={"6. Altano"} price={"109 kr"} />
                <Food name={"7. Disco"} price={"109 kr"} />
                <Food name={"8. Cacciatore"} price={"109 kr"} />
                <Food name={"9. Romana"} price={"109 kr"} />
                <Food name={"10. Bolognese"} price={"109 kr"} />
                <Food name={"11. Napolitana"} price={"115 kr"} />
                <Food name={"12. Opera"} price={"115 kr"} />
                <Food name={"13. Potensa"} price={"115 kr"} />
                <Food name={"14. Marinara"} price={"115 kr"} />
                <Food name={"15. Pescatore"} price={"115 kr"} />
                <Food name={"16. Mamma mia"} price={"115 kr"} />
                <Food name={"17. Hawaii special"} price={"119 kr"} />
                <Food name={"18. Bussola"} price={"119 kr"} />
                <Food name={"19. Laccianti"} price={"119 kr"} />
                <Food name={"20. Hot pepper"} price={"125 kr"} />
                <Food name={"21. Liner"} price={"125 kr"} />
                <Food name={"22. Maxim"} price={"125 kr"} />
                <Food name={"23. Kebabpizza"} price={"129 kr"} />
                <Food name={"24. Quattro stagioni"} price={"129 kr"} />
                <Food name={"25. Picasso"} price={"129 kr"} />
                <Food name={"26. Skärgårdspizza"} price={"135 kr"} />
                <Food name={"27. Romantica"} price={"125 kr"} />
            </div>
            <p className="menucategory">Kötträtter</p>
            <div className="foodcat">
                <Food name={"28. Plankstek"} price={"329 kr"} />
                <Food name={"29. Gorgonzolaspäckad tournedos"} price={"329 kr"} />
                <Food name={"30. Pepparstek"} price={"329 kr"} />
                <Food name={"31. Filé mignon black & white"} price={"299 kr"} />
                <Food name={"32. Grillad fläskfile"} price={"279 kr"} />
                <Food name={"33. Västerbottensknyte"} price={"279 kr"} />
                <Food name={"34. Klassisk entrecote"} price={"299 kr"} />
                <Food name={"35. Klassisk panerad schnitzel"} price={"285 kr"} />
                <Food name={"36. Whiskeyspäckad oxfilé"} price={"349 kr"} />
            </div>
            <p className="menucategory">Fågel & Fisk</p>
            <div className="foodcat">
                <Food name={"37. Kycklingfilé"} price={"259 kr"} />
                <Food name={"38. Stekt röding"} price={"299 kr"} />
                <Food name={"39. Stekt laxfilé"} price={"299 kr"} />
                <Food name={"40. Panko panerad Kycklingfilé"} price={"299 kr"} />
            </div>
            <p className="menucategory">Grillen</p>
            <div className="foodcat">
                <Food name={"41. Greenburgermeal 90g"} price={"119 kr"} />
                <Food name={"42. Skrovmål"} price={"119 kr"} />
                <Food name={"43. Hemlagad hamburgare"} price={"189 kr"} />
                <Food name={"44. Parisarmål"} price={"119 kr"} />
                <Food name={"45. Fallafelrulle"} price={"119 kr"} />
                <Food name={"46. Kycklingrulle"} price={"129 kr"} />
                <Food name={"47. Kebabrulle"} price={"129 kr"} />
                <Food name={"48. Kebabtallrik"} price={"119 kr"} />
                <Food name={"49. Fallafeltalrik"} price={"129 kr"} />
                <Food name={"50. Nachotallrik"} price={"125 kr"} />
                <Food name={"51. Friterad kyckling nuggets"} price={"119 kr"} />
            </div>
        </body>
    );
}