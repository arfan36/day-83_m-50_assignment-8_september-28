import './ExerciseItems.css';
import React from 'react';

const ExerciseItems = ({ product, handleAddToList }) => {
    const { name, age, time, img } = product;
    return (
        <div className="card mb-4 mx-auto" style={{ maxWidth: "350px" }}>
            <div className="row g-0">
                <div className="col-md-5">
                    <div>
                        <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                </div>
                <div className="col-md-7 ">
                    <div onClick={() => handleAddToList(product)} className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h6>For Age: {age}</h6>
                        <h6>Time required: {time}s</h6>
                        <button className='btn btn-outline-info fw-semibold  w-100'>Add to list</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExerciseItems;