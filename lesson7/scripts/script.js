<<<<<<< HEAD
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
=======

const imagesToload = document.querySelectorAll("img[data-src]");

const imaOptions = {
    threshold : 0,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (images) => {
    images.setAtribute("src", image.getAtribute("data-src"));
    images.onload = () => {images.removeAtribute("data.src");};
};

if ('intersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, Observer) => {
        items.forEach((img) =>{   
        });
    }, imgOption); 
}

imagesToload.forEach((img) => {
    imgObserver.observer(img);
});

else {// images not supported
    imagesToload.forEach((img) => {
        loadImages(img);
    });
}
>>>>>>> d88900ff0a119a3c2aee9e6eb8ccfbe06b24cf23
