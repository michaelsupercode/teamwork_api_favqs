// ### APIs Quotes #### ///
// API Key: b481e9421c4198af4a4ad791a5856895



let h1 = document.querySelector("h1");


fetch("https://favqs.com/api/qotd")
    .then(response => response.json())
    .then(json => {
        console.log(json)
        console.log("author is: " + json.quote.author) //Author
        console.log("quote content: " + json.quote.body)
        console.log("quote tags to search for: " + json.quote.tags); //URL
        // json.forEach(e => {
        //     console.log(e);
        //     h1.innerHTML = `$(json.quote.body)`
        // }
        // )
        h1.innerHTML = `${json.quote.body} <br><br> ${json.quote.author}`

    })