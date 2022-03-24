import React from 'react'
import PropTypes from 'prop-types'

const TotalPrice = (sumOfItems) => {

    return (
        <span>0 SEK</span>
    )
}

TotalPrice.propTypes = {
    sumOfItems: PropTypes.string
}

export default TotalPrice