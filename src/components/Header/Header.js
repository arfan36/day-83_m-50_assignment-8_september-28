import './Header.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <div className='text-center'>
            <h1 className='text-info mt-5'><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon> Gymnasium Club</h1>
            <h3 className='my-4'>Exercise everyday</h3>
        </div>
    );
};

export default Header;