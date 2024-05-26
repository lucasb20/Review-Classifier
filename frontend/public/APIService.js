
async function postReview(text){
    const API_URL = process.env.API_URL + '/reviews/'

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: text })
    })

    return response
}