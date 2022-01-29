// create a div element
var div = document.createElement("div");
// add an h1 and an input inside of it
div.innerHTML = "<h1>Hello World</h1># <input type='text' id='input'/>";
// add the div to the body
document.body.appendChild(div);

// center the div
div.style.position = "absolute";
div.style.left = "50%";
div.style.top = "50%";
div.style.transform = "translate(-50%, -50%)";

// add an input event listener to the input
document.getElementById("input").addEventListener("input", function(e) {
    // store the input value inside of a variable
    var input = "#" + e.target.value;
    // check if the input value is a color
    if (input.match(/^#[0-9a-f]{6}$/i)) {
        // if it is, set the background color to the input value
        document.body.style.backgroundColor = input;
        // and set the h1 to a new color
        document.getElementsByTagName("h1")[0].style.color = getContrastingColor(input);
    } else {
        document.body.style.backgroundColor = "white";
        // and set the h1 to black
        document.getElementsByTagName("h1")[0].style.color = "black";
    }
})

// takes a hex color and returns the color that is the opposite on the color wheel
function getContrastingColor(hex) {
    // convert the hex color to rgb
    var rgb = hexToRgb(hex);
    // determine if the color is light or dark
    var isLight = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000 > 125;
    // return the opposite color
    return isLight ? "#000000" : "#ffffff";
}

function hexToRgb(hex) {
    // convert a hex color to rgb
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    // return result as rgb parse int
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        // return b parseint
        b: parseInt(result[3], 16)
    } : null;   
}

// create a footer
var footer = document.createElement("footer");
// add a p element with the text "Created by: "
footer.innerHTML = "<p>Created by: Cant Code. <a href='https://cantcode023.github.io/FollowCantCode' target='_blank'>Visit Website</a></p>";
// set footer position at the bottom
footer.style.position = "absolute";
footer.style.bottom = "0";
// from p element get a element
footer.getElementsByTagName("p")[0].getElementsByTagName("a")[0].style.color ="blue"
// center the footer
footer.style.left = "50%";
footer.style.transform = "translate(-50%, 0)";
// set footer background to gray
footer.style.backgroundColor = "#cccccc";
// set footer width to fit screen
footer.style.width = "100%";
// set footer text to center
footer.style.textAlign = "center";
// set footer to fixed
footer.style.position = "fixed";
// hide body overflow
document.body.style.overflow = "hidden";
// add the footer to the body
document.body.appendChild(footer);