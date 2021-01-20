import React from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'
import Cookies from 'universal-cookie';
const cookies = new Cookies();



const Dashboard = (props) => {

    const email = cookies.get("email")
    return (
        <>
            <Nav />
            <div className="d-flex">
                <div>
                    <h4 className="text-center">Hi, {email}</h4>
                    <h3>Welcome to Mister's Profile</h3>
                </div>

            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

export default connect(mapStateToProps, {})(Dashboard)
