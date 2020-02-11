import React from 'react';

import './Card.css';

const Card = ({ title, children }) => {
    return (
        <div className="card">
            <div className="card__header">
                <h1 className="card__title">
                    {title}
                </h1>
            </div>
            <div className="card__content">
                {children}
            </div>
        </div>
    );
}

export default Card;