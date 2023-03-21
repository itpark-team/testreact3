import React from 'react';
import cl from './Header.module.css';

const Header = () => {
    return (
        <div>
            <h1 className={cl.backface}>Заголовок</h1>
        </div>
    );
};

export default Header;