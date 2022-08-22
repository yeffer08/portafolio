const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.querySelector("#btn-left");
const btnRinght = document.querySelector("#btn-ringht");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next(){
    let sliderSectionFrist = document.querySelectorAll(".slider__section")[0];
    slider.style.marginleft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend',sliderSectionFrist);
        slider.style.marginleft = "-100%";
    }, 500);   
}

function Prev(){
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length-1];
    slider.style.marginleft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin',sliderSectionLast);
        slider.style.marginleft = "-100%";
    }, 500);  
}

btnRinght.addEventListener('click', function(){
    Next();
});

btnLeft.addEventListener('click', function(){
    Prev();
});

