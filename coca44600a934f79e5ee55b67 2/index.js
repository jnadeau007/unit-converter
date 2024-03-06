/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// Generate all conversions when the user clicks "Convert"
    // length meters to feet | feet to meters
        // ex: 20 meters = 65.616 feet | 20 feet = 6.096 meters
    // Volume (Liters/Gallons)
        // 20 liters = 5.284 gallons | 20 gallons = 75.708 liters
    // Mass (Kilograms/Pounds)
        // 20 kilos = 44.092 pounds | 20 pounds = 9.072
//Round the numbers down to 3 decimal places

// capture input in a variable 
let input = document.getElementById("input-num")
//capture the button in a variable
let convert=document.getElementById("Convert")
// capture the 3 metrics in a variable
let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")
let num_input = 0

convert.addEventListener("click", function(){
   let inputValue = input.value;
    if(isNaN(inputValue) || Number(inputValue) <= 0){
        alert("Enter a numeric value greater than 0");
    } else {
        num_input += Number(inputValue);
        clearMetricsContent(); // Clear existing content
        getLength(num_input);
        getVolume(num_input);
        getMass(num_input);
    }
    num_input = 0
});

//create functions that take in user input and render the following metrics

function getLength(num_input){
    //1 meter = 3.281 feet
    let meter = 3.281
    let meterToFeet = meter * num_input
    let feetToMeter = num_input / meter
    length.innerHTML += `<p>${num_input} meters = ${meterToFeet.toFixed(3)} feet | ${num_input} feet = ${feetToMeter.toFixed(3)} meters </p>`
}

function getVolume(num_input){
    //1 liter = 0.264 gallon
    let liter = 0.264 
    let literToGallon = num_input * liter
    let gallonToLiter = num_input / liter
    // 20 liters = 5.284 gallons | 20 gallons = 75.708 liters
    volume.innerHTML += `<p>${num_input} liters = ${literToGallon.toFixed(3)} gallons | ${num_input} gallons = ${gallonToLiter.toFixed(3)} liters </p>`
}

function getMass(num_input){
    //1 kilogram = 2.204 pound
    let kilo = 2.204 
    let kiloToPounds = 20 * kilo
    let poundsToKilos = 20 / kilo
    /// 20 kilos = 44.092 pounds | 20 pounds = 9.072
    mass.innerHTML += `<p>${num_input} kilos = ${kiloToPounds.toFixed(3)} pounds | ${num_input} pounds = ${poundsToKilos.toFixed(3)} kilos </p>`
}

function clearMetricsContent() {
    length.innerHTML = '<h2>Length (Meter/Feet)</h2>'; // Clear content but keep heading
    volume.innerHTML = '<h2>Volume (Liters/Gallons)</h2>'; // Clear content but keep heading
    mass.innerHTML = '<h2>Mass (Kilograms/Pounds)</h2>'; // Clear content but keep heading
}