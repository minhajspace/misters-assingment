import React from 'react'
import logo from '../image/logo.svg'
import cart from '../image/supermarket.svg'
import user from '../image/user.svg'


class Nav extends React.Component {
    render() {
        return (
            <div className="flex">
                <div className="main-logo border mr ml pt">
                    <img src={logo} alt="logo" />
                </div>
                <div className="">
                    <nav>
                        <ul className="nav-li nav-a ">
                            <li className=""><a href="#">HOME</a></li>
                            <li><a href="#">AYURVEDA</a></li>
                            <li><a href="#">BLOG</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">ABOUT</a></li>
                        </ul>

                    </nav>
                </div>
                <div className="main-logo border mr ml pt">
                    <span className="my-m">  <img src={cart} alt="supermarket" />   </span>
                    <span className="my-m"><img src={user} alt="user" /> </span>
                </div>
                <div className="main-logo border mr ml pt d-flex">
                    <a className=" my-m  btn bg-red text-white" href="#">SHOP</a>
                </div>

            </div>


        )
    }
}

export default Nav