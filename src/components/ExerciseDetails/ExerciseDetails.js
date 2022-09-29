import './ExerciseDetails.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
const ExerciseDetails = () => {
    return (
        <div className='container mt-3'>
            {/* owner info start -------------------------------*/}
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
            <div>
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
            </div>
            {/* owner info end -------------------------------*/}
            <h5 className='m-2 py-3'>Add A Break</h5>
            <div className='bg-white p-2 m-2 rounded-3'>
                <button className='btn btn-outline-info rounded-pill'>10s</button>
            </div>
        </div>
    );
};

export default ExerciseDetails;