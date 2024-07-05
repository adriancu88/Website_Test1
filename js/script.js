let imgs = [
    "img/kingfisher-881594_1280.jpg", //0
    "img/ocean-2051760_1280.jpg", //1
    "img/tiger-2535888_1280.jpg"//2
];

let counter = 0;

let changeImg = () => {
    document.querySelector('header.img').src = imgs[counter];
}

document.querySelector('btnRight').addEventListener("click", () => {
    counter++;
    changeImg();
});

document.querySelector('btnLeft').addEventListener("click", () => {
    counter--;
    if(counter < 0) {
        counter = img.lenght-1;
    }
    changeImg();
});