var domReady = function(callback) {
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};

//Helper function
function setClass(element, classToSet) {
    element.className = classToSet;
}

//Add job to timeout queue. iterationCounter required so that the
//timeouts don't fire at the same time. Used by nav items to slide
//in from the right.
function doSetTimeout(element, classToSet, iterationCounter) {
    window.setTimeout(function() {
        setClass(element, classToSet);
    }, iterationCounter * 100);
}



function animateNavItems(menuItems) {
    for (var i = 0; i < menuItems.length; i++) {
        var currentItem = menuItems.item(i);
        doSetTimeout(currentItem, "fadeInRight", i);      
    }
}

function removeAnimationNavItems(menuItems) {
    for (var i = 0; i < menuItems.length; i++) {
        var currentItem = menuItems.item(i);
        setClass(currentItem, "");     
    }
}


domReady(function(){
    var bLazy = new Blazy();

    var openMenu = document.getElementById("open-menu");
    var closeMenu = document.getElementById("close-menu");
    var menu = document.getElementById("menu");

    var menuItems = menu.getElementsByTagName("li");

    openMenu.addEventListener("click", function(event) {
        menu.className = "container open";
        animateNavItems(menuItems);
    });

    closeMenu.addEventListener("click", function(event) {
        menu.className = "container";
        window.setTimeout(function() {
            removeAnimationNavItems(menuItems);
        }, 300);
    });
});