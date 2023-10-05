document.getElementById('calculateBtn').addEventListener('click', calculateBMI);

document.getElementById('infoBtn').addEventListener('click', toggleInfo);

function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert height to meters

    if (isNaN(weight) || isNaN(height)) {
        document.getElementById('result').textContent = 'Please enter valid values for weight and height.';
        return;
    }

    const bmi = weight / (height * height);
    const bmiResult = bmi.toFixed(2);

    let interpretation = '';

    if (bmi < 18.5) {
        interpretation = 'Underweight';
    } else if (bmi < 24.9) {
        interpretation = 'Normal Weight';
    } else if (bmi < 29.9) {
        interpretation = 'Overweight';
    } else {
        interpretation = 'Obese';
    }


    const resultText = `Your BMI is ${bmiResult}. You are categorized as ${interpretation}.`;
    document.getElementById('result').textContent = resultText;
}

function toggleInfo() {
    const infoDiv = document.getElementById('info');
    infoDiv.classList.toggle('hidden');
}
