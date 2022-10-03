
//alert wrapped in a function
function helloWorld() {
    alert("Hello, world!");
}

//alert pops up when clicked on "Bigger" button
function biggerButton(){
    helloWorld();
    document.getElementById("text").style.fontSize = "24pt";
}

//updates the style of text,etc. when clicked on "FancyShmancy"
function update(){
    if(document.getElementById("select").checked){
        helloWorld();
        document.getElementById("text").style.fontWeight = "bold";
        document.getElementById("text").style.color = "blue";
        document.getElementById("text").style.textDecoration = "underline";
    }
    else{
       //goes back to normal when clicked on "BoringBetty"
        document.getElementById("text").style.fontWeight = "normal";
        document.getElementById("text").style.color = "black";
        document.getElementById("text").style.textDecoration = "none";
    }
}

//uppercases the text when clicked on "Moo" and adds suffix to last word of sentence
function moo(){
    var text = document.getElementById("text");
    var upper = text.value.toUpperCase();
    text.value = upper;
    var end = text.value.split(".");
    text.value = end.join("-Moo"); 
}
