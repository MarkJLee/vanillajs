const quotes = [
    {
        quote: "The question of whether a computer can think is no more interesting than the question of whether a submarine can swim.",
        author: "Edsger W. Dijkstra",
    },

    {
        quote: "Programs must be written for people to read, and only incidentally for machines to execute.",
        author: "Harold Abelson",
    },

    { quote: "The best way to predict the future is to invent it.", author: "Alan Kay" },

    {
        quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        author: "Martin Fowler",
    },

    { quote: "The function of good software is to make the complex appear to be simple.", author: "Grady Booch" },

    { quote: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },

    { quote: "The computer was born to solve problems that did not exist before.", author: "Bill Gates" },

    {
        quote: "The most disastrous thing that you can ever learn is your first programming language.",
        author: "Alan Kay",
    },

    { quote: "The Internet? We are not interested in it.", author: "Bill Gates" },

    { quote: "I do not fear computers. I fear the lack of them.", author: "Isaac Asimov" },

    { quote: "One man's crappy software is another man's full-time job.", author: "Jessica Gaston" },

    { quote: "First, solve the problem. Then, write the code.", author: "John Johnson" },

    { quote: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },

    {
        quote: "In theory, there is no difference between theory and practice. But, in practice, there is.",
        author: "Jan L. A. van de Snepscheut",
    },

    {
        quote: "Should array indices start at 0 or 1? My compromise of 0.5 was rejected without, I thought, proper consideration.",
        author: "Stan Kelly-Bootle",
    },

    {
        quote: "The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.",
        author: "Seymour Cray",
    },

    {
        quote: "Don’t worry if it doesn’t work right. If everything did, you’d be out of a job.",
        author: "Mosher’s Law of Software Engineering",
    },

    { quote: "Deleted code is debugged code.", author: "Jeff Sickel" },

    {
        quote: "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
        author: "Edsger Dijkstra",
    },

    {
        quote: "The best method for accelerating a computer is the one that boosts it by 9.8 m/s2.",
        author: "Anonymous",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = `[${todaysQuote.author}]`;
