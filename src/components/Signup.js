import React from 'react'
import Nav from './Nav'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signup_user } from '../components/redux/actions/index'


class Signup extends React.Component {
    state = {
        UserDetails: [],
        email: "",
        password: "",
        confirmPassword: ""
    }

    handleSignup = (e) => {
        e.preventDefault()
        const item = {
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        }
        this.props.signup_user(item)


    }
    render() {

        return (
            <>
                <Nav />
                <div className="flex justify-center align-center">
                    <div className=" d-flex">
                        <div className="m self-center"><span className="text-center text-md">Sign up</span></div>
                        <div className="r">
                            <div className="m">
                                <lable className="">Email</lable>
                                <div><input className="full-w round-sm bg-gray border-gray mt text-md " value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })}></input></div>
                            </div>
                            <div className="m">
                                <lable className="mb">Password</lable>
                                <div><input className="full-w round-sm bg-gray border-gray mt text-md" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })}></input></div>
                            </div>
                            <div className="m">
                                <lable className="mb">Confirm Password</lable>
                                <div><input className="full-w round-sm bg-gray border-gray mt text-md" value={this.state.confirmPassword} onChange={(e) => this.setState({ confirmPassword: e.target.value })}></input></div>
                            </div>
                            <div className="m">
                                <div><button className="full-w round-l bg-red text-white text-bold" onClick={this.handleSignup}>SIGN UP</button>
                                </div>
                            </div >
                            <div className="m text-md">
                                <p className="m">Already have an account ?  <span ><NavLink className="text-red" to="/login">Sign in </NavLink></span></p>
                            </div>

                        </div>

                    </div>
                </div>
            </>
        )
    }
}


const mapStatetoProps = (state) => {
    return {
        state: state
    }
}




export default connect(mapStatetoProps, { signup_user })(Signup)