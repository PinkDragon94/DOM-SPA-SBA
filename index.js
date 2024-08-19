
const generateQuoteBtn = document.querySelector('#generateQuoteBtn');
const moodInput = document.querySelector('#moodInput');
const quoteBox = document.querySelector('#quoteBox');
const quoteText = document.querySelector('#quoteText');
const subscriptionForm = document.querySelector('#subscription');
const submitBtn = document.querySelector('#submittBtn');
const nameInput = document.querySelector('#nameInput');
const emailInput = document.querySelector('#emailInput');

const image = document.querySelectorAll(`.image-gallery`);
image.forEach(image => {
    image.addEventListener(`mouseover`, function()
{
    this.style.transform = `translateY(-10px)`;

});
image.addEventListener(`mouseout`, function() {
 setTimeout(() => {    
    this.style.transform = `translateY(0)`;
},100);

});
});

const moodQuotes = {
    joy: ["Do you ever look at someone and wonder, what is going on inside their head?",
          "Think positive!","All right! We did not die today, I call that an unqualified success!",
          "Find the fun!","You can't focus on what's going wrong. There's always a way to turn things around."],
    sad: ["Crying helps me slow down and obsess over the weight of life's problems.",
          "I'm too sad to walk. Just give me a few... hours.","I’m sorry. I’m just sad.","We could cry until we can’t breathe.",
          "I'm not going to make it in time.,"],
    fear: ["It’s broccoli! Ewww!","Oh, I show you attitude, old man!","We did not die today. I call that an unqualified success!",
            "That’s it. I’m done.","What was that?!"],
    disgust: ["I'm telling you, it smells like something died in here.",
            "That is not brightly colored or shaped like a dinosaur. Hold on, guys. It’s broccoli!",
            "I just saved our lives. Yeah, you’re welcome.","Seriously?","Does anyone smell that?"],
    anger: ["Congratulations, San Francisco, you’ve ruined pizza! First the Hawaiians, and now you!",
            "Oh, I'll show you attitude, old man!","Don't touch me!","You wanna piece of this, pops?","Can I say that curse word now?"],
    anxiety: ["Anxiety does not empty tomorrow of its sorrows, but only empties today of its strength.", "You don’t have to control your thoughts. You just have to stop letting them control you."]
};


function generateQuote() {
    const mood = moodInput.value.trim().toLowerCase();

    quoteBox.classList.remove('error', 'success');
    
    if (moodQuotes[mood]) {
        const randomIndex = Math.floor(Math.random() * moodQuotes[mood].length);
        const newQuote = moodQuotes[mood][randomIndex];

        
        const fragment = document.createDocumentFragment();
        const newQuoteElement = document.createElement('p');
        newQuoteElement.className = 'quote';
        newQuoteElement.textContent = `"${newQuote}"`;

        
        while (quoteBox.firstChild) {
            quoteBox.removeChild(quoteBox.firstChild);
        }
        fragment.appendChild(newQuoteElement);

        
        quoteBox.appendChild(fragment);

       
        quoteBox.classList.add('success');
    } else {
        quoteText.textContent = "Mood not recognized. Try 'joy', 'sad', 'fear', 'disgust', 'anger', or 'anxiety'.";
        quoteBox.classList.add('error');
    }
}


function validateForm(event) {
    let isValid = true;

    
    if (nameInput.value.trim() === "") {
        nameInput.classList.add('error');
        isValid = false;
    } else {
        nameInput.classList.remove('error');
    }

    n
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        emailInput.classList.add('error');
        isValid = false;
    } else {
        emailInput.classList.remove('error');
    }

    if (!isValid) {
        event.preventDefault();
        alert("Please fill out the form correctly.");
    }
}


generateQuoteBtn.addEventListener('click', generateQuote);


submitBtn.addEventListener('click', validateForm);


moodInput.addEventListener('focus', () => {
    moodInput.setAttribute('placeholder', 'Enter a mood...');
});

moodInput.addEventListener('blur', () => {
    moodInput.setAttribute('placeholder', 'Type your mood (joy, sad, fear)');
});


console.log(`Page Title: ${document.title}`);
console.log(`Window Dimensions: ${window.innerWidth}x${window.innerHeight}`);


quoteBox.classList.add('initial');


