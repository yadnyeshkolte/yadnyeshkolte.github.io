import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ isLoading, children }) => {
    return (
        <>
            {isLoading ? (
                <div className="loading-screen">
                    <div className="loading-spinner"></div>
                    <p>Loading Portfolio...</p>
                </div>
            ) : (
                children
            )}
        </>
    );
};

export default LoadingScreen;