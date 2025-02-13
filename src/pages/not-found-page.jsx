import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className='text-center flex flex-col items-center justify-center h-screen'>
            <h1>you prolly tried messing with the url</h1>
            <p>get back pls</p>
            <Link to='/'>click this</Link>
        </div>
    );
};

export default NotFoundPage;