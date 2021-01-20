import React from 'react'
import logo from '../image/logo.svg'
import cart from '../image/supermarket.svg'
import user from '../image/user.svg'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Cookies from 'universal-cookie';
const cookies = new Cookies();


const Nav = () => {
    const history = useHistory()
    const email = cookies.get("email")

    const handleLogout = () => {
        cookies.remove("email")
        history.push('/')
    }
    return (
        <div className="flex ">
            <div className="mr-l  ">
                <img className="" src={logo} alt="logo" />
            </div>
            <div className="mr">
                <nav>
                    <ul className="nav-li  ">
                        <li className=""><a href="#">HOME</a></li>
                        <li><a href="#">AYURVEDA</a></li>
                        <li><a href="#">BLOG</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">ABOUT</a></li>
                    </ul>
                </nav>
            </div>
            <div className="mr ">
                <span className="mr">  <img src={cart} alt="supermarket" />   </span>
                <span className=""><img src={user} alt="user" /> </span>
            </div>
            {!email && <div className="  ">
                <button className="btn bg-red outline-none text-white text-md border-none round-l">SHOP</button>
            </div>}
            {email && <div className="  ">
                <button onClick={handleLogout} className="btn bg-red outline-none text-white text-md border-none round-l">LOGOUT</button>
            </div>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        authData: state.authData
    }
}

export default connect(mapStateToProps, {})(Nav)