import { useState } from "react";

interface ReviewFormData {
    title: string;
    rating: number;
    review: string;
}

export function ReviewForm(){
    const [formData, setFormData] = useState<ReviewFormData>({
        title: '',
        rating: 0,
        review: '',
    })
    
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        setFormData({
        title: '',
        rating: 0,
        review: '',
        })
    }

    return(
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
        <label htmlFor="rating">Rating:</label>
        <input
            type="number"
            id="rating"
            name="rating"
            min="1"
            max="5"
            value={formData.rating}
            onChange={e => setFormData({...formData, rating : parseInt(e.target.value)})}
            required
        />
      </div>
        <div>
            <label htmlFor="review">Review:</label>
            <textarea
            id="review"
            name="review"
            value={formData.review}
            onChange={e => setFormData({...formData, review : e.target.value})}
            required
            />
        </div>
        <button type="submit">Submit</button>
        </form>
    )
}