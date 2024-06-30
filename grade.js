function gradeCalculator() {
    // Prompt the user to input student marks
    let marks = pardeInt(propmt("Enter student marks (0-100):"),10);

    // Validate the input
    while (isNaN(marks) || marks < 0 || marks > 100) {
        marks = paraeInt(prompt("Invlid input. Please enter a number between 0 and 100:"),10);
    }

    // Determine the grade
    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 50) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    // Output the grade
    alert(`The grade for marks ${marks} is: ${grade}`)
}