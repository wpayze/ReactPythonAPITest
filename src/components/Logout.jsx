import { Link } from "react-router-dom"

import { useEffect } from "react"

export default function Logout() {

    useEffect(() => {
        localStorage.removeItem("access_token");
    }, [])

    return (
        <div className="container p-4 my-4">
            <h1 className="title">You have been logged out!</h1>
            <Link className="button is-primary" to="/">Go To Home</Link>
        </div>
    )
}
