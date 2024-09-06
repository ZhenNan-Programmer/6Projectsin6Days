function calculateBMI()
{
    const nameInput = document.getElementById("name");
    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");
    const result = document.getElementById("result");

    const name = nameInput.value;
    const height = heightInput.value;
    const weight = weightInput.value;

    const bmi = weight / height ** 2;

    console.log(name);
    console.log(height);
    console.log(weight);

    result.innerHTML = `${name}, your BMI is ${bmi.toFixed(2)}!`;
}