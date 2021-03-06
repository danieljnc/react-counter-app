import React from 'react';
import PropTypes from 'prop-types';

const FirstApp = ({ greet, subtitle }) => {
    
    return (
        <>
            <h1>{ greet }</h1>
            <p>{ subtitle }</p>
        </>        
    );
}

FirstApp.propTypes = {
    greet: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    subtitle: 'My First Application in React'
}

export default FirstApp;