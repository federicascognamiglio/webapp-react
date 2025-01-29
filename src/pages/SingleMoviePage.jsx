import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import ReviewForm from "../components/ReviewForm";

// Initial formData
const initialFormData = {
    name: "",
    vote: 0,
    text: ""
}

function SingleMoviePage() {
    const url = import.meta.env.VITE_URL;
    const { slug } = useParams();
    const [movie, setMovie] = useState(null);
    // Form data state
    const [formData, setFormData] = useState(initialFormData);

    const getMovie = () => {

        axios.get(`${url}/movies/${slug}`).then((resp) => {
            setMovie(resp.data.data[0])
        })
    }

    // Get Movie
    useEffect(() => {
        getMovie()
    }, [])

    // Send newData to DB on form submit
    const storeReview = (data) => {
        axios.post(`${url}/movies/${movie.id}/reviews`, data).then(resp => {
            setFormData(initialFormData);
            getMovie();
        })
    }

    return (
        <>
            {movie &&
                (<main key={movie.id} className="container">
                    <h1 className="text-center mt-5 mb-3">{movie.title}</h1>
                    <div className="d-flex gap-4">
                        <img src={`${url}/${movie.image}`} className="card-img-top w-25 pb-5" alt={`Movie cover of ${movie.title}`} />
                        <div>
                            <div className="d-flex align-items-center">
                                <h5 className="card-title me-3">{movie.title}</h5>
                                <span className="badge text-bg-secondary">{movie.genre}</span>
                            </div>
                            <h6 className="card-text pt-2">{`Directed by: ${movie.director}`}</h6>
                            <p className="card-text">{`Released in: ${movie.release_year}`}</p>
                            <p className="card-text">{movie.abstract}</p>
                            <div>
                                <ReviewForm
                                    data={formData}
                                    setData={setFormData}
                                    sendSubmit={storeReview}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {movie.reviews.map(curReview => <div className="col-4" key={curReview.id}><ReviewCard review={curReview} /></div>)}
                    </div>
                </main>)
            }

        </>
    )
}

export default SingleMoviePage