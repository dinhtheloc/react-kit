import React from 'react';
import { connect } from "react-redux"
import {
    increaseCounter,
    decreaseCounter,
} from "../../redux/Counter/counter.actions";

const Home = (props) => {
    return (
        <div className="App">
            <div>Count: {props.count}</div>
            <button className="bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 text-white font-semibold h-12 px-6 rounded-lg w-full sm:w-auto" onClick={() => props.increaseCounter()}>Increase Count</button>

            <button className="bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 text-white font-semibold h-12 px-6 rounded-lg w-full sm:w-auto" onClick={() => props.decreaseCounter()}>Decrease Count</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        count: state.counter.count,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increaseCounter: () => dispatch(increaseCounter()),

        decreaseCounter: () => dispatch(decreaseCounter()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

