/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let dailyRate = 35; // Default full day rate
let selectedDays = []; // Track which days are selected
const dayElements = {
    monday: document.getElementById('monday'),
    tuesday: document.getElementById('tuesday'),
    wednesday: document.getElementById('wednesday'),
    thursday: document.getElementById('thursday'),
    friday: document.getElementById('friday')
};
const fullDayButton = document.getElementById('full');
const halfDayButton = document.getElementById('half');
const clearButton = document.getElementById('clear-button');
const calculatedCostElement = document.getElementById('calculated-cost');

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

Object.keys(dayElements).forEach(day => {
    dayElements[day].addEventListener('click', function() {
        if (!this.classList.contains('clicked')) {
            this.classList.add('clicked');
            selectedDays.push(day);
        } else {
            this.classList.remove('clicked');
            selectedDays = selectedDays.filter(d => d !== day);
        }
        calculateCost();
    });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener('click', function() {
    // Remove clicked class from all days
    Object.values(dayElements).forEach(day => {
        day.classList.remove('clicked');
    });
    selectedDays = [];
    calculateCost();
});


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfDayButton.addEventListener('click', function() {
    dailyRate = 20;
    this.classList.add('clicked');
    fullDayButton.classList.remove('clicked');
    calculateCost();
});

/********* full-day button *********/
// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullDayButton.addEventListener('click', function() {
    dailyRate = 35;
    this.classList.add('clicked');
    halfDayButton.classList.remove('clicked');
    calculateCost();
});


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateCost() {
    const totalCost = selectedDays.length * dailyRate;
    calculatedCostElement.innerHTML = totalCost;
}