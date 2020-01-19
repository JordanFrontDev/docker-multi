import React from 'react';
import { Link } from 'react-router-dom';

const OtherPage = () => {
    return (
        <div>
            Im other OtherPage
            <Link to='/'>
                Go back home now
            </Link>
        </div>
    )
}

export default OtherPage;