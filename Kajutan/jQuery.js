var clicked = 0;

$(document).on('click', '#nextweek_button', () => {

    if(clicked === 0) {
        
        $("#menuweek").animate({right: '2000px'}, () => {

            $("#nextweek_button").text("Nuvarande vecka");
            $("#week").html("Veckans Lunchmatsedel Vecka 9 <br> 10:00 - 13:00");
            $("#monday").text("Löksoppa");
            $("#tuesday").text("Torsk med potatis");
            $("#wednesday").text("Kebabtallrik");
            $("#thursday").text("Raggmunk med lingonsylt");
            $("#friday").text("Hawaii pizza");
            $("#lunchprice").text("Erbjudande! Pris 90 kr");
            $("#lunchprice").css({ 'color': 'red'});
            clicked = 1; 
            
            $("#menuweek").animate({left: '0px'});  
        });
    }

    else {

        $("#menuweek").animate({right: '2000px'}, () => {

            $("#nextweek_button").text("Nästa vecka");
            $("#week").html("Veckans Lunchmatsedel Vecka 8 <br> 10:00 - 13:00");
            $("#monday").text("Panerad fisk");
            $("#tuesday").text("Kyckling med potatisklyftor");
            $("#wednesday").text("Ungsstekt chorizo med potatismos");
            $("#thursday").text("Köttbullar med stuvade makaroner");
            $("#friday").text("Grillad benfri kotlett");
            $("#lunchprice").text("Pris 115 kr");
            $("#lunchprice").css({ 'color': 'black'});
            clicked = 0;

            $("#menuweek").animate({left: '0px'});  
        });
    } 

    setTimeout(function() {
        $('#nextweek_button').removeClass('tada');
      }, 3000);
});
