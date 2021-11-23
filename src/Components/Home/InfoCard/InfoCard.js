import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCard.css';

const InfoCard = ({info}) => {
    return (
        <div className="col-md-4 text-white">
            <div className={`d-flex justify-content-center pt-2 info-container info-${info.background}`}>

            <div className="ms-3">
                <FontAwesomeIcon className="info-icon" icon={info.items}/>
            </div>
            <div>
                <h6>{info.title}</h6>
                <small>{info.description}</small>
            </div>
            </div>
        </div>
    );
};

export default InfoCard;