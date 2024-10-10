//  This is homepage function

// var a="project";

// console.log(a);

// placeholder text disappering function 

function clearPlaceholder() {
    document.getElementById('search').placeholder = '';
}

function resetPlaceholder() {
    if (document.getElementById('search').value === '') {
        document.getElementById('search').placeholder = 'Job title, company, keyword';
    }
}

// Function to change "Interest" to "Passion" and vice versa during the blink
function changeWordDuringBlink() {
    const wordElement = document.getElementById('changingWord');
    const isInterest = wordElement.innerHTML === 'Interest';

    // Set opacity to 0 before changing the text for a smooth transition
    wordElement.style.opacity = '0';

    setTimeout(() => {
        if (isInterest) {
            wordElement.innerHTML = 'Passion';
            wordElement.classList.remove('interest'); // Remove blue class
            wordElement.classList.add('passion'); // Add orange class
        } else {
            wordElement.innerHTML = 'Interest';
            wordElement.classList.remove('passion'); // Remove orange class
            wordElement.classList.add('interest'); // Add blue class
        }

        // Restore opacity to 1 after changing the text
        wordElement.style.opacity = '1';
    }, 500); // Matches the duration of the transition
    
}
// Change the word in sync with the blink cycle (2s animation duration means change every 2 seconds)
setInterval(changeWordDuringBlink, 2000); // Change every 2 seconds

function func() {
    window.location.assign("login.html")
}

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

function func1() {
    window.location.assign("index.html")
}

function myFunction(){
   window.location.assign("about.html")
}

