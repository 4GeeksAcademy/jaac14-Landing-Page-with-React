import React from "react";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark text-light">
            <div className="container-fluid text-light">
                <a className="navbar-brand text-light" href="#">Navbar</a>
                <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-light"></span>
                </button>
                <div className="collapse navbar-collapse text-light" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-light" >
                        <li className="nav-item text-light">
                            <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item text-light">
                            <a className="nav-link text-light" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown text-light">
                            <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu text-light">
                                <li><a className="dropdown-item text-light" href="#">Action</a></li>
                                <li><a className="dropdown-item text-light" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider text-light" /></li>
                                <li><a className="dropdown-item text-light" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item text-light">
                            <a className="nav-link disabled text-light" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form className="d-flex text-light" role="search">
                        <input className="form-control me-2 text-light" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success text-light" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

    )
}

export default NavBar