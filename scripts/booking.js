/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let dailyRate = 35;
let daysSelected = 0;
let totalCost = 0;
let calculatedCostElement;
let dayButtons = [];
let clearButton;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
dayButtons.forEach(function(dayButton) {
    dayButton.addEventListener('click', function() {
        if (dayButton.classList.contains('clicked')) {
            dayButton.classList.remove('clicked');
            daysSelected--;
        } else {
            dayButton.classList.add('clicked');
            daysSelected++; 
        }
        updateDisplay();
    });
});


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clearButton.addEventListener('click', function() {

    dayButtons.forEach(function(dayButton) {
        dayButton.classList.remove('clicked');
    });

    daysSelected = 0;
    totalCost = 0;

    updateDisplay();
});


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
fullDayButton = document.getElementById('full');
halfDayButton = document.getElementById('half');

// Set default to full day
fullDayButton.classList.add('clicked');
dailyRate = fullDayRate;


halfDayButton.addEventListener('click', function() {
    // Switch to half day rate
    dailyRate = halfDayRate;
    
    // Update button states
    halfDayButton.classList.add('clicked');
    fullDayButton.classList.remove('clicked');
    
    // Recalculate total
    updateDisplay();
});

/********* full-day button *********/
fullDayButton.addEventListener('click', function() {
    // Switch to full day rate
    dailyRate = fullDayRate;
    
    // Update button states
    fullDayButton.classList.add('clicked');
    halfDayButton.classList.remove('clicked');
    
    // Recalculate total
    updateDisplay();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


