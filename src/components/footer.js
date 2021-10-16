import React from 'react'

const footer = () => {
    let footerStyle = {
        position: "absolute",
        width: "100%",
        top: "100vh",
    }


    return (
        <footer className="bg-dark text-light py-3 " style={footerStyle}>
            <p className="text-center">
                Copyright &copy; Nanda
            </p>

        </footer>
    )
}

export default footer
