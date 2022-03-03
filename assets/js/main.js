const header = {
    "Authorization": "Token token=b481e9421c4198af4a4ad791a5856895"
}
let url = 'https://favqs.com/api/quotes';

let quoteText = document.querySelector("#quote-text");
let quoteAuthor = document.querySelector("#quote-author");
let twitter = document.querySelector("#twitter-icon");
let newQuote = document.querySelector("#new-quote-icon");

let colorArray = [
    "#65655E", 
    "#7D80DA", 
    "#B0A3D4", 
    "#CEBACF",
    "#C6AFB1", 
    "#32021F",
    "#4B2E39",
    "#6C596E",
    "#6F7D8C",
    "#77A0A9",
];
let numColors = colorArray.length;
let randomColor;
let randomColorNumber = 0;

let quoteArray = []
let numQuotes;
let randomNum;
let randomQuote;

//filter author
let authorButtons = document.querySelectorAll(".autor");
let urlAutor = ``;
authorButtons.forEach((e) => {
    e.addEventListener("click", () => {
        removeClassActive()
        let singleAutor = (e.innerHTML).replace(" ", "+");
        urlAutor = `https://favqs.com/api/quotes/?filter=${singleAutor}&type=author`;
        console.log(urlAutor);
        if(e.classList.contains('active')){
            location.reload(true);
            e.classList.remove('active')
        }else{
            e.classList.add('active')
        }
        
        
        !async function(){
            quoteArray = await fetch(`${urlAutor}`, { headers: header })
                .then((response) => response.json())
                .then(data => {
                    return data.quotes;
                })
                .catch(error => {
                    console.error(error);
                });
        
            numQuotes = quoteArray.length;
            showQuoteAndChangeColor()
            }();
    })
})
//filter topic
let topicButtons = document.querySelectorAll(".topic");
let urlTopic = ``;
topicButtons.forEach((e) => {
    e.addEventListener("click", () => {
        removeClassActive()
        urlTopic = `https://favqs.com/api/quotes/?filter=${e.innerHTML}`;
        console.log(urlTopic);
        if(e.classList.contains('active')){
            location.reload(true);
            e.classList.remove('active')
        }else{
            e.classList.add('active')
        }
        
        
        !async function(){
            quoteArray = await fetch(`${urlTopic}`, { headers: header })
                .then((response) => response.json())
                .then(data => {
                    return data.quotes;
                })
                .catch(error => {
                    console.error(error);
                });
        
            numQuotes = quoteArray.length;
            showQuoteAndChangeColor()
            }();
    })
})

//remove class active
function removeClassActive(buttons){
    topicButtons.forEach((e) =>{
        e.classList.remove('active')
    })
    authorButtons.forEach((e) =>{
        e.classList.remove('active')
    })
}

!async function(){
    quoteArray = await fetch(`${url}`, { headers: header })
        .then((response) => response.json())
        .then(data => {
            return data.quotes;
        })
        .catch(error => {
            console.error(error);
        });
    numQuotes = quoteArray.length;
}();

function showNewQuote(randomNum) {
    return quoteArray[randomNum];
}
function newRandomNumber() {
    let numQ = Math.floor(Math.random() * (numQuotes - 1));
    if (numQ >= randomNum) {
        numQ++;
    }
    return numQ;
}
function changeQuote(){
    randomNum = newRandomNumber();
    randomQuote = showNewQuote(randomNum);
    quoteText.innerHTML = `${randomQuote.body}`;
    quoteAuthor.innerHTML = `- ${randomQuote.author} -`;

    changeTwitterLink(randomQuote.body, randomQuote.author)
}


function random_color() {
    let numC = Math.floor(Math.random() * (numColors - 1));

    if (numC >= randomColorNumber) {
        numC++;
    }

    randomColorNumber = numC;
    return colorArray[numC];
}

function changeColor(){
    randomColor = random_color();

    document.body.style.backgroundColor = randomColor
    quoteText.style.color = randomColor
    quoteAuthor.style.color = randomColor
    twitter.style.color = randomColor
    newQuote.style.color = randomColor
}

function showQuoteAndChangeColor(){
    changeColor()
    changeQuote()
}

function changeTwitterLink(text, author){
    // author.toLowerCase()
    let twitterText = text.replace(/ /g, '%20')
    twitterText += "%23"
    twitterText += author.replace(/ /g, '').toLowerCase()
    console.log(twitterText);
    twitter.href = `https://twitter.com/intent/tweet?text=${twitterText}`
}
setTimeout(showQuoteAndChangeColor, 1500)
newQuote.addEventListener("click", (e) => {
    showQuoteAndChangeColor()
})