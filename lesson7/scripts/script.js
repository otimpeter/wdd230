
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