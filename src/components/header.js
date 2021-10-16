import React from 'react'
import propTypes from 'prop-types'


//react functional component {rfc}
//props are js objects and can be used to call data from the default (eg: props.title)
export default function Header(props/* "{ title }" or */) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.title /* or "title "  */}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>


                        </ul>
                        {/*//to  use in as condition*/
                            props.searchBar ? <form className="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form> : ""}

                    </div>
                </div>
            </nav>
        </div>
    )
}

//default Props are used if user forget to pass value to props variable

Header.defaultProps = {
    title: "Default Title",
    searchBar: true
}

//To specify dataType of props variables and check as warning

Header.propTypes = {
    title: propTypes.string,
    searchBar: propTypes.bool.isRequired //to make variable required and if no value is declared in default PropTypes, it will show error
}