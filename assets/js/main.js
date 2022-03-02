let quoteText = document.querySelector("#quote-text");
let quoteAuthor = document.querySelector("#quote-author");
let twitter = document.querySelector("#twitter-icon");
let newQuote = document.querySelector("#new-quote-icon");

let authorButtons = document.querySelectorAll(".autor");
let urlAutor = ``;

authorButtons.forEach((e) => {
    e.addEventListener("click", () => {
        let singleAutor = (e.innerHTML).replace(" ", "+");
        urlAutor = `https://favqs.com/api/quotes/?filter=${singleAutor}&type=author`;
        console.log(urlAutor);
    })
})

console.log(urlAutor);

let topicButtons = document.querySelector(".topic")

let filter = document.querySelectorAll("#filters")
console.log(filter);

let token = "b481e9421c4198af4a4ad791a5856895";

const header = {
    "Authorization": "Token token=b481e9421c4198af4a4ad791a5856895"
}
let url = 'https://favqs.com/api/quotes';


fetch(`${url}`, { headers: header })
    .then(response => response.json())
    .then(json => {
        json.quotes.forEach((el) => {
            quoteText.innerHTML = `${el.body}`;
            quoteAuthor.innerHTML = `${el.author}`;
            newQuote.addEventListener("click", (e) => {
                location.reload(true);
            })
        })

    })





let x, y, z;

function random_bg_color() {
    x = Math.floor(Math.random() * 256);
    y = Math.floor(Math.random() * 256);
    z = Math.floor(Math.random() * 256);
    let bgColor = `rgb(${x}, ${y}, ${z})`;
    console.log(bgColor);
    document.body.style.backgroundColor = bgColor;
}

random_bg_color();

