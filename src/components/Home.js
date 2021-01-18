import React from 'react'
import { connect } from 'react-redux'
import { connect } from 'react-redux'


const Home = (props) => {
    console.log(props.state)
    return (
        <div className="d-flex">
            <div>
                <h4>Hi, </h4>
            </div>

        </div>
    )
}

mapStateToProps = (props) => {
    return {
        state: state
    }
}
export default connect(mapStateToProps, {})(Home)
