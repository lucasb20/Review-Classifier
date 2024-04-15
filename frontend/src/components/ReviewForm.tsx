import { useState } from "react";

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
        </>
    )
}