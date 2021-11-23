import React from 'react';
import Services from '../Services/Services';

const ServiceInfo = ({service}) => {
    return (
        <div className="text-center ms-5 pt-5">
           <img src={service.image} alt="" />
           <h2>{service.items}</h2>
           <p>{service.description}</p>
        </div>
    );
};

export default ServiceInfo;