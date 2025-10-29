// html events are things that happen to html elements
// when javascript is used in html pages, javascript can "react" on these events
// common events include: onclick, onmouseover, onmouseout, onload, onchange, onsubmit


// example of an event handler function 
function showMessage() {
    alert("Hello! You clicked the button.");
}
// this function can be called when a button is clicked in the html page

// example of adding an event listener to an element    
document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById("myButton");
    button.addEventListener("click", showMessage);
});


