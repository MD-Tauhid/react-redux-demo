import React from 'react';
import './loader.css';

const Loader = () => {
    return (
        <div className='w-full backdrop-blur-lg sticky top-0 h-[100vh] flex items-center overflow-hidden'>
            <div className="loader">
                <div className="face">
                    <div className="circle"></div>
                </div>
                <div className="face">
                    <div className="circle"></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;