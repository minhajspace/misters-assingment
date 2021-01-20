import React from 'react'
import Nav from './Nav'
import { NavLink, } from 'react-router-dom'
import { connect } from 'react-redux'
import Cookies from 'universal-cookie';
const cookies = new Cookies();


class Login extends React.Component {
    constructor(props) {
        super(props)
        const email = cookies.get("email")
        if (email) this.props.history.push('/dashboard')
        this.state = {
            email: "",
            password: "",
            error: {}
        }
    }

    handleLogin = () => {

        const { authData } = this.props.authData
        const { email, password } = this.state
        authData.map((value) => {
            console.log(email, value.email)
            if (value.email === email) {
                if (value.password === password) {
                    cookies.set('email', email);
                    this.props.history.push('/dashboard')
                } else { this.setState(pervState => ({ error: { ...pervState.error, password: "Incorrent Password" } })) }
            } else { this.setState(pervState => ({ error: { ...pervState.error, email: "Email is not Registerd" } })) }
        })
    }
    render() {

        return (
            <>
                <Nav />
                <div className="flex justify-center align-center">
                    <div className=" d-flex">
                        <div className="m self-center"><span className="text-center text-md extra-bold">Login</span></div>
                        <div className="r">
                            <div className="m ">
                                <lable className=" mb">Email</lable>
                                <div>
                                    <input
                                        className="full-w round-sm bg-gray border-gray outline-none"
                                        value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })}
                                        type="email"
                                        required
                                        name=""
                                    />
                                    <p className="mt text-red">{this.state.error.email}</p>
                                </div>
                            </div>
                            <div className="m">
                                <lable className="mb">Password</lable>
                                <div><input
                                    className="full-w round-sm bg-gray border-gray outline-none"
                                    type="password"
                                    value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })}
                                    required
                                />
                                    <p className="mt text-red">{this.state.error.password}</p>
                                </div>
                            </div>
                            <div className="m">
                                <div><button className="full-w round-l bg-red text-white text-bold outline-none border-none" onClick={this.handleLogin}>LOGIN</button>
                                </div>
                            </div >
                            <div className="m text-md">
                                <p className="m">Don't have an account ?<span><NavLink className="text-red text-underline" to="/signup">Sign up </NavLink></span></p>
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
        authData: state.signupReducer
    }
}
export default connect(mapStatetoProps)(Login)
