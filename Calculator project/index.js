//calculator program

const display=document.getElementById("display");

function appendToDisplay(input){
    display.value += input; //append the display value with the input and shows to the input text
}

function clearDisplay(){
    display.value=""; //clear the display
}

function calculate(){
    display.value=eval(display.value); //eval(display.value) evaluates the display value
}