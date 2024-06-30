function checkSpeed() {
    // prompt the user to enter the speed of the car
    let speed = pardeFloat(prompt("Enter the speed of the car (in km/h):"));

// Validate the input
while (isNaN(speed) || speed < 0) {
    speed = parseFloat(prompt("Invalid input. Please enter a positive number for the speed;"))
}


// Define the speed limit and demerits point criteria
const speedLimit = 70;
const kmPerDemeritPoint = 5;

if (speed <= speedLimit) {
    console.log("ok");
} else {
    // Calculate demerits points
    let demerits = Matk.floor((speed - speedLimit)/ kmPerDemeritPoint);
    console.log(`Demerit points: ${demeritPoint}`);
  }
}
