import React from 'react';
import BookingForm from '../BookingForm/BookingForm'

const BookingCard = ({ booking,date }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className='col-md-4 mb-5'>
            <div className="card p-3 shadow" style={{ border: '0px' }}>
                <div className="card-body text-center">
                    <h5 className="card-title text-brand">{booking.subject}</h5>
                    <h6>{booking.visitingHour}</h6>
                    <p>{booking.totalSpace} SPACES AVAILABLE</p>
                    <button onClick={openModal} className="btn btn-brand text-uppercase">Book Appointment</button>
                    {/* <AppointmentForm modalIsOpen={modalIsOpen} appointmentOn={booking.subject} closeModal={closeModal} date={date}></AppointmentForm> */}
                    <BookingForm modalIsOpen={modalIsOpen} bookingTitle={booking.subject} closeModal={closeModal} date={date}></BookingForm>
    
                </div>
            </div>
        </div>
    );
};

export default BookingCard;