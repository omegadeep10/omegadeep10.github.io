
//function that makes navigation sticky
function stickyNav() {
    var nav = document.querySelector(".nav"); //nav bar
    var header = document.querySelector(".header");  //header ("Hi I'm..." part)
    if (window.scrollY < 50) { //check if the page has been scrolled LESS than 50px
        nav.setAttribute("class", "nav"); //make nav class = "nav"
        header.style.marginTop = "150px"; //set header's margin-top to 150px
    }
    else {
        nav.setAttribute("class", "nav fixed"); //set nav class = "nav fixed"
        header.style.marginTop = "240px"; //set header margin-top to 240px so it doesn't jump when the nav element changes to position: fixed
    }
}


//don't do anything JS wise until DOM has been loaded
document.addEventListener("DOMContentLoaded", function() {
    
    document.addEventListener("scroll", stickyNav, false); //add event listener to DOM for scroll

}, false);