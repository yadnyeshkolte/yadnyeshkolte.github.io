import { useState, useEffect } from 'react';
import './App.css';
import App1 from './components/App1.jsx';
import App2 from './components/App2.jsx';
import './components/App1.css';
import './components/App2.css';

function App() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Function to check if device is mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Initial check
        checkMobile();

        // Add event listener for window resize
        window.addEventListener('resize', checkMobile);

        // Cleanup
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Modified App1 for mobile that doesn't use the peek effect
    const MobileApp1 = () => {
        return (
            <div className="mobile-app1-container">
                <App1 />
            </div>
        );
    };

    return (
        <div className="container">
            {isMobile ? <MobileApp1 /> : (
                <>
                    <App1 />
                    <App2 />
                </>
            )}
        </div>
    );
}

export default App;