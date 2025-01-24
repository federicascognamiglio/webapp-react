import { Link } from "react-router-dom"

function HomePage() {
    return (
        <section className="pt-5">
            <div className="d-flex flex-column align-items-center">
                <h1 className="text-center mt-5">Bool Movies</h1>
                <p className="text-center mt-2">All your favourite movies in one place!</p>
                <Link to="/movies" className="btn btn-primary mt-4">Movies</Link>
            </div>
        </section>
    )
}

export default HomePage