/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? yes
// When do they need to be reset or updated?
// when the type of service is changed (full or half day), a numbers of days selected and the clear days button is clicked.
var CostPerDay = 35;
var NumberDaysSelected = 0;
var half = document.getElementById("half");
var full = document.getElementById("full");
var ClearButton = document.getElementById("clear-button");
var WorkingDays = [document.getElementById("monday"), document.getElementById("tuesday"), document.getElementById("wednesday"), document.getElementById("thursday"), document.getElementById("friday")];



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function DifferentDays(day){
    // checks if the day button was already clicked
    if (!day.classList.contains("clicked")){
        day.classList.add("clicked");
        NumberDaysSelected += 1;
        calculateCost();
    }
}
// listeners for business days, passes the specific day as the parameter for the function
WorkingDays[0].addEventListener("click", function() {DifferentDays(WorkingDays[0]);});
WorkingDays[1].addEventListener("click", function() {DifferentDays(WorkingDays[1]);});
WorkingDays[2].addEventListener("click", function() {DifferentDays(WorkingDays[2]);});
WorkingDays[3].addEventListener("click", function() {DifferentDays(WorkingDays[3]);});
WorkingDays[4].addEventListener("click", function() {DifferentDays(WorkingDays[4]);});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function resetButtons(){
    // resets all the day buttons in the array
    for (var i = 0; i < WorkingDays.length; i++){  
    WorkingDays[i].classList.remove("clicked");
    }  
    // resets the calculated cost
    NumberDaysSelected = 0;
    calculateCost();
}
ClearButton.addEventListener("click", resetButtons);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function halfDayService(){
    // sets the daily rate and calls a function to recalculate
    CostPerDay = 20;
    calculateCost();
    half.classList.add("clicked");
    full.classList.remove("clicked");
}
half.addEventListener("click", halfDayService);


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function WholeDayService(){
    // sets the daily rate and calls a function to recalculate
    CostPerDay = 35;
    calculateCost();
    full.classList.add("clicked");
    half.classList.remove("clicked");
}
full.addEventListener("click", WholeDayService);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateCost(){
    let finalCost = document.getElementById("calculated-cost");
    // calculates and updates the amount displayed
    finalCost.innerHTML = CostPerDay * NumberDaysSelected;
}
