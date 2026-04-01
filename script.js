console.log("Script started");

function start() {
    console.log("Clicked");
    console.log(Math.random() * window.innerWidth);
    createCircle();
}

function createCircle() {
    // Create a div for the circle
    let circle = document.createElement("div");
    
    // Set some text and style
    circle.innerText = "1";
    circle.style.width = "100px";
    circle.style.height= "100px";
    circle.style.backgroundColor = "lightblue";
    circle.style.borderRadius = "50%";
    circle.style.textAlign = "center";
    circle.style.alignContent = "center";
    circle.style.color = "white";
    circle.style.fontSize = "30px"
    // Position circle randomly using absolute
    circle.style.position = "absolute";
    circle.style.left = getRandomX()  + "px";
    circle.style.top = getRandomY() + "px";

    // Add to the page
    document.body.appendChild(circle);
}

function getRandomX() {
    let randX = Math.random() * (window.innerWidt - 100);
    return randX;
}

function getRandomY() {
    let randY = Math.random() * (window.innerHeight - 100);
    return randY;
}