/*
* Excercise 1
*
*/
let color_block=document.querySelector('#color-block');
color_block.addEventListener('click',changeColor);
const original_color=color_block.style.backgroundColor;
const original_text=color_block.querySelector('p span').textContent;
/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){
    //Write a condition determine what color it should be changed to
    if(color_block.style.backgroundColor==original_color){
        //change the background color using JS
        color_block.style.backgroundColor='#FFE4C4';
        //Change the text of the color using the span id color-name
        color_block.querySelector('p span').textContent='#FFE4C4';
    }
    else{
        //change the background color using JS
        color_block.style.backgroundColor=original_color;
        //Change the text of the color using the span id color-name
        color_block.querySelector('p span').textContent=original_text;
    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/
const btn=document.querySelector('#convertbtn');
btn.addEventListener('click',convertTemp);

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    //Calculate the temperature here
    const temp=document.querySelector('#f-input').value;
    const temp_C=(temp-32)*5/9;
    //Send the calculated temperature to HTML
    document.querySelector('#c-output').textContent=+temp_C.toFixed(3); //round the number to at most 3 digits
}


