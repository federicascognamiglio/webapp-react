import { NavLink } from "react-router-dom"

function AppHeader() {
    const navLinks = [
        {
            path: "/",
            title: "Home"
        },
        {
            path: "/movies",
            title: "Movies"
        }
    ]
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Bool Movies</a>
                <div className="d-flex">
                    <ul className="navbar-nav">
                        {navLinks.map((curLink, index) =>
                            <li className="nav-item" key={index}>
                                <NavLink className="nav-link" to={curLink.path}>{curLink.title}</NavLink>
                            </li>)}
                    </ul>
                </div>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

export default AppHeader