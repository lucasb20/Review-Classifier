
export async function postReview( text : string ){
    const api = `${process.env.NEXT_PUBLIC_API_URL}/reviews/`

    const response = await fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: text })
    })

    return response
}