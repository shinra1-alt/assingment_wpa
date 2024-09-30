// Get the form and result elements
const bmiForm = document.getElementById('bmi-form');
const bmiResult = document.getElementById('bmi-result');

// Add an event listener to the form
bmiForm.addEventListener('submit', (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Get the weight and height values from the form and ensure they are numbers
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    // Check if both weight and height are valid numbers
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        bmiResult.innerHTML = `<p>Please enter valid positive values for both weight and height.</p>`;
        return;
    }

    // Calculate the BMI
    const bmi = weight / (height * height);

    // Determine the BMI category
    let category;
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi < 25) {
        category = 'Normal weight';
    } else if (bmi < 30) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }

    // Display the result
    bmiResult.innerHTML = `
        <h3>Your BMI is: ${bmi.toFixed(2)}</h3>
        <p>Your BMI category is: ${category}</p>
    `;
});
