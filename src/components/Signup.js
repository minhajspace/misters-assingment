import React, { useState } from 'react'
import Nav from './Nav'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signup_user } from '../redux/actions/index'


const Signup = (props) => {
    const [authDetails, setAuthDetails] = useState({ email: "", password: "", confirmPassword: "" })
    const [error, setError] = useState({ email: "", password: "" })

    const handleSignup = (e) => {
        e.preventDefault()
        const item = {
            email: authDetails.email,
            password: authDetails.password,
            confirmPassword: authDetails.confirmPassword
        }
        localStorage.setItem('user', JSON.stringify(item));
        if (authDetails.email.trim()) {
            if (/\S+@\S+\.\S+/.test(authDetails.email)) {
                if (authDetails.password.length > 7 && authDetails.confirmPassword && authDetails.password === authDetails.confirmPassword) {
                    console.log(authDetails)
                    props.signup_user(item)
                    setAuthDetails({ email: "", password: "", confirmPassword: "" })
                    setError({ email: "", password: "" })
                } else {
                    setError({ ...error, password: "Password length should be 8  and password and confirm password should be same " })
                }
            } else {
                setError({ ...error, email: "Invalid Email" })
            }

        } else {
            setError({ ...error, email: "Email is required" })
        }

    }
    return (
        <>
            <Nav />
            <form onSubmit={handleSignup}>
                <div className="flex justify-center align-center">
                    <div className=" d-flex">
                        <div className="m self-center"><span className="text-center text-md extra-bold">Sign up</span></div>
                        <div className="r">
                            <div className="m">
                                <lable className="">Email</lable>
                                <div>
                                    <input
                                        type="email"
                                        className="full-w round-sm bg-gray border-gray mt text-md outline-none "
                                        value={authDetails.email}
                                        onChange={(e) => setAuthDetails({ ...authDetails, email: e.target.value })}
                                        required
                                    />
                                    <p className="mt text-red">{error.email}</p>
                                </div>
                            </div>
                            <div className="m">
                                <lable className="mb">Password</lable>
                                <div><input
                                    className="full-w round-sm bg-gray border-gray mt text-md outline-none "
                                    type="password"
                                    value={authDetails.password}
                                    onChange={(e) => setAuthDetails({ ...authDetails, password: e.target.value })}
                                    required />
                                    <p className="mt text-red">{error.password}</p>
                                </div>
                            </div>
                            <div className="m">
                                <lable className="mb">Confirm Password</lable>
                                <div>
                                    <input
                                        className="full-w round-sm bg-gray border-gray mt text-md outline-none"
                                        type="password"
                                        value={authDetails.confirmPassword}
                                        onChange={(e) => setAuthDetails({ ...authDetails, confirmPassword: e.target.value })}
                                        required />
                                    <p className="mt text-red">{error.password}</p>
                                </div>
                            </div>
                            <div className="m">
                                <div><button className="full-w round-l bg-red text-white text-bold outline-none border-none" onClick={handleSignup}>SIGN UP</button>
                                </div>
                            </div >
                            <div className="m text-md">
                                <p className="m">Already have an account ?  <span ><NavLink className="text-red text-underline" to="/login">Sign in </NavLink></span></p>
                            </div>

                        </div>

                    </div>
                </div>
            </form>
        </>
    )

}


const mapStatetoProps = (state) => {
    return {
        authData: state.signupReducer

    }
}

export default connect(mapStatetoProps, { signup_user })(Signup)