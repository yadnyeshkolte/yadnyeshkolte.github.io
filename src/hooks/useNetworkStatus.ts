import { useState, useEffect } from 'react';

interface NetworkInfo {
    isSlowConnection: boolean;
    effectiveType: string;
    saveData: boolean;
}

// Extend Navigator interface for Network Information API
interface NavigatorWithConnection extends Navigator {
    connection?: {
        effectiveType: string;
        saveData: boolean;
        addEventListener: (type: string, listener: () => void) => void;
        removeEventListener: (type: string, listener: () => void) => void;
    };
}

export function useNetworkStatus(): NetworkInfo {
    const [networkInfo, setNetworkInfo] = useState<NetworkInfo>({
        isSlowConnection: false,
        effectiveType: '4g',
        saveData: false,
    });

    useEffect(() => {
        const nav = navigator as NavigatorWithConnection;
        const connection = nav.connection;

        if (!connection) {
            return;
        }

        const updateNetworkInfo = () => {
            const effectiveType = connection.effectiveType || '4g';
            const saveData = connection.saveData || false;
            const isSlowConnection =
                effectiveType === 'slow-2g' ||
                effectiveType === '2g' ||
                effectiveType === '3g' ||
                saveData;

            setNetworkInfo({
                isSlowConnection,
                effectiveType,
                saveData,
            });
        };

        updateNetworkInfo();
        connection.addEventListener('change', updateNetworkInfo);

        return () => {
            connection.removeEventListener('change', updateNetworkInfo);
        };
    }, []);

    return networkInfo;
}
