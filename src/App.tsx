import { useState, useEffect } from 'react';
import './App.css';
import App1 from './components/App1';
import App2 from './components/App2';
import './components/App1.css';
import './components/App2.css';

function App() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Use matchMedia for efficient breakpoint detection — fires only when threshold crosses
        const mql = window.matchMedia('(max-width: 768px)');
        setIsMobile(mql.matches);

        const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
        mql.addEventListener('change', handleChange);

        return () => mql.removeEventListener('change', handleChange);
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
