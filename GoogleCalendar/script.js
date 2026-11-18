
const weekdays = new Date().getDay();
const days = document.querySelectorAll('.day');

const monthdays = new Date().getDate();
const values = document.querySelectorAll('.numbers');

const everyDays = document.querySelectorAll('.item');

function findWeekDays() {
    for(let i = 0; i < days.length; i++) {
        if(i == weekdays) {
            days[i].style.color = "#0b57d0";
        }
    }
}
findWeekDays();   



let daysList = [];

values.forEach(day => {
  daysList.push(Number(day.textContent));
});

for(let i = 0; i < daysList.length; i++) {
    if(daysList[i] == monthdays) {
        values[i].style.color = "white";
        values[i].style.backgroundColor = "blue";
    }
}

let secondList = [];

everyDays.forEach(day => {
  secondList.push(Number(day.textContent));
});

for(let i = 0; i < secondList.length; i++) {
    if(secondList[i] == monthdays) {
        everyDays[i].style.color = "white";
        everyDays[i].style.backgroundColor = "blue";
    }
}

// const table = document.querySelector('.main-section');
// const sidebar = document.querySelector('.left-sidebar');
// const btn = document.getElementById("menubtn");
// const createBtn = document.querySelector(".create-btn"); 
// const btnText = document.getElementById("create-btn-text");
// const dropdownIcon = document.getElementById("dropdawn-icon");
// const addIcon = document.getElementById("add-icon");
// const mainsectionHeader = document.querySelectorAll('.week-days');
// const sundayColumn = document.querySelector('.sunday');
// const mondayColumn = document.querySelector('.monday');
// const tuesdayColumn = document.querySelector('.tuesday');
// const wednesdayColumn = document.querySelector('.wednesday');
// const thursdayColumn = document.querySelector('.thursday');
// const fridayColumn = document.querySelector('.friday');

// btn.addEventListener("click",() =>{
//     btn.classList.remove('sidebar');
//     sidebar.remove();
//     btnText.remove();
//     dropdownIcon.remove();
//     createBtn.style.width = '56px';
//     createBtn.style.height = '56px';
//     addIcon.style.marginRight = '8px';
//     table.style.width = '1315px';
//     mainsectionHeader.style.width = '1315px';
//     sundayColumn.style.width = '198.8px';
//     mondayColumn.style.width = '198.8px';
//     tuesdayColumn.style.width = '198.8px';
//     wednesdayColumn.style.width = '198.8px';
//     thursdayColumn.style.width = '198.8px';
//     fridayColumn.style.width = '198.8px';

// });
// btn.addEventListener("click",() =>{
//     btn.classList.add('sidebar');
//     sidebar.add();
//     btnText.add();
// });


