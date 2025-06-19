import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const MenuToggleButton = ({ isOpen, onClick }) => (
    <button
        onClick={onClick}
        className="lg:hidden text-gray-800 focus:outline-none"
        aria-label="Toggle menu"
    >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-xl" />
    </button>
);

export default MenuToggleButton;