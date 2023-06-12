let words = document.querySelectorAll(".word");
words.forEach((word)=>{
       let letters = word.textContent.split("");
       word.textContent="";
       letters.forEach((letter)=>{
          let span = document.createElement("span");
          span.textContent=letter;
          span.className="letter";
          word.append(span);
       }); 
});

let currentWordIndex = 0;
let maxWorldIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
    let currentWord = words[currentWordIndex];
    let nextWorld = currentWordIndex===maxWorldIndex?words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className ="letter out";
        },i * 80);
    })

    nextWorld.style.opacity ="1";
    Array.from(nextWorld.children).forEach((letter,i)=>{
        letter.className ="letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        },340 + i *80);
    });

    currentWordIndex = currentWordIndex === maxWorldIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText,3000);

var slides = document.getElementsByClassName('slide');
var prevBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');
var currentSlideIndex = 0;
var slideInterval;


function showSlide() {
  
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  
  slides[currentSlideIndex].style.display = 'block';
}


function nextSlide() {
  currentSlideIndex++;
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }
  showSlide();
}


function prevSlide() {
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }
  showSlide();
}

prevBtn.addEventListener('click', prevSlide);


nextBtn.addEventListener('click', nextSlide);


function startSlideInterval() {
  slideInterval = setInterval(nextSlide, 10000);
}


function stopSlideInterval() {
  clearInterval(slideInterval);
}


showSlide();

startSlideInterval();


prevBtn.addEventListener('mouseenter', stopSlideInterval);
prevBtn.addEventListener('mouseleave', startSlideInterval);
nextBtn.addEventListener('mouseenter', stopSlideInterval);
nextBtn.addEventListener('mouseleave', startSlideInterval);


var userForm = document.getElementById('userForm');
var firstNameInput = document.getElementById('firstName');
var lastNameInput = document.getElementById('lastName');
var emailInput = document.getElementById('email');
var genderInput = document.getElementById('gender');
var mobileInput = document.getElementById('mobile');
var firstNameError = document.getElementById('firstNameError');
var lastNameError = document.getElementById('lastNameError');
var emailError = document.getElementById('emailError');
var genderError = document.getElementById('genderError');
var mobileError = document.getElementById('mobileError');

userForm.addEventListener('submit', function(event) {
  event.preventDefault();

  var isFormValid = true;

  
  firstNameError.textContent = '';
  lastNameError.textContent = '';
  emailError.textContent = '';
  genderError.textContent = '';
  mobileError.textContent = '';

  
  if (!firstNameInput.value) {
    firstNameError.textContent = 'Please enter your first name';
    isFormValid = false;
  }

  
  if (!lastNameInput.value) {
    lastNameError.textContent = 'Please enter your last name';
    isFormValid = false;
  }

  
  if (!emailInput.value) {
    emailError.textContent = 'Please enter your email';
    isFormValid = false;
  } else if (!validateEmail(emailInput.value)) {
    emailError.textContent = 'Please enter a valid email address';
    isFormValid = false;
  }

  
  if (!genderInput.value) {
    genderError.textContent = 'Please select your gender';
    isFormValid = false;
  }

  
  if (!mobileInput.value) {
    mobileError.textContent = 'Please enter your mobile number';
    isFormValid = false;
  } else if (!validateMobile(mobileInput.value)) {
    mobileError.textContent = 'Please enter a valid mobile number';
    isFormValid = false;
  }

  if (isFormValid) {
    
    alert('Form submitted successfully!');
    userForm.reset();
  }
});

function validateEmail(email) {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function validateMobile(mobile) {
  var mobilePattern = /^\d{10}$/;
  return mobilePattern.test(mobile);
}
