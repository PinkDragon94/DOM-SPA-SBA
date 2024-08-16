const quotesByMood = {
    happy: [
        "Happiness is not by chance, but by choice. - Jim Rohn",
        "Happiness is the best makeup. - Drew Barrymore",
        "The purpose of our lives is to be happy. - Dalai Lama"
    ],
    sad: [
        "Tears come from the heart and not from the brain. - Leonardo da Vinci",
        "Every human walks around with a certain kind of sadness. They may not wear it on their sleeves, but it's there if you look deep. - Taraji P. Henson",
        "Sadness flies away on the wings of time. - Jean de La Fontaine"
    ],
    motivated: [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
        "Don’t watch the clock; do what it does. Keep going. - Sam Levenson"
    ],
    
};

document.getElementById('generateQuoteBtn').addEventListener('click', function() {
    const mood = document.getElementById('moodInput').value.toLowerCase().trim();
    const quotes = quotesByMood[mood];
    
    if (quotes) {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        document.getElementById('quoteText').textContent = quotes[randomIndex];
    } else {
        document.getElementById('quoteText').textContent = "Sorry, no quotes found for that mood. Try 'happy', 'sad', or 'motivated'.";
    }
});

