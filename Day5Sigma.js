const quotes = [
    "When you eat, use your mouth - 1st Haris",
    "When you sleep, close your eyes - 2nd Haris",

    /*Challenges Optional (Easy)*/
    "When you think, use your buttock - 3rd Haris",
    "When you tired, go to work - 4th Haris",
]

/*Challenges Optional (Hard)*/
const photos = [
    "https://images.pexels.com/photos/14661/pexels-photo-14661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/6969/sunset-summer-hipster-pipe.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3192/woman-girl-beauty-mask.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/108157/pexels-photo-108157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
]

function setQuote()
{
    const quote = document.getElementById('quote');
    const author = document.getElementById('author');

    const randomIndex = Math.floor(Math.random() * quotes.length); /*calculate array random number*/

    const randomQuote = quotes[randomIndex]
    /*randomQuote equal to quotes which is array object we set at the beginning,
    while quotes = array on top, and randomIndex is fuction calculate array random number*/
    const randomPhoto = photos[randomIndex]
    /*randomPhoto equal to photos which is array object we set at Challenges Optional (Hard),
    while photos = array on top, and randomIndex is fuction calculate array random number*/
    
    const quoteParts = randomQuote.split('-');

    console.log(quoteParts);
    quote.innerHTML = quoteParts[0];
    author.innerHTML = `- ${quoteParts[1]}`;

    /*Challenges Optional (Hard)*/
    document.getElementById("photo").src = randomPhoto;
}