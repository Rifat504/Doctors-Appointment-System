import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock,faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
const infoData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        items: faClock,
        background: 'Primary'
    },
    {
        title: 'Our Address',
        description: 'Khajura Bazar, Jashore',
        items: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Call us Now',
        description: '+8801311918687',
        items: faPhone,
        background: 'Primary'
    },

]

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
            {
                infoData.map(info =><InfoCard info={info}></InfoCard>)
            }
            </div>
        </section>
    );
};

export default BusinessInfo;