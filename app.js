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


// Latest Projects Slider For Mobile
const projectSlides = document.querySelectorAll('.sliderItem');
const slidesLength = projectSlides.length;
const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');
let activeIndex = 0;

function renderSlider() {
	projectSlides.forEach((element, index) => {
    element.style.transform = `translateX(${100 * (index - activeIndex % slidesLength)}%)`;
  })
}

renderSlider();

function nextSlide() {
  if(activeIndex === (slidesLength - 1)){
    activeIndex = 0;
  } else {
    activeIndex = activeIndex + 1;
  }

  renderSlider();
}

function prevSlide() {
  if(activeIndex === 0){
    activeIndex = slidesLength - 1;
  } else {
    activeIndex = activeIndex - 1;
  }

  renderSlider();
}

nextButton.addEventListener('click', (e) => {
  nextSlide();
});
prevButton.addEventListener('click', prevSlide);

let intervalId = null;


// Filter For Latest Projects
filterSelection("all");

function filterSelection(c) {
	let x, i;
	x = document.getElementsByClassName("filterLi");
	if (c == "all") c = "";

	for (i = 0; i < x.length; i++) {
		removeClass(x[i], "show");
		if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
	}
}

function addClass(element, name) {
	let i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {
			element.className += " " + arr2[i];
		}
	}
}

function removeClass(element, name) {
	let i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}
	element.className = arr1.join(" ");
}



// Form Validation
const form = document.querySelector('.mainForm');
const fullName = document.getElementById('fname');
const email = document.getElementById('email');
const website = document.getElementById('website');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const fullNameValue = fullName.value.trim();
	const emailValue = email.value.trim();
	const websiteValue = website.value.trim();
	
	if(fullNameValue === '') {
		setErrorFor(fullName, 'Full name cannot be blank');
	} else {
		setSuccessFor(fullName);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(websiteValue === '') {
		setErrorFor(website, 'URL cannot be blank');
	} else {
		setSuccessFor(website);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.getElementsByClassName('errorMS');
	formControl.className = 'formControl error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'formControl success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// Modal Modifications
const mainModal = document.getElementById('mainModal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeBtn');

openModalBtn.addEventListener('click', openModal);

function openModal() {
  mainModal.style.display = "block";
}

closeModalBtn.addEventListener('click', closeModal);

function closeModal() {
  if(mainModal.style.display == "block") {
    mainModal.style.display = "none";
  } else {
    mainModal.style.display = "block";
  }
}