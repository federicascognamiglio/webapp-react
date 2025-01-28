function ReviewForm() {
    const votes = Array.from(Array(6).keys());   

    return (
        <form>
            <h4>Add your Review</h4>
            <div className="mb-3">
                <label htmlFor="nameInput" className="form-label">Name</label>
                <input name="name" type="text" className="form-control" id="nameInput"/>
            </div>
            <div className="mb-3">
                <label htmlFor="textInput" className="form-label">Text</label>
                <textarea name="text" className="form-control" id="textInput"/>
            </div>
            <div className="mb-3">
                <label htmlFor="vote">Rating</label>
                <select name="vote" className="form-select" id="vote">
                    {votes.map(curVote => <option key={curVote} value={curVote}>{curVote}</option>)}
                </select>
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
    )
}

export default ReviewForm