function validateContact() {

    document.getElementById('check_name').innerHTML = "";
    document.getElementById('check_email').innerHTML = "";

    let name = document.send_form.fname.value;   
    let email = document.send_form.email.value; 

    var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
    var isValid = pattern.test(email);

    if(name.length == 0) {

        document.getElementById('check_name').innerHTML = "Du måste ange ett namn";

        return false;
    }

    if(!isValid) {
    
        document.getElementById('check_email').innerHTML = "Du måste ange en giltig e-postadress";

        return false;
    }

    alert("Ditt mail har skickats!");
    return(true);
}



function validateBooking() {

    document.getElementById('check_name').innerHTML = "";
    document.getElementById('check_number').innerHTML = "";
    document.getElementById('check_date').innerHTML = "";

    let name = document.send_form.fname.value;  
    let number = document.send_form.number.value; 
    let persons = document.send_form.persons.value;  
    let date = document.send_form.bookdate.value;

    var pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{2,6}$/im;
    var isValid = pattern.test(number);

    if(name.length === 0) {

        document.getElementById('check_name').innerHTML = "Du måste ange ett namn";

        return false;
    }

    if(!isValid) {

        document.getElementById('check_number').innerHTML = "Du måste ange ett giltigt telefonnummer";

        return false;
    }

    if(persons.length === 0 || persons > 20 || persons < 1) {

        document.getElementById('check_number').innerHTML = "Ange antalet personer (Max 20)";

        return false;
    }

    if(date.length === 0) {
        
        document.getElementById('check_date').innerHTML = "Ange vilken dag och tid du vill boka bord";

        return false;
    }

    alert("Din bokning har skickats!");
    return(true);
}


function maxchar() {

    let comment = document.send_form.comment.value;

    document.getElementById('max_char').innerHTML = "Meddelande (" + (200 - comment.length) + " tecken)";
}


function vesuvio(string, number, id) {

    var info = document.getElementById(id);

    if(!info) {
        var newElement = document.createElement("p");
        newElement.id = id;
        var text = document.createTextNode(string);
        newElement.setAttribute("style", "color: black; font-size: 20px;");
        newElement.appendChild(text);
        var divElement = document.getElementsByClassName("showmore")[number];
        divElement.appendChild(newElement);
    }

    else {
        var textRemove = document.getElementById(id);
        textRemove?.remove();
    }
}