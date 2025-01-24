import axios from "axios";
import { useEffect, useState } from "react"
// Components
import MovieCard from "../components/MovieCard"

function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const url = import.meta.env.VITE_URL

    const getMovies = () => {
        axios.get(`${url}/movies`).then((resp) => {
            setMovies(resp.data.data)
        })
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <main className="pt-5 container">
            <h1 className="text-center">Bool Movies</h1>
            <section className="pt-4"> 
                <h3 className="pb-3">Movies</h3>
                <div className="row">
                    {movies.map(curMovie => 
                    <div key={curMovie.id} className="col-12 col-md-4 col-lg-3 mb-4">
                        <MovieCard movie={curMovie} baseUrl={url}/>
                    </div>)}
                </div>
            </section>
        </main>
    )
}

export default MoviesPage