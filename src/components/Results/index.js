import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/util/actions';

function  results (props) {
  const results = props.results.map(result => {
    return (
      <li onClick={() => props.onDeleteResult(result.id)} key={result.id}>
        {result.value}
      </li>
    )
  });
  return (
    <div>
      <button onClick={() => props.onStoreResult(props.count)}>Store Result</button>
        <ul>
          {results}
        </ul>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    results: state.results,
    count: state.count
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onStoreResult: (value) => dispatch({ type: actions.STORE_RESULT, value }),
    onDeleteResult: (id) => dispatch({ type: actions.DELETE_RESULT, id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(results);
