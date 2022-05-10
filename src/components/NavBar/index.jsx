import React from 'react';
import CartWidget from '../CartWidget';
import './navbar.css';


function NavBar(props) {
    return (
        <div className="container">
            <div className='navbar'>
                <ul>
                    <li><a href='#'>Inicio</a></li>
                    <li><a href='#'>Carrito</a></li>
                    <li><a href='#'>Sobre Nosotros</a></li>
                </ul>
                <CartWidget/>
            </div>
        </div>
    );
}

export default NavBar;