Quick switch to gate view

https://opssuitemain.swacorp.com/gate-schedule/DEN/10292021

Grab optimizer button and switch class to enabled.AND
ocl-button ocl-button--primary enabled active disabled

// let nextSibling = currentNode.nextElementSibling;


let lateArrivalTime = document.getElementsByClassName("turn-schedule__flight-time-estimated late");
let scheduledArrivalTime = document.getElementsByClassName("turn-schedule__flight-time-scheduled late");
let flightData = document.querySelector('.turn-schedule__flight-number');
let prevSiblings = flightData.previousElementSibling;
function getLateFlights() {
    for (i = 0; i < lateArrivalTime.length; i++) {
        // console.log(`This flight is LATE: FLT#` ${})
        console.log(`Late Arrival Time ${lateArrivalTime[i].innerHTML} is late`);
        console.log(prevSiblings)
        console.log(`Original Scheduled Arrival Time: ${scheduledArrivalTime[i].innerHTML}`);
        
        // Do math here to detect how many minutes late it is.
    }
}

// Run Connection Flight search function
getLateFlights()

// Put a button in here to "Get Late Inbound Flights"


//Do arrival time math
let howManyMinutesLate = x - y


data-id turn-schedule__row turn-schedule__row--future
turn-schedule__row turn-schedule__row--future
turn-schedule__row-cell-group turn-schedule__column-arrival
turn-schedule__row-cell turn-schedule__column__flight turn-schedule__flight turn-schedule__flight--arrival
turn-schedule__flight-time-scheduled late
("turn-schedule__flight-number");

Acknowledge Buttons



I know this is an old question, but I figured I'd add a jQuery free alternate solution :)

I tried to keep the code simple by avoiding traversing the DOM.

let inputArray = document.querySelectorAll(".calender");

function nextInput(currentInput, inputClass) {
    for (i = 0; i < inputArray.length - 1; i++) {
        if(currentInput == inputArray[i]) {
            for (j = 1; j < inputArray.length - i; j++) {
                //Check if the next element exists and if it has the desired class
                if(inputArray[i + j] && (inputArray[i + j].className == inputClass)) {
                    return inputArray[i + j];
                    break;
                }
            }
        }
    }   
}

let currentInput = document.getElementById('from-date1');

console.log(nextInput(currentInput, 'to-date calender'));
If you know that the to date will always be the next input element with a class of "calender", then you don't need the second loop.

Using Query selectorAll to get multiple classes


AND (both classes)

var list = document.getElementsByClassName("class1 class2");
var list = document.querySelectorAll(".class1.class2");
OR (at least one class)

var list = document.querySelectorAll(".class1,.class2");
XOR (one class but not the other)

var list = document.querySelectorAll(".class1:not(.class2),.class2:not(.class1)");
NAND (not both classes)

var list = document.querySelectorAll(":not(.class1),:not(.class2)");
NOR (not any of the two classes)

var list = document.querySelectorAll(":not(.class1):not(.class2)");




Settings
https://opssuitemain.swacorp.com/settings


class
ui button bVKau3WAPVrQZq8nMv3Xe
// Code to click through all the acknowledge buttons

// WORKING CODE TO DISMISS ACKNOWLEDGE BUTTON
let buttonToBeClicked = document.getElementsByClassName("ui button bVKau3WAPVrQZq8nMv3Xe")
function dismissButton() {
    for (i = 0; i < buttonToBeClicked.length;i++) {
        buttonToBeClicked[0].click()
        console.log("Button Acknowledged")
    }
}
dismissButton();

its called copy revision icon swa edit VXGbglSmNw3_oRH5RwWto
icon swa edit

