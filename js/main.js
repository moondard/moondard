document.querySelector('.close_button').onclick = closeBlock;
function closeBlock () {
    let block = document.querySelector('.page-1__modal-email');
    if (!block) {
        return;
    }
    return block.hidden= !block.hidden;
}
function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
        /*else{
            change.target.classList.remove('element-show');
        }*/
    });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.animation-in');
for (let elm of elements) {
    observer.observe(elm);
}

let sliderImages = document.querySelectorAll(".slider__slide"),
    sliderText = document.querySelectorAll(".slider__item-text"),
    arrowLeft = document.querySelector("#arrow-left"),
    arrowRight = document.querySelector("#arrow-right"),
    current = 0;

function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
        sliderText[i].style.display = "none";
    }
}

function startSlide() {
    reset();
    sliderImages[0].style.display = "block";
    sliderText[0].style.display = "block";
}

function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = "block";
    sliderText[current - 1].style.display = "block";
    current--;
}

function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "block";
    sliderText[current + 1].style.display = "block";
    current++;
}

arrowLeft.addEventListener("click", function () {
    if (current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
});

arrowRight.addEventListener("click", function () {
    if (current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
});

startSlide();

let text = ["Gizmodo", "Interior Design", "Architectural Digest"];
let sliderQuotes = document.querySelectorAll(".quotes-quote")
let elem = document.getElementById("changeText");
const arr = [].slice.call(sliderQuotes);
let counter = 0;
reset_text();
start_text();
let inst = setInterval(change, 4000);
function reset_text() {
    for (let i = 0; i < sliderImages.length; i++) {
        arr[i].style.display = "none";
    }
}
function start_text() {
    arr[2].style.display="block";
}
function change() {
    reset_text();
    elem.innerHTML = text[counter];
    arr[counter].style.display = "block";
    counter++;
    if (counter >= text.length) {
        counter = 0;
    }
}
