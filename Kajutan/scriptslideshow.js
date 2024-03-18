/*Slide show*/
let index = 0;
slideshowImages();

function slideshowImages() {
  
    let i;
    const images = document.getElementsByClassName("image");
    
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }

    index++;
    
    if (index > images.length) {
        index = 1;
    }

    images[index-1].style.display = "block";

    // 10 sec timer 
    setTimeout(slideshowImages, 10000); 
}