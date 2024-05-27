import { postReview } from '/APIService.js'

const resContainer = document.getElementsByTagName('p')[0]

document.getElementsByTagName('form')[0].addEventListener('submit', handleSubmit)

function handleSubmit(ev){
    ev.preventDefault();
    
    postReview({
        title: ev.target['title'].value,
        review: ev.target['review'].value
    })
    .then(data => data.json())
    .then(data => {
        const predictBool = data.predict
        resContainer.style.color = predictBool ? 'green' : 'red'
        resContainer.innerText = predictBool ? "That's great you enjoyed it." : "It's unfortunate you didn't enjoy it."
    })
    .catch(err => alert("Error connecting to the API."))
}