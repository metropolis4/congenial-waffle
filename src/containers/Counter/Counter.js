import React from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import Results from '../../components/Results';
import * as actions from '../../store/util/actions';

function counter (props) {
    return (
        <div>
            <CounterOutput />
            <CounterControl label="Increment" clicked={props.onIncrementCounter} />
            <CounterControl label="Decrement" clicked={props.onDecrementCounter}  />
            <CounterControl label="Add 5" clicked={() => props.onAddCounter(5)}  />
            <CounterControl label="Subtract 5" clicked={() => props.onSubtractCounter(5)}  />
            <hr />
            <Results />
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch({ type: actions.INCREMENT }),
        onDecrementCounter: () => dispatch({ type: actions.DECREMENT }),
        onAddCounter:       (value) => dispatch({ type: actions.ADD_COUNT, value }),
        onSubtractCounter:  (value) => dispatch({ type: actions.SUBTRACT_COUNT, value })
    };
}



export default connect(null, mapDispatchToProps)(counter);
