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
//The whole program is contained in a loop that runs as long as the user continues playing
let keepPlaying = Boolean(true);
while (keepPlaying){
    const altitudes = [50, 5000, 10000];
    console.log("When accelerating up to speed, you have to be conscious of both your Never Exceed Speed and your altitude.")
    console.log("Your Never Exceed Speed is the point at which your aircraft suffers structural failure.")
    console.log("Due to differences in air pressure at altitude, it changes depending on how high you are above sea level.")
    console.log("This program will prompt you for an altitude, and give you the choice to either continue accelerating or hold your current speed.")
    console.log("You will accelerate by .2 mach (mach is the speed of sound at the given altitude) at a time.")
    console.log("Watch out! If you accelerate too much, you'll pass your Never-Exceed Speed.")
    console.log("This simulates the careful balance a pilot must maintain at the edge of what their plane is capable of.")
    console.log("Try to guess how fast you can go at each altitude!")
    let answer = prompt("This program will prompt you for an altitude, and give you the choice to either continue accelerating or hold your current speed.\n\rWatch out! If you accelerate too much, you'll pass your structural limits!\n\rTry to guess how fast you can go at each altitude!\n\rDo you understand? (y/n)")
    while (answer != "y"){
        answer = prompt("This program will prompt you for an altitude, and give you the choice to either continue accelerating or hold your current speed.\n\rWatch out! If you accelerate too much, you'll pass your structural limits!\n\rTry to guess how fast you can go at each altitude!\n\rDo you understand? (y/n)")
    }
    for (let i = 0; i < altitudes.length; i++){
        console.log(i + " : "  + altitudes[i] + "m")
    }
    let alt = Number(prompt("Select an altitude\n\r 0: 50m\n\r1: 5000m\n\r2:10000m"))
    while(isNaN(alt) || alt < 0 || alt > 2){
        alt = prompt("Select an altitude. Please type 0, 1, or 2.")
    }
    let neverExceed;
    if (alt == 0){
        neverExceed = Number(1.1);
    }
    else if (alt == 1){
        neverExceed = Number(1.6);
    }
    else if (alt == 2){
        neverExceed = Number(2);
    }
    let speed = Number(.7);
    let cont = Boolean(true);
    while (cont){
        if (speed > neverExceed){
            console.log("You exceeded your Never Exceed Speed of mach " + neverExceed + " or " + speedConversion(alt, neverExceed) + "kmh by going mach " + speed + " or " + speedConversion(alt, speed) + "kmh")
            cont = Boolean(false);
            break;
        }
        console.log("Your current speed is mach " + speed + " or " + speedConversion(alt, speed) + "kmh");
        let userAnswer = prompt("Your current speed is mach " + speed + " or " + speedConversion(alt, speed) + "kmh\n\rWould you like to accelerate? (y/n)")
        while(userAnswer != "y" && userAnswer != "n"){
            userAnswer = prompt("Please answer y or n.");
        }
        if (userAnswer == "y"){
            speed += .2;
            speed = +speed.toFixed(2);
        }
        else if (userAnswer == "n"){
            cont = Boolean(false);
        }
    }
    console.log("Your final speed was mach " + speed + " or " + speedConversion(alt, speed) + "kmh. Your never-exceed speed at this altitude was mach " + neverExceed + " or " + speedConversion(alt, neverExceed) + "kmh.");
    let playAgain = prompt("Your final speed was mach " + speed + " or " + speedConversion(alt, speed) + "kmh. Your never-exceed speed at this altitude was mach " + neverExceed + " or " + speedConversion(alt, neverExceed) + "kmh.\n\rWould you like to play again? (y/n)")
    while (playAgain != "y" && playAgain != "n"){
        playAgain = prompt("Please answer y or n")
    }
    //If the user wants to play again, the program will loop
    if (playAgain == "y"){
        keepPlaying = Boolean(true);
    }
    //If they dont, the program will break
    else if (playAgain == "n"){
        console.log("Thanks for playing!");
        keepPlaying = Boolean(false);
        break;
    }
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