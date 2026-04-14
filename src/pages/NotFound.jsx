import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center py-20">
            <div className="mb-8">
            
                <div className="text-9xl font-extrabold text-[#1B4332] opacity-10 leading-none">
                    404
                </div>
                <h2 className="text-3xl md:text-4xl font-bold -mt-10 text-[#1B4332]">
                    Oops! Connection Lost.
                </h2>
            </div>

            <p className="max-w-md text-gray-500 mb-10 text-lg">
                We couldn't find the page you're looking for. It might have been moved or doesn't exist anymore.
                Don't worry, your friendship data is still safe!
            </p>

            <Link
                to="/"
                className="px-8 py-3 bg-[#2D6A4F] text-white rounded-sm font-semibold hover:bg-[#1B4332] transition-colors shadow-sm"
            >
                Back To Home
            </Link>
        </div>

    );
};

export default NotFound;