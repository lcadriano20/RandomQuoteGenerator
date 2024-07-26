const factText   = document.querySelector(".quote"),
factBtn          = document.querySelector("button"),
soundBtn          = document.querySelector(".sound")
copyBtn           = document.querySelector(".copy")
twitterBtn        = document.querySelector(".twitter")


let apiKey = ''
let url = 'https://api.api-ninjas.com/v1/facts'

  let options = {
    method: "GET",
    headers: { 
       "x-api-key": apiKey
      }
  }
    

const randomFact = () => {
  fetch(url,options).then((response)=> response.json()).then((data)=> {
    includeOnHtml(data[0].fact)
  })
  
}

function includeOnHtml(fact) {
  factText.textContent = fact
}
function copyQuote() {
    navigator.clipboard.writeText(factText.textContent)
}
function quoteTwitter() {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${factText.innerText}`
    window.open(tweetUrl, '_blank')
}

function listenToQuote() {
    let utterance = new SpeechSynthesisUtterance(`${factText.innerText}`)
    speechSynthesis.speak(utterance) // Speak method of speechSynthesis speaks the utterance
}

soundBtn.addEventListener('click',listenToQuote)
copyBtn.addEventListener('click',copyQuote)
twitterBtn.addEventListener('click',quoteTwitter)

factBtn.addEventListener("click",randomFact)

