import React from 'react';
import './NavBar.css';

function NavBar(props) {
    return (
        <div>
            <ul className= 'nav'>
                <a href='#'>Suspenso</a>
                <a href='#'>Drama</a>
                <a href='#'>Accion</a>
            </ul>
            Este es mi primer componente
        </div>
    );
}

export default NavBar;