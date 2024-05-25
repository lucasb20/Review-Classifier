
const resContainer = document.getElementsByTagName('p')[0]

function handleSubmit(event){
    event.preventDefault();
    
    postReview(formData.review)
    .then(data => data.json())
    .then(data => {
        const predictBool = data.predict
        resContainer.style.color = predictBool === 1 ? 'green' : 'red'
        resContainer.innerText = predictBool === 1 ? "That's great you enjoyed it." : "It's unfortunate you didn't enjoy it."
    })
    .catch(err => alert("Error connecting to the API."))
}

document.getElementsByTagName('form')[0].addEventListener('submit', ev => {
    ev.preventDefault()
    console.log(ev)
})