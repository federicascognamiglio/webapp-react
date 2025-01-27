import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieCard() {
    const url = import.meta.env.VITE_URL;
    const { id } = useParams();
    const [movie, setMovie] = useState();

    useEffect(() => {
        axios.get(`${url}/movies/${id}`).then((resp) => {
            setMovie(resp.data.data)
        })
    }, [])

    return (
        <>
            {movie &&
                <div className="card h-100">
                    <img src={`${url}/${movie.image}`} className="card-img-top h-50" alt={`Movie cover of ${movie.title}`} />
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <h6 className="card-text">{`Directed by: ${movie.director}`}</h6>
                        <p>{`Year: ${movie.release_year}`}</p>
                        <span className="badge text-bg-primary">{movie.genre}</span>
                        <p className="card-text">{movie.abstract}</p>
                    </div>
                </div>}
        </>
    )
}

export default MovieCard