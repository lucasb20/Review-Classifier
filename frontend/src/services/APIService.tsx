
export async function postReview( text : string ){
    const api = `${import.meta.env.BACKEND_HOST}/reviews/`
    
    const response = await fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: text })
    })

    return response
}