import './Header.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <div>
            <h1><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon> Gymnasium Club</h1>
            <h3>Exercise everyday</h3>
        </div>
    );
};

export default Header;