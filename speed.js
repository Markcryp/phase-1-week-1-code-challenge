function speedDetector() {
    // Prompt user to enter car speed and convert input to integer
     let speed = prompt("Enter car speed:");
     speed = parseInt(speed);
     // Validate input: check if speed is a valid number and non-negative
     if (isNaN(speed) || speed < 0) {
       console.error("Invalid input. Please enter a valid numeric speed.");
       return;
   }
    // Check if speed is within limit
     if (speed < 70) {
       console.log("Ok");
     } else {
       // Calculate demerit points for exceeding the speed limit
       let demeritPoints = Math.floor((speed - 70) / 5);
       if (demeritPoints > 12) {   // Check if points exceed limit
         console.log("License suspended");
       } else {
         console.log("Points: " + demeritPoints);
       }
     }
   }
   // Call the speed detector function
   speedDetector();