const bars = document.querySelector(".bars");
const navMenu = document.querySelector(".nav-menu");


bars.addEventListener("click",() =>{
    bars.classList.toggle("active");
    navMenu.classList.toggle("active");

});

document.querySelectorAll(".nav-link").forEach(n => 
    n.addEventListener("click", () => {
        bars.classList.remove("active");
        navMenu.classList.remove("active");
    }));

//image-slider

const buttons = document.querySelectorAll("[data-slider-button]");
buttons.forEach(button =>{
    button.addEventListener("click",() =>{
        const num = button.dataset.sliderButton === "next" ? 1 : -1;
        const slides = button.closest("[data-image-slider]").querySelector("[data-slides]");  
        console.log("Hello world!");
        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + num;
        // vraca obicne html elemente <li> i u array-u su
        if(newIndex < 0) newIndex=slides.children.length-1 //bice indeks od zadnjeg elementa
        if(newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active=true; //nova vrednost data-active
        delete activeSlide.dataset.active //brise staru
     })
});

//Form validation

const form = document.getElementById("theForm");
const ime = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("message");


theForm.addEventListener("submit", (e) => {
    if(ime.value != '' && email.value != '' && password.value != '' && message.value != ''){
    e.preventDefault();
    alert("Uspešna prijava!");
    }
});




