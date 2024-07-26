const quoteText   = document.querySelector(".quote"),
quoteBtn          = document.querySelector("button"),
authorName        = document.querySelector('.author .name'),
soundBtn          = document.querySelector(".sound")
copyBtn           = document.querySelector(".copy")
twitterBtn        = document.querySelector(".twitter")

const randomQuote = () => {

    // Fetching Random quote from the API
    
    fetch('https://favqs.com/api/qotd')
    .then(response => response.json())
    .then(data => {
      console.log(data.quote.body);
    })
    .catch(error => console.error('Erro:', error));
}
function copyQuote() {
    navigator.clipboard.writeText(quoteText.textContent)
}
function quoteTwitter() {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`
    window.open(tweetUrl, '_blank')
}

function listenToQuote() {
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.textContent}`)
    speechSynthesis.speak(utterance) // Speak method of speechSynthesis speaks the utterance
}

soundBtn.addEventListener('click',listenToQuote)
copyBtn.addEventListener('click',copyQuote)
twitterBtn.addEventListener('click',quoteTwitter)

quoteBtn.addEventListener("click",randomQuote)