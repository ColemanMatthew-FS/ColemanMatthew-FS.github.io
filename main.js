//Declare a boolean to control the primary while loop containing the program, name it keepPlaying
//While that boolean is true...
//declare an array of altitudes
//Print introductory text to the console
//use a for loop to print the array
//declare a number based on the user's answer to the prompt "Select an altitude", call it alt
//declare a variable for the never exceed speed of the aircraft, depending on the altitude
//use 3 if loops to define the never exceed speed based on our alt variable
//declare a speed variable
//declare a continue variable, called cont, to control the loop containing the plane's acceleration
//while cont is true
//if speed is higher than neverExceed, set cont to false and break the loop
//otherwise, print the current speed in mach and kmh
//prompt the user to continue
//if they answer y, add .2 to the plane's speed
//otherwise, set cont to false
//print the final speed
//Declare a boolean named playAgain based on the prompt "Play again?"
//if the user answers 'y', keepPlaying is set to true again
//if the user answers 'n', print "thanks for playing!", set keepPlaying to false, and break the loop
//create a function called speedConv, have it take in two arguments, alt and speed
//declare a variable named speedS for the speed of sound
//using if statements, define the speed of sound based on the alt parameter
//declare speedK for the speed in kmh
//define speedK as speed * speedS
//return speedK
const altitudes = [50, 5000, 10000];
console.log("When accelerating up to speed, you have to be conscious of both your Never Exceed Speed and your altitude.")
console.log("Your Never Exceed Speed is the point at which your aircraft suffers structural failure.")
console.log("Due to differences in air pressure at altitude, it changes depending on how high you are above sea level.")
console.log("This program will prompt you for an altitude, and give you the choice to either continue accelerating or hold your current speed.")
console.log("You will accelerate by .2 mach (mach is the speed of sound at the given altitude) at a time.")
console.log("Watch out! If you accelerate too much, you'll pass your Never-Exceed Speed.")
console.log("This simulates the careful balance a pilot must maintain at the edge of what their plane is capable of.")
console.log("Try to guess how fast you can go at each altitude!")
let neverExceed;
let button1 = document.getElementById("myButton1")
let button2 = document.getElementById('myButton2')
let button3 = document.getElementById('myButton3')
let alt = Number(0)
let currentAlt = document.getElementById('currentAlt')
button1.onclick = button1Pressed
//Next 3 functions set a few variables and attributes depending on which button is pressed
function button1Pressed(){
    alt = Number(0)
    neverExceed = Number(1.1)
    currentAlt.innerText = "50m"
    button1.disabled = true
    button2.disabled = true
    button3.disabled = true
    inputButton.style.display="block"
}
button2.onclick = button2Pressed
function button2Pressed(){
    alt = Number(1)
    neverExceed = Number(1.6)
    currentAlt.innerText = "5000m"
    button1.disabled = true
    button2.disabled = true
    button3.disabled = true
    inputButton.style.display="block"
}
button3.onclick = button3Pressed
function button3Pressed(){
    alt = Number(2)
    neverExceed = Number(2)
    currentAlt.innerText = "10000m"
    button1.disabled = true
    button2.disabled = true
    button3.disabled = true
    inputButton.style.display="block"
}
button1.innerHTML = altitudes[0].toString()
button2.innerHTML = altitudes[1].toString()
button3.innerHTML = altitudes[2].toString()
let statusUpdate = document.getElementById('statusUpdate')
let button4 = document.getElementById('myButton4')
button4.style.display="none"
let button5 = document.getElementById('myButton5')
button5.style.display="none"
let inputButton = document.getElementById('inputButton')
inputButton.style.display="none"
inputButton.onclick = inputButtonPressed
let speed
//this code runs when the user selects their starting speed
function inputButtonPressed(){
    if (Number(document.getElementById('userInput').value) < .3 || Number(document.getElementById('userInput').value) > .9) {
        statusUpdate.innerText = ("Please enter a speed between mach .3 and mach .9")
        return
    }
    speed = Number(document.getElementById('userInput').value)
    console.log(speed)
    statusUpdate.innerText = ("Your current speed is mach " + speed + " or " + speedConversion(alt, speed) + "kmh. Do you want to accelerate?")
    inputButton.disabled = true
    //the yes and no buttons appear
    button4.style.display="block"
    button5.style.display="block"
}
//this runs when the user decides to accelerate
button4.onclick = button4Press
function button4Press(){
    speed += .2;
    speed = +speed.toFixed(2);
    statusUpdate.innerText = ("Your current speed is mach " + speed + " or " + speedConversion(alt, speed) + "kmh. Do you want to accelerate?")
    if (speed > neverExceed) {
        statusFinal.innerText = ("Uh oh! You exceeded your never exceed speed of mach " + neverExceed + " or " + speedConversion(alt, neverExceed) + "kmh by going mach " + speed + " or " + speedConversion(alt, speed) + "kmh\n\rWould you like to play again? (y/n)")
        button4.disabled = true
        button5.disabled = true
        button6.style.display="block"
        button7.style.display="block"
    }
}
button5.onclick = button5Press
let statusFinal = document.getElementById('statusFinal')
//this runs if the user decides not to accelerate
function button5Press(){
    statusFinal.innerText = ("Well done! Your final speed was mach " + speed + " or " + speedConversion(alt, speed) + "kmh. Your never exceed speed at this altitude was mach " + neverExceed + " or " + speedConversion(alt, neverExceed) + "kmh.\n\rWould you like to play again?")
    button4.disabled = true
    button5.disabled = true
    button6.style.display="block"
    button7.style.display="block"
}
//if the user decides to play again, the page is reloaded
let button6 = document.getElementById("myButton6")
button6.style.display="none"
button6.onclick = button6Press
function button6Press(){
    location.reload()
}
//if the user decides not to play again, the last buttons become unavailable and they get a thanks for playing message
let button7 = document.getElementById('myButton7')
button7.style.display="none"
button7.onclick = button7Press
function button7Press(){
    button6.disabled = true
    button7.disabled = true
    let thanksMessage = document.querySelector('#thanksMessage')
    thanksMessage.innerHTML = "Thanks for playing!"
}


//This is the function that converts speed
function speedConversion(alt, speed){
    let speedS;
    if (alt == 0){
        speedS = Number(1225);
    }
    if (alt == 1){
        speedS = Number(1160);
    }
    if (alt == 2){
        speedS = Number(1063);
    }
    let speedK = speed * speedS;
    speedK = +speedK.toFixed(0);
    return speedK;
}