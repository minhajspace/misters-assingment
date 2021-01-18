import React, { useState } from 'react'
import Nav from './Nav'
import { NavLink } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import { connect } from 'react-redux'

const Login = (props) => {
    const [authDetails, setAuthDetails] = useState({
        email: "", password: ""
    })
    const [cookies, setCookie] = useCookies(['email']);



    const handleLogin = () => {
        const maxAge = 10 * 24 * 60 * 60
        setCookie("email", authDetails.email, { maxAge })
        setCookie("password", authDetails.password, { maxAge })
    }
    return (
        <>
            <Nav />
            <div className="flex justify-center align-center">
                <div className=" d-flex">
                    <div className="m self-center"><span className="text-center text-md">Login</span></div>
                    <div className="r">
                        <div className="m ">
                            <lable className=" mb">Email</lable>
                            <div><input className="full-w round-sm bg-gray border-gray" value={authDetails.email} onChange={(e) => setAuthDetails({ ...authDetails, email: e.target.value })} ></input></div>
                        </div>
                        <div className="m">
                            <lable className="mb">Password</lable>
                            <div><input className="full-w round-sm bg-gray border-gray" value={authDetails.password} onChange={(e) => setAuthDetails({ ...authDetails, password: e.target.value })} ></input></div>
                        </div>
                        <div className="m">
                            <div><button className="full-w round-l bg-red text-white text-bold" onClick={handleLogin}>LOGIN</button>
                            </div>
                        </div >
                        <div className="m text-md">
                            <p className="m">Don't have an account ?<span className="text-red"><NavLink to="/signup">Sign up </NavLink></span></p>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

const mapStatetoProps = (state) => {
    return {
        state: state
    }
}



export default connect(mapStatetoProps)(Login)
