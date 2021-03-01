import React from 'react';
import './Header.css';
import Logo from '../../logo.png';
const Header = () => {
    return (
        <div className="text-center header">
            <img src={Logo} width="100px" alt=""/>
            <h3 className="p-2">UEFA Champions League </h3>
        </div>
    );
};

export default Header;