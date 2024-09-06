function calculateBMI()
{
    firstName = prompt("What is your name? Sir!");
    weight = prompt("What about your weight?");
    height = prompt("How about your height?");
    bmi = weight / height ** 2;

    console.log(firstName);
    console.log(weight);
    console.log(height);

    alert("Hi," + firstName + ", your BMI is " + bmi.toFixed(2) + "!");
}




