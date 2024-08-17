const quotesByMood = {
    joy: [
        "Do you ever look at someone and wonder, what is going on inside their head?",
        "Think positive!",
        "All right! We did not die today, I call that an unqualified success!",
        "Find the fun!",
        "You can't focus on what's going wrong. There's always a way to turn things around."
        
    ],
    sad: [
       "Crying helps me slow down and obsess over the weight of life's problems.",
       "I'm too sad to walk. Just give me a few... hours.",
       "I’m sorry. I’m just sad.",
       "We could cry until we can’t breathe.",
       "I'm not going to make it in time."

    ],
    motivated: [
        "Congratulations, San Francisco, you’ve ruined pizza! First the Hawaiians, and now you!",
        "Oh, I'll show you attitude, old man!",
        "Don't touch me!",
        "You wanna piece of this, pops?",
        "Can I say that curse word now?"

    ],
    digust: [
        "I'm telling you, it smells like something died in here.",
        "That is not brightly colored or shaped like a dinosaur. Hold on, guys. It’s broccoli!",
        "I just saved our lives. Yeah, you’re welcome.",
        "Seriously?",
        "Does anyone smell that?"

    ],
    fear: [
        "It’s broccoli! Ewww!",
        "Oh, I show you attitude, old man!",
        "We did not die today. I call that an unqualified success!",
        "That’s it. I’m done.",
        "What was that?!"


    ],
    
};

document.getElementById('generateQuoteBtn').addEventListener('click', function() {
    const mood = document.getElementById('moodInput').value.toLowerCase().trim();
    const quotes = quotesByMood[mood];
        
    if (quotes) {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        document.getElementById('quoteText').textContent = quotes[randomIndex];
    } else {
        document.getElementById('quoteText').textContent = "Sorry, no quotes found for that mood. Try 'joy', 'sad', or 'fear'.";
    }
});
const submittBtn= document.getElementById('submittBtn');
    document.getElementById('submittBtn').addEventListener('click', function() {
        submittBtn.innerText ="clicked";
    });
    console.log(submittBtn);