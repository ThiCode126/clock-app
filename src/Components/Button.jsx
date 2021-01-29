import React from 'react'

import ArrowUp from '../assets/icon-arrow-up.svg';

const Button = ({ isMore, onToggleMore }) => {

    const moreOrLess = isMore ? "less" : "more"

    return (
        <div className="btn-more" onClick={onToggleMore}>
            <span className="text">
                {
                    moreOrLess
                }
            </span>
            <img className={`icon ${moreOrLess}`} src={ArrowUp} alt="icon" />
        </div>
    )
}

export default Button