import React from 'react'
import "./Login.css"
import img from "../../images/logo.png"
import useAuth from '../../hooks/useAuth'
import { useLocation ,useHistory} from 'react-router'

const Login = () => {
    const { googleSignIn} = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/login"

    const handleGoogleLogin = ()=>{
        googleSignIn()
        .then(result => {
            history.push(redirect_uri)
            
        })
        .catch(error => {
            console.log(error.message)
        })
       
    }
    return (
        <div>
            <div className="login">
                <img src={img} alt=""/>
                <h1 className="login__title">Plese Login</h1>
                <div className="login__system">
                    <img src="https://img.icons8.com/color/50/000000/google-logo.png" className="login__item" onClick={handleGoogleLogin} />
                </div>
            </div>
        </div>
    )
}

export default Login
