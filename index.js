/* set starting values for day, month, year
(1/2 way between min and max values for ease of use);
*/
let day = 15;
let month = 6;
let year = 1970;

// set current year; 
let maxYear = new Date().getFullYear();

// store buttons into variables for later;
const minus = document.querySelectorAll('.btn');
const minusTwo = document.querySelectorAll('.btn2');
const minusThree = document.querySelectorAll('.btn3');

const plus = document.querySelectorAll('.plus');

// store text content of day, month, year into variables for later;
let currentDay = document.querySelector('.day');
let currentMonth = document.querySelector('.month');
let currentYear = document.querySelector('.year');

// create a function to change day, month, year when - or + clicked;

minus.forEach(
    function(minuses){
        minuses.addEventListener('click', function(e){
            const styles = e.currentTarget.classList;
            if(styles.contains('minus') && day > 1){
                day--;
            }if(styles.contains('plus') && day < 31){
                day++;
            }
            currentDay.textContent = day;
        })
    }
)

maxLived = maxYear - 122;

minusTwo.forEach(
    function(minuses){
        minuses.addEventListener('click', function(e){
            const styles = e.currentTarget.classList;
            if(styles.contains('minus2') && month > 1){
                month--;
            }if(styles.contains('plus2') && month < 12){
                month++;
            }
            currentMonth.textContent = month;
        })
    }
)

minusThree.forEach(
    function(minuses){
        minuses.addEventListener('click', function(e){
            const styles = e.currentTarget.classList;
            if(styles.contains('minus3') && year > maxLived){
                year--;
            }if(styles.contains('plus3') && year < maxYear){
                year++;
            }
            currentYear.textContent = year;
        })
    }
)

// 2022 = maxYear;
let yourAge = document.querySelector('.yourAge');

// current month;
const newMonth = new Date();
let thisMonth = newMonth.getMonth(); // note jan = 0; dec = 11;
let thisMonthIs = thisMonth + 1; // sets to standard months; jan = 1; dec = 12;

// max year - birth year = birth year (approx.);
let yourYear = document.querySelector('.year').textContent;
let yearNOW = maxYear - yourYear;

// current date;
const newDay = new Date();
let thisDay = newDay.getDate();
console.log(thisDay);

function submitting(){
    if(year === maxYear){
        yourAge.textContent = "Aw a Baby! You are Aged " + (maxYear - maxYear) + ".";
    }else if(currentMonth.textContent > thisMonthIs){
        yourAge.textContent = "You are the ripe old age of " + (maxYear - currentYear.textContent - 1) + "!";
        console.log(yearNOW);
    }else if(currentMonth.textContent < thisMonthIs){
        yourAge.textContent = "You are the ripe old age of " + (maxYear - currentYear.textContent) + "!";
    }else if(currentMonth.textContent == thisMonthIs && currentDay.textContent <= thisDay){
        yourAge.textContent = "You are aged " + (maxYear - currentYear.textContent) + ".";
    }else if(currentMonth.textContent == thisMonthIs && currentDay.textContent > thisDay){
        yourAge.textContent = "You are aged " + (maxYear - currentYear.textContent - 1) + ".";
    }
}