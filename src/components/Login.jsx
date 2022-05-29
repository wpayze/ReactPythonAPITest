import { useRef } from "react"
import { useNavigate } from "react-router-dom";

export default function Login() {

    let navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();

    const login = () => {
        const data = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }

        fetch("http://localhost:8000/user/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then( (res) => res.json())
        .then( ({access_token}) => {
            localStorage.setItem("access_token", access_token);
            navigate("/");
        });
    }

    return (
        <section className="hero is-primary is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-5-tablet is-4-desktop is-3-widescreen has-background-white px-4">

                            <h1 className="title has-text-black">LOGIN</h1>

                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control">
                                    <input className="input" type="email" ref={emailRef} defaultValue={"test@email.com"}/>
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Password</label>
                                <div className="control">
                                    <input className="input" type="password" ref={passwordRef} defaultValue={"password"} />
                                </div>
                            </div>

                            <div className="button is-primary" onClick={login}>
                                LOGIN
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
