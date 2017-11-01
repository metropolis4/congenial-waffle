import React from 'react';
import { connect } from 'react-redux';

import './CounterOutput.css';

const counterOutput = (props) => {
    return (
        <div className="CounterOutput">
            Current Counter: {props.count}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        count: state.count
    };
}

export default connect(mapStateToProps)(counterOutput);
