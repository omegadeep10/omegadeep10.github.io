var domReady = function(callback) {
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//StackOverflow User Tokimon - Checks if element is visible.
//Modified slightly (300 instead of 0)
function checkVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top - viewHeight >= -200);
}


domReady(function(){
    function randomizeData() {
        var graphItems = document.getElementsByClassName("graph-item");
        var changeInterval = getRandomInt(10, 60);
        
        //loop through each graph-item and change it randomly
        for (var i = 0; i < graphItems.length; ++i) {
            var currentItem = graphItems[i];
            var height = parseInt(currentItem.style.height, 10);

            //if height greater than maximum allowable height, 50% chance height will decrease
            if (height > 300 && getRandomInt(1, 100) > 50) {
                currentItem.style.height = (height-changeInterval).toString() + "px";
            }

            //if height less than minimum height, 50% chance height will increase
            else if (height < 70 && getRandomInt(1, 100) > 50) {
                currentItem.style.height = (height+changeInterval).toString() + "px";
            }

            //if height between min & max, height increases or decreases randomly
            else if (height >= 70 || height <= 300) {
                currentItem.style.height = getRandomInt(height-changeInterval, height+changeInterval).toString() + "px";
            } 
        }
    }

    //get the graph-item container element
    var graphs = (document.getElementsByClassName("graphs"))[0];
    //only randomize data is graph is visible (better performance on mobile devices)
    if (window.getComputedStyle(graphs, null).getPropertyValue("display") !== "none") {
        window.setInterval(randomizeData, 3000);
    }

    var descriptions = document.getElementsByClassName("description");
    window.onscroll = function() {
        for (var i = 0; i < descriptions.length; i++) {
            if (checkVisible(descriptions[i])) {
                if (descriptions[i].className !== "description fadeInRight") {
                    descriptions[i].className = "description fadeInRight";
                }
            }
        }
    }
});