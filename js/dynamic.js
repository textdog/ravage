// JS file for dynamic info.

const date = new Date();
const showYear = document.getElementsByClassName("show-year");
const showDates = document.getElementById("show-dates");

for (let i = 0; i < showYear.length; i++)
{
    showYear[i].innerHTML = date.getFullYear();
}
