import { useState, useEffect, Dispatch, SetStateAction } from 'react';

// Define a minimal type for certifications if the full structure isn't known yet,
// or use `any` if it's completely generic.  Ideally, this should be specific.
interface Certification {
  [key: string]: any;
}

const subscribers = new Set<Dispatch<SetStateAction<number>>>();
let currentCertGlobal = 0;
let globalTimer: ReturnType<typeof setInterval> | null = null;
let activeInstances = 0;

export const useSharedCarousel = (certifications: Certification[]) => {
    const [currentCert, setCurrentCert] = useState(currentCertGlobal);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const handleCertChange = (index: number) => {
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
    }, [certifications.length, isTransitioning]);

    const handleCertChange = (index: number) => {
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

    return [currentCert, handleCertChange, isTransitioning] as const;
};
