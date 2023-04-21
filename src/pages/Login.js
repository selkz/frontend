import { Link } from "react-router-dom";

function Login() {
    return (
        <div>
            <div className="hero is-halfheight mt-6">
                <div className="columns is-centered mt-5">
                    <div className="column is-half-desktop has-text-white">
                        <div className="field has-background-dark p-5 mt-6">
                            <h1 className="mb-4 is-size-5">Login</h1>
                            <label className="label has-text-white">Email Address:</label>
                            <div className="control">
                                <input className="input" type="text"></input>
                            </div>

                            <label className="label has-text-white">Password:</label>
                            <div className="control">
                                <input className="input" type="password"></input>
                            </div>

                            <div className="control">
                                <button className="button is-link mt-5">Login</button>
                            </div>

                            <p className="mt-2">
                                Don't have an account? <Link to="/signup">Register</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;