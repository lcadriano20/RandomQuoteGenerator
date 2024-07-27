class FactApp {
    constructor(apiKey) {
        this.factText = document.querySelector('.quote')
        this.factBtn  = document.querySelector('button')
        this.soundBtn = document.querySelector('.sound')
        this.copyBtn  = document.querySelector('.copy')
        this.twitterBtn = document.querySelector('.twitter')
        this.apiKey   = apiKey
        this.url      = 'https://api.api-ninjas.com/v1/facts';
        this.options = {
            method: 'GET',
            headers: {
                "x-api-key": this.apiKey
            }
        }
        this.init(); 

    }
    init() {
        this.factBtn.addEventListener('click',()=> this.fetchRandomFact())
        this.soundBtn.addEventListener('click',()=> this.listenToQuote())
        this.copyBtn.addEventListener('click',()=> this.copyQuote())
        this.twitterBtn.addEventListener('click',()=> this.quoteTwitter())
    }
    fetchRandomFact() {
        fetch(this.url,this.options).then(response=>response.json()).then(data=> {
            this.includeOnHtml(data[0].fact)
        })
    }
    includeOnHtml(fact) {
        this.factText.textContent = fact
    }
    copyQuote() {
        navigator.clipboard.writeText(this.factText.textContent)
    }
    quoteTwitter() {
        let tweetUrl = `https://twitter.com/intent/tweet?url=${this.factText.innerText}`
        window.open(tweetUrl, '_blank')
    }
    listenToQuote() {
        let utterance = new SpeechSynthesisUtterance(this.factText.innerText)
        speechSynthesis.speak(utterance)
    }
}
const app = new FactApp('')