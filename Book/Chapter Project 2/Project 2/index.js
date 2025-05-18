let inches = prompt(`Enter your height in inches: `);
let pounds = prompt(`Enter your weight in pounds: `);
let kilograms = pounds / 2.2046;
let cm = inches * 2.54;
let m = cm / 100;
let bmi = (kilograms) / (m ** 2);
console.log(`Your BMI is: ${bmi.toFixed(2)}`);

if (bmi < 18.5) {
    console.log(`You are underweight.`);
}
else if(bmi >= 18.5 && bmi <= 24.9){
    console.log(`You are Normal weight.`);
}
else if(bmi >= 25.0 && bmi <= 29.9){
    console.log(`You are overweight.`);
}
else if(bmi >= 30.0 && bmi <= 34.9){
    console.log(`You belong to obestiy class I.`);
}
else if(bmi >= 35.0 && bmi <= 39.9){
    console.log(`You belong to obesity class II.`);
}
else{
    console.log(`You belong to obesity class III.`);
};