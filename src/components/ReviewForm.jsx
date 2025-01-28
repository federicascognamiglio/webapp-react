function ReviewForm({data, setData, sendSubmit}) {
    const votes = Array.from(Array(6).keys());   

    // Function that handles input change
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        const newData = {...data}
        newData[name] = value;
        setData(newData);
    }

    // Function that handles form submit
    const handleSubmit = (event) => {
        event.preventDefault()
        sendSubmit(data)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h4>Add your Review</h4>
            <div className="mb-3">
                <label htmlFor="nameInput" className="form-label">Name</label>
                <input name="name" onChange={handleInputChange} type="text" className="form-control" id="nameInput"/>
            </div>
            <div className="mb-3">
                <label htmlFor="textInput" className="form-label">Text</label>
                <textarea name="text" onChange={handleInputChange} className="form-control" id="textInput"/>
            </div>
            <div className="mb-3">
                <label htmlFor="vote">Rating</label>
                <select name="vote" onChange={handleInputChange} className="form-select" id="vote">
                    {votes.map(curVote => <option key={curVote} value={curVote}>{curVote}</option>)}
                </select>
            </div>
            <button className="btn btn-primary mb-4" type="submit">Submit</button>
        </form>
    )
}

export default ReviewForm