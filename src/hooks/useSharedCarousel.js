import { useState, useEffect } from 'react';

const subscribers = new Set();
let currentCertGlobal = 0;
let globalTimer = null;
let activeInstances = 0;

export const useSharedCarousel = (certifications) => {
    const [currentCert, setCurrentCert] = useState(currentCertGlobal);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        // Add subscriber
        subscribers.add(setCurrentCert);
        activeInstances++;

        // Ensure initial state synchronization
        setCurrentCert(currentCertGlobal);

        // Set up timer only for the first instance
        if (activeInstances === 1) {
            globalTimer = setInterval(() => {
                const nextCert = (currentCertGlobal + 1) % certifications.length;
                handleCertChange(nextCert);
            }, 10000);
        }

        // Cleanup function
        return () => {
            subscribers.delete(setCurrentCert);
            activeInstances--;

            // Clear timer when last instance unmounts
            if (activeInstances === 0 && globalTimer) {
                clearInterval(globalTimer);
                globalTimer = null;
            }
        };
    }, [certifications.length]);

    const handleCertChange = (index) => {
        if (index >= 0 && index < certifications.length && !isTransitioning) {
            setIsTransitioning(true);

            // Delay actual change to allow fade-out
            setTimeout(() => {
                currentCertGlobal = index;
                subscribers.forEach(setter => setter(index));

                // Allow fade-in
                setTimeout(() => {
                    setIsTransitioning(false);
                }, 300);
            }, 150);
        }
    };

    return [currentCert, handleCertChange, isTransitioning];
};