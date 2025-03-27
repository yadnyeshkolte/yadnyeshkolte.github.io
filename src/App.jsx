import { useState, useEffect } from 'react';
import './App.css';
import App1 from './App1.jsx';
import App2 from './App2.jsx';
import './App1.css';
import './App2.css';
import LoadingScreen from './LoadingScreen.jsx';

function App() {
    const [isMobile, setIsMobile] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Function to check if device is mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Initial check
        checkMobile();

        // Add event listener for window resize
        window.addEventListener('resize', checkMobile);

        const loadResources = async () => {
            const imagePromises = [
                // Add paths to critical images that need to be loaded
                import('./assets/yadnyesh.jpg'),
                import('./assets/keyboardlight.png'),
                import('./assets/keyboarddark.png'),
                import('./assets/certifications/aws-educate-introduction-to-cloud-101.png'),
                import('./assets/certifications/github-foundations.png'),

                // Add more image imports as needed
            ];

            const modelPromise = import('./Model.jsx');
            const projectDataPromise = import('./projectsData.js');
            const laptopModel = import('/public/scene.glb');

            try {
                // Wait for all critical resources to load
                await Promise.all([
                    ...imagePromises,
                    modelPromise,
                    projectDataPromise,
                    laptopModel
                ]);

                // Minimum loading time to ensure a smooth experience
                await new Promise(resolve => setTimeout(resolve, 1500));

                // Set loading to false
                setIsLoading(false);
            } catch (error) {
                console.error('Error loading resources:', error);
                setIsLoading(false);
            }
        };

        loadResources();

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
        <LoadingScreen isLoading={isLoading}>
            <div className="container">
                {isMobile ? <MobileApp1 /> : (
                    <>
                        <App1 />
                        <App2 />
                    </>
                )}
            </div>
        </LoadingScreen>
    );
}

export default App;