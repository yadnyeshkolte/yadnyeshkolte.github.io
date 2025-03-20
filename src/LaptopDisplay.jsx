import React, { useState, useEffect } from 'react';

// Sample project images - replace with your actual project screenshots
const PROJECT_IMAGES = {
    "crossdocs": "/placeholder-crossdocs-screenshot.png",
    "telegram-bot": "/placeholder-telegram-bot-screenshot.png",
    "guestbook": "/placeholder-guestbook-screenshot.png",
    "default": "/placeholder-default-screen.png"
};

const LaptopDisplay = ({ activeProject }) => {
    const [displayImage, setDisplayImage] = useState(PROJECT_IMAGES.default);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        if (activeProject && PROJECT_IMAGES[activeProject]) {
            setIsTransitioning(true);

            // Short delay to allow transition effect
            const timer = setTimeout(() => {
                setDisplayImage(PROJECT_IMAGES[activeProject]);
                setIsTransitioning(false);
            }, 300);

            return () => clearTimeout(timer);
        }
    }, [activeProject]);

    return (
        <div className="laptop-model">
            <div className="laptop-body">
                {/* Laptop base */}
                <div className="laptop-base"></div>

                {/* Laptop screen */}
                <div className="laptop-screen">
                    <div className="laptop-bezel">
                        <div className={`laptop-display ${isTransitioning ? 'transitioning' : ''}`}>
                            {/* Use a placeholder image since we can't load actual images */}
                            <div className="project-preview">
                                {/* Screen content */}
                                <div className="project-screen-content">
                                    <div className="browser-chrome">
                                        <div className="browser-controls">
                                            <span className="browser-dot red"></span>
                                            <span className="browser-dot yellow"></span>
                                            <span className="browser-dot green"></span>
                                        </div>
                                        <div className="browser-address-bar">
                                            {activeProject === "crossdocs" && "https://github.com/yadnyeshkolte/CrossDocs"}
                                            {activeProject === "telegram-bot" && "https://gist.github.com/yadnyeshkolte/02981d86fcf5e6614c0ebf917a44949a"}
                                            {activeProject === "guestbook" && "https://gist.github.com/yadnyeshkolte/5d095713c84b9f05711c9d0ed1a8080a"}
                                            {!activeProject && "Select a project to view details"}
                                        </div>
                                    </div>
                                    <div className="browser-content">
                                        {!activeProject && (
                                            <div className="default-message">
                                                <h3>Select a project from the sidebar</h3>
                                                <p>Click on any project card to view it on this screen</p>
                                            </div>
                                        )}
                                        {activeProject === "crossdocs" && (
                                            <div className="project-details">
                                                <h3>Cross-platform Markdown Editor</h3>
                                                <p>A Kotlin Compose Multiplatform application with:</p>
                                                <ul>
                                                    <li>Real-time Markdown preview</li>
                                                    <li>Dark/light theme support</li>
                                                    <li>Cross-platform compatibility</li>
                                                    <li>AI-assisted editing features</li>
                                                </ul>
                                            </div>
                                        )}
                                        {activeProject === "telegram-bot" && (
                                            <div className="project-details">
                                                <h3>ESP32-Based ATM-Like Telegram Bot</h3>
                                                <p>An IoT project featuring:</p>
                                                <ul>
                                                    <li>Telegram API integration</li>
                                                    <li>ESP32 microcontroller</li>
                                                    <li>Remote banking transaction simulation</li>
                                                    <li>Multi-language implementation (Java, C++, Python)</li>
                                                </ul>
                                            </div>
                                        )}
                                        {activeProject === "guestbook" && (
                                            <div className="project-details">
                                                <h3>Guestbook Application Deployment</h3>
                                                <p>A DevOps project featuring:</p>
                                                <ul>
                                                    <li>Continuous delivery pipeline with Argo CD</li>
                                                    <li>GitOps principles for Kubernetes</li>
                                                    <li>Docker containerization</li>
                                                    <li>Helm charts for deployment</li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LaptopDisplay;