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
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    // Form data state
    const [formData, setFormData] = useState(initialFormData);

    const getMovie = () => {
        axios.get(`${url}/movies/${id}`).then((resp) => {
            setMovie(resp.data.data)
        })
    }

    // Get Movie
    useEffect(() => {
       getMovie()
    }, [])

    // Send newData to DB on form submit
    const storeReview = (formData) => {
        axios.post(`${url}/movies/${movie.id}/reviews`, formData).then(resp => {
            setFormData(initialValues)
            getMovie()
        })
    }
 

    return (
        <>
            {movie.map(curMovie =>
            (<main key={curMovie.id} className="container">
                <h1 className="text-center mt-5 mb-3">{curMovie.title}</h1>
                <div className="d-flex gap-4">
                    <img src={`${url}/${curMovie.image}`} className="card-img-top w-25 pb-5" alt={`Movie cover of ${curMovie.title}`} />
                    <div>
                        <div className="d-flex align-items-center">
                        <h5 className="card-title me-3">{curMovie.title}</h5>
                        <span className="badge text-bg-secondary">{curMovie.genre}</span>
                        </div>
                        <h6 className="card-text pt-2">{`Directed by: ${curMovie.director}`}</h6>
                        <p className="card-text">{`Released in: ${curMovie.release_year}`}</p>
                        <p className="card-text">{curMovie.abstract}</p>
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
                    {curMovie.reviews.map(curReview => <div className="col-4" key={curReview.id}><ReviewCard review={curReview} /></div>)}
                </div>
            </main>)
            )
            }
        </>
    )
}

export default SingleMoviePage