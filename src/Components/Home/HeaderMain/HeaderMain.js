import React from 'react';
import chair from '../../../images/chair.png'

const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1>Your new Smile <br /> Start from here</h1>
                <h3  className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus sunt placeat dolore. Reiciendis, ratione temporibus!</h3>
                <button className="btn btn-primary">GET APPOINTMENT</button>

            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>

        </main>
    );
};

export default HeaderMain;