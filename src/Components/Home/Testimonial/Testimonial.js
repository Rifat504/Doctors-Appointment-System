import React from 'react';
import Doctor from '../../../images/doctor.png';
import CardDetails from '../CardDetails/CardDetails';
const cardDetails = [
    {
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis dolorem quae debitis provident exercitationem quos rerum voluptate incidunt, ducimus, harum hic, laborum doloremque officia? Saepe?',
        image: Doctor,
        name: 'Dr. Hashem',
        place: 'California'
    },
    {
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis dolorem quae debitis provident exercitationem quos rerum voluptate incidunt, ducimus, harum hic, laborum doloremque officia? Saepe?',
        image: Doctor,
        name: 'Dr. Hashem',
        place: 'California'
    },
    {
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis dolorem quae debitis provident exercitationem quos rerum voluptate incidunt, ducimus, harum hic, laborum doloremque officia? Saepe?',
        image: Doctor,
        name: 'Dr. Hashem',
        place: 'California'
    }
]

const Testimonial = () => {
    return (
        <>
        <div>
            <h2 className="text-secondary pt-5">Testimonial</h2>
            <h1>Whats our patients <br/> Says</h1>
        </div>
        <div className="d-flex justify-content-center">
        <div className="row mt-5">
            {
                cardDetails.map(card => <CardDetails card={card}></CardDetails>)
            }
        </div>
        </div>
        
        </>
    );
};

export default Testimonial;