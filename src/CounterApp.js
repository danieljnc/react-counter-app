import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);  

  return (
      <>
        <h1>CounterApp</h1>
        <h2>{ counter }</h2>

        <button onClick={ () => setCounter(counter + 1) }>+1</button>
        <button onClick={ () => setCounter(value) }>Reset</button>
        <button onClick={ () => setCounter(counter - 1) }>-1</button>
      </>
    
  )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

CounterApp.defaultProps = {
    value: 0,
}

export default CounterApp