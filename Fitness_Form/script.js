document.addEventListener("DOMContentLoaded", function () {
    const fitnessForm = document.getElementById("fitness-form");
    const fitnessResults = document.getElementById("fitness-results");
    const nutritionResults = document.getElementById("nutrition-results");

    fitnessForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the default form submission behavior

        // Retrieve user input (height, weight, age, gender)
        const height = parseFloat(document.getElementById("height").value);
        const weight = parseFloat(document.getElementById("weight").value);
        const age = parseInt(document.getElementById("age").value);
        const gender = document.querySelector('input[name="gender"]:checked').value;

        // Initialize variables for fitness and nutrition plans
        let fitnessPlan = "";
        let nutritionPlan = "";

        // Add conditions to generate plans based on user input
        if (age >= 18) {
            fitnessPlan = `For a ${age}-year-old ${gender} weighing ${weight} kg and ${height} cm tall: Do cardio exercises for 30 minutes daily.`;
            nutritionPlan = `Nutrition plan for ${weight} kg weight: Consume balanced meals with adequate protein, carbohydrates, and fats.`;
        } else {
            fitnessPlan = "Sorry, fitness plans are only available for adults (age 18 and above).";
            nutritionPlan = "Sorry, nutrition plans are only available for adults (age 18 and above).";
        }

        // Display the generated plans on the webpage
        fitnessResults.textContent = fitnessPlan;
        nutritionResults.textContent = nutritionPlan;
    });
});
