// Main Slider
let slides = [
  "img/2.jpg",
  "img/3.jpg"
]

let counter = 1;
let time = 5000;

function changeImg(){
  let myslide = document.querySelector(".sliderArea img");
  myslide.src = slides[counter];

  if(counter < slides.length - 1){
    counter++; 
  } else { 
      counter = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload=changeImg;


// Progress Bars
const skillsSection = document.querySelector(".statProgression");
const progressBars = document.querySelectorAll(".progressBar");

function displayProgress() {
	progressBars.forEach(progressBar => {
		const value = progressBar.dataset.progress;
		progressBar.style.opacity = 1;
		progressBar.style.width = `${value}%`;

	});
}

function hideProgress() {
	progressBars.forEach(p => {
		p.style.opacity = 0;
		p.style.width = 0;
	});
}

window.addEventListener("scroll", () => {
	const sectionPos = skillsSection.getBoundingClientRect().top;
	const screenPos = window.innerHeight / 2;

	if (sectionPos < screenPos) {
		displayProgress();
	} else {
		hideProgress();
	}
})


// Recommendation Slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("recomSliderItem");
	let dots = document.getElementsByClassName("sliderController");
	if (n > slides.length) { slideIndex = 1 }
	if (n < 1) { slideIndex = slides.length }
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "flex";
	dots[slideIndex - 1].className += " active";
}