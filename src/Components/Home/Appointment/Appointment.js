import React from 'react';
import './Appointment.css';
import Doctor from '../../../images/doctor-small.png'

const Appointment = () => {
    return (
        <div className="row appointment-container">
            <div className="col-md-5 text-center">
                <img src={Doctor} alt="" />
            </div>
            <div className="col-md-7 pt-5">
                <h2 className="text-secondary">Appointment</h2>
                <h1 className="pt-5">Make an Appointment <br/> Today </h1>
                <p className="pt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, modi quas inventore illum sapiente dignissimos enim nam. Nam laudantium ratione quos odio suscipit velit, veritatis saepe, aut nisi, corrupti tempore. Blanditiis maiores quasi vel dolore.</p>
                <button className="btn-primary">Learn More</button>
            </div>
            
        </div>
    );
};

export default Appointment;