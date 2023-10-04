document.getElementById('calculateBtn').addEventListener('click', calculateBMI);
document.getElementById('infoBtn').addEventListener('click', toggleInfo);
document.getElementById('weight-unit').addEventListener('change', updateWeightPlaceholder);
document.getElementById('height-unit').addEventListener('change', updateHeightPlaceholder);

// Initialize unit placeholders
updateWeightPlaceholder();
updateHeightPlaceholder();

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

    document.getElementById('bmiValue').textContent = bmiResult;
    document.getElementById('bmiCategory').textContent = `Category: ${interpretation}`;
    document.getElementById('result').classList.remove('hidden');
}

function toggleInfo() {
    const infoDiv = document.getElementById('info');
    infoDiv.classList.toggle('hidden');
}

function updateWeightPlaceholder() {
    const weightUnit = document.getElementById('weight-unit').value;
    const weightInput = document.getElementById('weight');
    if (weightUnit === 'lbs') {
        weightInput.placeholder = 'Enter your weight in pounds';
    } else {
        weightInput.placeholder = 'Enter your weight in kilograms';
    }
}

function updateHeightPlaceholder() {
    const heightUnit = document.getElementById('height-unit').value;
    const heightInput = document.getElementById('height');
    if (heightUnit === 'inches') {
        heightInput.placeholder = 'Enter your height in inches';
    } else {
        heightInput.placeholder = 'Enter your height in centimeters';
    }
}
