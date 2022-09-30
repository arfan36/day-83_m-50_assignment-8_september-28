import './ExerciseDetails.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
const ExerciseDetails = ({ cart }) => {
    console.log(cart);

    let exerciseTime = 0;
    for (const product of cart) {
        exerciseTime = parseInt(exerciseTime) + parseInt(product.time);
    }

    return (
        <div className='container mt-3 position-sticky top-0'>
            {/* owner info ------------------------------------*/}
            <div className='d-flex justify-content-center gap-3 text-center'>
                <div>
                    <img className='img-fluid rounded-5' style={{ width: "50px" }} src="https://images.unsplash.com/photo-1615813967515-e1838c1c5116?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                </div>
                <div>
                    <h5>Arfanur Rahman</h5>
                    <p>
                        <span className='text-danger'><FontAwesomeIcon icon={faLocation}></FontAwesomeIcon> </span>
                        Rangpur, Bangladesh
                    </p>
                </div>
            </div>
            {/* owner weight, height, age -------------------- */}
            <div className='d-flex justify-content-between bg-white p-2 m-2 rounded-3'>
                <div>
                    <h3 className=''>60<span style={{ fontSize: "12px", color: "gray" }}>kg</span></h3>
                    <p style={{ color: "gray", fontSize: "15px" }}>Weight</p>
                </div>
                <div>
                    <h3 className=''>5.5<span style={{ fontSize: "12px", color: "gray" }}>ft</span></h3>
                    <p style={{ color: "gray", fontSize: "15px" }}>Height</p>
                </div>
                <div>
                    <h3 className=''>30<span style={{ fontSize: "12px", color: "gray" }}>yrs</span></h3>
                    <p style={{ color: "gray", fontSize: "15px" }}>Age</p>
                </div>
            </div>

            {/* Add A Break ---------------------------------- */}
            <h5 className='m-2 py-3'>Add A Break</h5>
            <div className='bg-white p-2 m-2 rounded-3 d-flex justify-content-evenly'>
                <button className='btn btn-outline-info rounded-pill ms-2'>10s</button>
                <button className='btn btn-outline-info rounded-pill ms-2'>20s</button>
                <button className='btn btn-outline-info rounded-pill ms-2'>30s</button>
                <button className='btn btn-outline-info rounded-pill ms-2'>40s</button>
            </div>

            {/* Exercise Details ---------------------------- */}
            <h5 className='m-2 py-3'>Exercise Details</h5>
            <div className='d-flex justify-content-around bg-white p-2 m-2 rounded-3'>
                <h6>Exercise time</h6>
                <h6 style={{ color: "gray" }}><span>{exerciseTime}</span> seconds</h6>
            </div>
            <div className='d-flex justify-content-around bg-white p-2 m-2 rounded-3'>
                <h6>Break time</h6>
                <h6 style={{ color: "gray" }}><span>0</span> seconds</h6>
            </div>

            {/* Activity Completed Button -------------------- */}
            <button className='btn btn-secondary btn-outline-info rounded-3 w-100 my-5'>
                Activity Completed
            </button>
        </div>
    );
};

export default ExerciseDetails;