import React from '../node_modules/@types/react';
import { Link } from '../node_modules/react-router-dom';

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