var slideIndex = 1;


function switchSlide(n) {
    showSlide(slideIndex += n);
}


function currentSlide(n) {
    showSlide(slideIndex = n);
}


function showSlide(n) {

    var slidesArray
        = document.getElementsByClassName('slides');
    var dotsArray
        = document.getElementsByClassName('myDot');

    
    if (n > slidesArray.length) {
        slideIndex = 1;
    }

   
    if (n < 1) {
        slideIndex = slidesArray.length;
    }

  
    for (var i = 0; i < slidesArray.length; i++) {
        slidesArray[i].className
        = slidesArray[i].className.replace(" fadeImage", "");
    }
   
   

    slidesArray[slideIndex-1].className += " fadeImage";


    
    for (var i = 0; i < dotsArray.length; i++) {
        dotsArray[i].className = dotsArray[i].className.replace(" dot-filled", "");
    }

    dotsArray[slideIndex-1].className += " dot-filled";
}
