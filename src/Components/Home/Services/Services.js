import React from 'react';
import './Services.css';
import Cavity from '../../../images/cavity.png';
import Whitening from '../../../images/whitening.png';
import  Fluoride from '../../../images/fluoride.png';
import ServiceInfo from '../ServiceInfo/ServiceInfo';
const serviceInfo = [
    {
        image: Cavity,
        items: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sint deleniti quasi error dolore sapiente!'
    },
    {
        image: Whitening,
        items: 'Teath Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sint deleniti quasi error dolore sapiente!'
    },
    {
        image: Fluoride,
        items: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sint deleniti quasi error dolore sapiente!'
    }
]

const Services = () => {
    return (
        <>
        <div className="text-center service-head">
            <h5 className="text-secondary">Our Services</h5>
            <h1>Services We Provide</h1>
        </div>
        <div className="row">
            <div className="d-flex justify-content-center">

            {
                serviceInfo.map(service =><ServiceInfo service={service}></ServiceInfo>)
            }

        </div>
        </div>
        </>
    );
};

export default Services;