function ReviewCard({ review }) {
    return (
        <div className="card mb-4">
            <div className="card-body">
                <h5 className="card-title">{review.name}</h5>
                <p className="card-text fs-6">{review.created_at}</p>
                <p className="card-text">{review.text}</p>
            </div>
        </div>
    )
}

export default ReviewCard