function CalculateNetSalary() {
    // Prompt user for basic salary and benefits
    let basicSalary = parseFloat(prompt("Enter your basic salary:"));
    let benefits = parseFloat(prompt("Enter your benefits:"));
}

// Validate inputts
while (isNaN(basicSalary) || basicSalary < 0) {
    basicSalary = parseFloat(prompt("Invalid input. Please enter a valid basic salary:"));
}
while (isNaN(benefits) || benefits < 0) {
    benefits = parseFloat(prompt("Invalid input. Please enter valid benefits:"));
}

// Calculate Gross Salary
let grossSalary = basicSalary + benefits;

// Calculate NSSF (6% of gross salary or a maximum of ksh 1080)
const  NSSF_RATE = 0.06;
let nssfDeduction = grossSalary * NSSF_RATE;
if (nssfDeduction > 1080) {
    nssfDeduction = 1080;
}

// Calculate NHIF based on simplified slabs
let nhifDeduction;
if (grossSalary <= 5999) {
    nhifDeduction = 150;
}else if (grossSalary <= 7999) {
    nhifDeduction = 300;
}else if (grossSalary <= 11999) {
    nhifDeduction = 400;
}else if (grossSalary <= 14999) {
    nhifDeduction = 500;
}else if (grossSalary <= 19999){
    nhifDeduction = 600;
}else if (grossSalary <= 24999) {
    nhifDeduction = 750;
}else if (grossSalary <= 29999) {
    nhifDeduction = 850;
}else if (grossSalary <= 34999) {
    nhifDeduction = 900;
}else if (grossSalary <= 39999) {
    nhifDeduction = 950;
}else if (grossSalary <= 44999) {
    nhifDeduction = 1000
}else if (grossSalary <= 49999) {
    nhifDeduction = 1100;
}else if (grossSalary <= 59999) {
    nhifDeduction = 1200;
}else if (grossSalary <= 69999) {
    nhifDeduction = 1300;
}else if (grossSalary <= 79999) {
    nhifDeduction = 1400;
}else if (grossSalary <= 89999) {
    nhifDeduction = 1500;
}else if (grossSalary <= 99999) {
    nhifDeduction = 1600;
}else{
    nhifDeduction = 1700;
}

// Calculate PAYE based on progressive tax rates
let taxableIncome = grossSalary - nssfDeduction
let payee;
if (taxableIncome <= 24000) {
    payee = taxableIncome * 0.1;
}else if (taxableIncome <= 40667) {
    payee = (24000 * 0.1) + ((taxableIncome - 24000) *0.15);
}else if (taxableIncome <= 57334) {
    payee = (24000 * 0.1) + ((taxableIncome - 40667)* 0.2);
}else {
    payee = (24000 * 0.1) + (16667 * 0.15) + (16667 * 0.2) + ((taxableIncome - 57334) * 0.25);
}

// Calculate Net Salary
let netSalary = grosSalary - nssfDeduction - payee;

// Output the calculations
console.log(`Basic Salary: Ksh ${basicSalary.toFixed(2)}`);
console.log(`Benefits: Ksh ${benefits.toFixed(2)}`);
console.log(`Gross Salary: Ksh ${grossSalary.toFixed(2)}`);
console.log(`NSSF Deduction: Ksh ${nssfDeduction.toFixed(2)}`);
console.log(`NHIF Dedy=uction: Ksh ${nhifDeduction.toFixed(2)}`);
console.log(`PAYE (Tax): Ksh ${payee.toFixed(2)}`);
console.log(`Net Salary: Ksh ${netSalary.toFixed(2)}`);