import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";

function SingleMoviePage() {
    const url = import.meta.env.VITE_URL;
    const { id } = useParams();
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        axios.get(`${url}/movies/${id}`).then((resp) => {
            setMovie(resp.data.data)
        })
    }, [])

    return (
        <>
            {movie.map(curMovie =>
            (<main key={curMovie.id} className="container">
                <h1 className="text-center mt-5 mb-3">{curMovie.title}</h1>
                <div className="d-flex gap-4">
                    <img src={`${url}/${curMovie.image}`} className="card-img-top w-25 pb-5" alt={`Movie cover of ${curMovie.title}`} />
                    <div>
                        <h5 className="card-title">{curMovie.title}</h5>
                        <h6 className="card-text">{`Directed by: ${curMovie.director}`}</h6>
                        <p className="card-text">{`Released in: ${curMovie.release_year}`}</p>
                        <span className="badge text-bg-primary mb-3">{curMovie.genre}</span>
                        <p className="card-text">{curMovie.abstract}</p>
                    </div>
                </div>
                <div className="row">
                {curMovie.reviews.map(curReview => <div className="col-4" key={curReview.id}><ReviewCard review={curReview} /></div>)}
                </div>
            </main>)
            )
            }
        </>
    )
}

export default SingleMoviePage