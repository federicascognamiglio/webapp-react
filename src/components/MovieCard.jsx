function MovieCard({movie, baseUrl}) {
    return (
        <div className="card h-100">
            <img src={`${baseUrl}/${movie.image}`} className="card-img-top h-50" alt={`Movie cover of ${movie.title}`} />
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <h6 className="card-text">{movie.director}</h6>
                    <p className="card-text">{movie.abstract}</p>
                    <a href="#" className="btn btn-primary">Details</a>
                </div>
        </div>
    )
}

export default MovieCard