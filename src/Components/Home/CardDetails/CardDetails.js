import React from 'react';

const CardDetails = ({card}) => {
    return (
        <div className='col-md-4'>
        <div className='card shadow mr-5' style={{border:'0px',width:'18rem'}}>
            <div className='card-body'>
                <p className='card-text'>{card.description}</p>
            </div>
            <div className=' card-footer d-flex  align-items-center'>
                    <img className='mx-3' src={card.image} alt="" width='60'/>
                <div>
                    <h5>{card.name}</h5>
                    <small>{card.place}</small>
                </div>
            </div>
        </div>
    </div>
    );
};

export default CardDetails;