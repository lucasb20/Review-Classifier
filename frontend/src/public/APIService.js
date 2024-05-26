
export async function postReview(text){
    const url = API_URL + '/reviews/'

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: text })
    })

    return response
}