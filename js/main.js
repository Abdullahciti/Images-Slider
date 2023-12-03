// Get Slider Items | Array.form [ES6 Feature]
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// Get Number Of Slides
var slidesCount = sliderImages.length;

// Set Current Slide
var currentSlide = 1;

// Slide Number Element
var slideNumberElement = document.getElementById('slide-number');

// Previous and Next Buttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

// Handle Click on Previous and Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create The Main UL Element
var paginationElement = document.createElement('ul');

// Set ID On Created Ul Element
paginationElement.setAttribute('id', 'pagination-ul');

var randomIndex = Math.floor(Math.random() * sliderImages.length);

// Create List Items Based On Slides Count
for (var i = 1; i <= slidesCount; i++) {

  // Create The LI
  var paginationItem = document.createElement('li');

  // Set Custom Attribute
  paginationItem.setAttribute('data-index', i);

  // Set Item Content
  paginationItem.appendChild(document.createTextNode(i));

  // Append Items to The Main Ul List
  paginationElement.appendChild(paginationItem);

}

// Add The Created UL Element to The Page
document.getElementById('indicators').appendChild(paginationElement);

var paginationCreatedUl = document.getElementById("pagination-ul") 

// Get Slider Items | Array.form [ES6 Feature]
var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

paginationBullets.forEach((bullet) => {
    bullet.addEventListener("click", (e) =>{
        paginationBullets.forEach((e) => {
            e.classList.remove("active")
        })
        e.currentTarget.classList.add("active");
        randomIndex = parseInt(e.target.textContent) - 1
        theJoker()
    })
})

// Triger function
theJoker()


// Functions
// Next
function nextSlide(){
    if (nextButton.classList.contains("disabled")){
        // nothing
        return false
    }
    else{
        randomIndex++
        theJoker()
    }
}
// Previous
function prevSlide(){
    randomIndex--
    theJoker()
}
// Checker
function theJoker () {
    // Random Number of Pic
    // var randomIndex = Math.floor(Math.random() * sliderImages.length);
    
    
    slideNumberElement.textContent = `slide # ${randomIndex + 1} of ${slidesCount}`;
    
    removeAllActive() // triggering the function

    // set Active Class to the current Index elemnt
    sliderImages[randomIndex].classList.add("active");
    
    paginationCreatedUl.children[randomIndex].classList.add("active")

    // if this is index 1 i have to put disabled class
    if (randomIndex == 0){
        prevButton.classList.add("disabled")
    } else {
        prevButton.classList.remove("disabled")
    }
    if (randomIndex == (slidesCount - 1)){
        nextButton.classList.add("disabled")
    }else {
        nextButton.classList.remove("disabled")
    }
}

function removeAllActive (){
    sliderImages.forEach((el) => {
        el.classList.remove("active");
    })
    paginationBullets.forEach((el) => {
        el.classList.remove("active");
    })
}

