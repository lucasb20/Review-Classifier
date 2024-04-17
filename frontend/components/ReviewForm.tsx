"use client"

import { useState } from "react";
import { postReview } from "../services/APIService";

interface ReviewFormData {
    title: string;
    review: string;
}

export function ReviewForm(){
    const [formData, setFormData] = useState<ReviewFormData>({
        title: '',
        review: '',
    })

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const resContainer = document.getElementsByTagName('p')[0]
        
        postReview(formData.review)
        .then(data => data.json())
        .then(data => {
            const predictBool = data.predict
            resContainer.style.color = predictBool === 1 ? 'green' : 'red'
            resContainer.innerText = predictBool === 1 ? "That's great you enjoyed the movie." : "It's unfortunate you didn't enjoy the movie."
        })
        .catch(err => alert("Error connecting to the API."))

        setFormData({
        title: '',
        review: '',
        })
    }

    return(
        <>
            <h1>Your review</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={e => setFormData({...formData, title : e.target.value})}
                    required
                    />
                </div>
                <div>
                    <label htmlFor="review">Review:</label>
                    <textarea
                    id="review"
                    name="review"
                    rows={5}
                    cols={25}
                    value={formData.review}
                    onChange={e => setFormData({...formData, review : e.target.value})}
                    required
                    />
                </div>
                <div>
                    <button type="reset">Reset</button>
                    <button type="submit">Submit</button>
                </div>
            </form>

            <p>Share your thoughts here!</p>
        </>
    )
}