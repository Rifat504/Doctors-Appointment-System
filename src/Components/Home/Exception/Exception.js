import React from 'react';
import './Exception.css';
import Treatment from '../../../images/treatment.png'

const Exception = () => {
    return (
        <>
        <div className="row pt-5">
        <div className="col-md-6 text-center">
            <img src={Treatment} className="img-thumbnail imgSize" alt="" />
        </div>
        <div className="col-md-6">
            <h1 className="pt-5">Exceptional Dental <br /> Care on Your Terms</h1>
            <p className="pt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt rerum minima esse facere ipsam quod omnis ipsum incidunt voluptatum voluptas aliquam inventore eum alias dignissimos autem accusantium sit nostrum, voluptates doloremque iste provident illo. Quasi veritatis rerum sit quisquam aliquid. Ratione a eum culpa sunt asperiores nisi iusto recusandae officiis maiores corporis. Eligendi, velit. Asperiores debitis autem omnis quis, quisquam ut! Nulla iusto rerum repellat cumque beatae libero, ad modi, iure labore architecto alias perferendis eveniet vero incidunt ratione nisi earum deserunt iste quos vel dignissimos illo autem itaque quia? Ratione, expedita. Reiciendis animi cum dolores amet dolorem facere aperiam?</p>
            <button className="btn btn-primary mt-1">Learn More</button>

        </div>
        </div>
        </>
    );
};

export default Exception;