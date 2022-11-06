
let daynames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
"Friday", "Saturday"];
let months = ["January", "Febuary", "March", "April", "May", "June",
"July", "August", "September", "October", "Novermber", "December"];
let d = new Date();
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let fulldate = dayName + "," + monthName + " " + d.getDate() + "," + d.getFullYear();

document.getElementById("currentdate"), textContent = fulldate;

try {
    let options = {
        weekday: "long", 
        day: "muemeric",
        month: "long",
        year: "numeric"
    }
    document.getElementById(
        "currentdate2"
        ).textContent = new Date().toLocaleDateString("en-US", Option);
     } catch (e) {
        alert("error with code or your broweswer does not support locale");
     };