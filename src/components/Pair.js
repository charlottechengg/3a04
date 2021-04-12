import React from 'react'
import PropTypes from 'prop-types'

const Pair = props => {
    return (
        <div className = "pair-container" onKeyDown = {props.handleKeyDown}>
            <div className = "expression">{props.leftExpression}</div>
            <div className = "expression">{props.rightExpression}</div>
        </div>
    )
}

Pair.propTypes = {

}

export default Pair
