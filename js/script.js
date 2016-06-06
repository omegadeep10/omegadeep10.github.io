var domReady = function(callback) {
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};


//debounce - Underscore.js via David Walsh 2014 (https://davidwalsh.name/javascript-debounce-function)
function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

//Helper function
function setClass(element, classToSet) {
    element.className = classToSet;
}

//Add job to timeout queue. multiplier required so that the
//timeouts don't fire at the same time (because subsequent 
//timeouts will require more time). Used by nav items to slide
//in from the right.
function doSetTimeout(element, classToSet, multiplier) {
    window.setTimeout(function() {
        setClass(element, classToSet);
    }, multiplier * 100);
}


//animates nav items sliding in. menuItems is an HTMLcollection.
function animateNavItems(menuItems) {
    for (var i = 0; i < menuItems.length; i++) {
        var currentItem = menuItems.item(i);
        //each nav item takes more time before it animates in.
        doSetTimeout(currentItem, "fadeInRight", i+1);      
    }
}

//simply resets nav item to before animation state
function removeAnimationNavItems(menuItems) {
    for (var i = 0; i < menuItems.length; i++) {
        var currentItem = menuItems.item(i);
        setClass(currentItem, "");     
    }
}


domReady(function(){
    //initialize lazy-loader
    var bLazy = new Blazy();

    //grab navigaton elements
    var openMenu = document.getElementById("open-menu"); //hamburger button
    var closeMenu = document.getElementById("close-menu"); //"X" close button
    var menu = document.getElementById("menu"); //menu
    var menuItems = menu.getElementsByTagName("li"); //individual menu items


    openMenu.addEventListener("click", function(event) {
        //first, make menu visible
        menu.style.display = "block";

        //then, make container open and animate nav items sliding in
        window.setTimeout(function() {
            menu.className = "container open";
            animateNavItems(menuItems);
        }, 100);
    });

    closeMenu.addEventListener("click", function(event) {
        //close container
        menu.className = "container";

        //remove animations from navItems AFTER container is closed
        //so user doesn't see abrupt change in opacity
        window.setTimeout(function() {
            removeAnimationNavItems(menuItems);
        }, 300);

        //hide menu so it doesn't take up space offscreen
        window.setTimeout(function() {
            menu.style.display = "none";
        }, 300);
    });


    //required to fix bug where mobile menu hides nav offscreen using
    //display:none, but the nav doesn't come back if the user resizes
    //the screen
    window.onresize = debounce(function() {
        if (window.outerWidth >= 900) {
            if (menu.style.display = "none") {
                menu.style.display = "block";
            }
        }
    }, 250)



    //animate project entries
    var projects = document.getElementsByClassName("project");
    for (var i = 0; i < projects.length; i++) {
        doSetTimeout(projects[i], "project fadeInBottom", i+3);
    }

    //animate project entries
    var articles = document.getElementsByClassName("article-link");
    for (var i = 0; i < articles.length; i++) {
        doSetTimeout(articles[i], "article-link fadeInBottom", i+3);
    }

});