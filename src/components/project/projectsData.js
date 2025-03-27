// In a new file called projectsData.js
import crossdocsImage from '../../assets/project-section-light-theme/1.png';
import structviz3dImage from '../../assets/project-section-light-theme/2.png';
import opensourcepenImage from '../../assets/project-section-light-theme/3.png';
import flagsImage from '../../assets/project-section-light-theme/4.png';
import lensImage from '../../assets/project-section-light-theme/5.png';
import imfapiImage from '../../assets/project-section-light-theme/6.png';
import telegramBotImage from '../../assets/project-section-light-theme/7.png';
import structviz3dDesktopImage from '../../assets/project-section-light-theme/8.png';

import crossdocsDarkImage from '../../assets/project-section-dark-theme/1dark.png';
import structviz3dDarkImage from '../../assets/project-section-dark-theme/2dark.png';
import opensourcepenDarkImage from '../../assets/project-section-dark-theme/3dark.png';
import flagsDarkImage from '../../assets/project-section-dark-theme/4dark.png';
import lensDarkImage from '../../assets/project-section-dark-theme/5dark.png';
import imfapiDarkImage from '../../assets/project-section-dark-theme/6dark.png';
import telegramBotDarkImage from '../../assets/project-section-dark-theme/7dark.png';
import structviz3dDesktopDarkImage from '../../assets/project-section-dark-theme/8dark.png';
import defaultIntroImage from '../../assets/project-section-light-theme/default-screen-light.png';
import defaultIntroDarkImage from '../../assets/project-section-dark-theme/default-screen-dark.png';

const projectsData = {
    'default': {
        id: 'default',
        title: 'Projects',
        summary: 'Crafting code in the comfort of Ubuntu, with GNOME\'s intuitive interface as my primary development companion. While occasionally exploring Fedora, my heart belongs to Ubuntu\'s seamless blend of functionality and user-friendly design. These projects showcase my journey through Cross-Platform development, embracing open-source philosophy and elegant simplicity.',
        image: defaultIntroImage,
        darkImage: defaultIntroDarkImage,
        links: [
            { type: 'github', label: 'Github Profile', url: 'https://github.com/yadnyeshkolte' },
            { type: 'demo', label: 'Jekyll Blog', url: 'https://yadnyeshkolte.github.io/blog/' },
            { type: 'package', label: 'Packages', url: 'https://github.com/yadnyeshkolte?tab=packages' },
            { type: 'gitlab', label: 'GitLab Profile', url: 'https://gitlab.com/yadnyeshkolte' },
            { type: 'box', label: 'Source Code', url: 'https://github.com/yadnyeshkolte/yadnyeshkolte.github.io' },

        ],
        features: [
            'Spanning web, mobile, and desktop applications',
            'Multi-Platform Development in cross-platform technologies',
            'Continuous Learning and Constantly exploring new technologies and frameworks',
            'DevOps and CI/CD - Implementing modern development and deployment practices'
        ]
    },
    'crossdocs': {
        id: 'crossdocs',
        title: 'CrossDocs - Cross-platform Markdown Editor',
        summary: 'A powerful and lightweight cross-platform Markdown editor with real-time preview and AI assistance, built with Compose Multiplatform.',
        tags: ['Kotlin', 'Compose Multiplatform', 'AI', 'Markdown'],
        image: crossdocsImage,
        darkImage: crossdocsDarkImage,
        links: [
            { type: 'github', label: 'View Code', url: 'https://github.com/yadnyeshkolte/CrossDocs' },
            { type: 'releases', label: 'Releases', url: 'https://github.com/yadnyeshkolte/CrossDocs/releases/tag/v1.0.0' }
        ],
        features: [
            'Real-time Markdown Preview - See your changes instantly',
            'Dark/Light Theme - Easy on your eyes, day and night',
            'AI Assistant - Powered by Google\'s Gemini AI',
            'Cross-Platform - Works on all major platforms (Windows, macOS, Linux, Android)',
            'Lightweight & Efficient - High performance, low resource usage',
            'In-App Markdown Guide - Detailed reference for developers'
        ]
    },
    'structviz3d': {
        id: 'structviz3d',
        title: 'StructViz3D',
        summary: 'Web-based 3D structural engineering model viewer for visualizing and interacting with STL and GLTF files directly in the browser.',
        tags: ['Three.js', 'React', 'WebGL', '3D Visualization', 'Engineering'],
        image: structviz3dImage,
        darkImage: structviz3dDarkImage,
        links: [
            { type: 'github', label: 'Source Code', url: 'https://github.com/yadnyeshkolte/structviz3d-react' },
            { type: 'demo', label: 'Live Demo', url: 'https://yadnyeshkolte.github.io/structviz3d-react/' },
            { type: 'video', label: 'Video Demo', url: 'https://youtu.be/8gEaS0dXfAg' },
            { type: 'github', label: 'API Repository', url: 'https://github.com/yadnyeshkolte/structviz3d-api' }
        ],
        features: [
            'High-performance 3D rendering with Three.js',
            'Multiple file format support (STL, GLTF/GLB)',
            'Advanced camera controls with orthographic and perspective modes',
            'Comprehensive viewing options including wireframe and sketch rendering',
            'Flexible lighting system and model orientation controls',
            'Responsive design for desktop and mobile devices'
        ]
    },
    'flutter_app': {
        id: 'flutter_app',
        title: 'Flutter Prototype E-Commerce App',
        summary: 'A cross-platform e-commerce prototype application built with Flutter using the MVVM architecture pattern, demonstrating best practices for state management, navigation, data persistence, and interactive user experiences.',
        tags: ['Flutter', 'Dart', 'MVVM', 'E-Commerce', 'Mobile'],
        image: opensourcepenImage, // You'll need to replace with your actual image variable
        darkImage: opensourcepenDarkImage,
        links: [
            { type: 'github', label: 'Repository', url: 'https://github.com/yadnyeshkolte/opensourcepen' },
            { type: 'gitlab', label: 'GitLab', url: 'https://gitlab.com/yadnyeshkolte/opensourcepen' }
        ],
        features: [
            'Interactive 3D Onboarding - Multi-step process with smooth transitions and 3D model rendering',
            'Authentication System - User login with credential validation and session persistence',
            'Product Management - Catalog browsing with images and details',
            'Shopping Cart - Real-time updates and persistent between sessions',
            'Order Management - Placement, history tracking, and status updates',
            'MVVM Architecture - Clean separation of models, views, and viewmodels',
            'Provider State Management - Efficient state updates with selective listeners'
        ]
    },
    'svg-country-flags': {
        id: 'svg-country-flags',
        title: 'SVG Country Flags 2x1',
        summary: 'A lightweight, flexible package for working with detailed country flags in JavaScript applications. Provides flag SVGs, emoji, and country data with 2:1 aspect ratio.',
        tags: ['JavaScript', 'SVG', 'React', 'Vue', 'TypeScript', 'Frontend'],
        image: flagsImage, // You'll need to update this to an appropriate image
        darkImage: flagsDarkImage,
        links: [
            { type: 'github', label: 'Repository', url: 'https://github.com/yadnyeshkolte/country-flags-svg-2x1' },
            { type: 'demo', label: 'Live Demo', url: 'https://yadnyeshkolte.github.io/svg-country-flags-2x1/' },
            { type: 'npm', label: 'NPM Package', url: 'https://www.npmjs.com/package/svg-country-flags-2x1' }
        ],
        features: [
            'Consistent 2:1 aspect ratio for all flags',
            'Framework integration (React, Vue)',
            'TypeScript support',
            'Flag emoji conversion',
            'Country code validation',
            'Flag search and filtering'
        ]
    },
    'guestbook': {
        id: 'guestbook',
        title: 'Guestbook App Deployment',
        summary: 'Continuous delivery pipeline with Argo CD and GitOps for a modern, scalable guestbook application.',
        tags: ['DevOps', 'Kubernetes', 'Docker', 'ArgoCD', 'GitOps'],
        image: lensImage,
        darkImage: lensDarkImage,
        links: [
            { type: 'github', label: 'Gist', url: 'https://gist.github.com/yadnyeshkolte/5d095713c84b9f05711c9d0ed1a8080a' },
        ],
        features: [
            'GitOps-based deployment workflow',
            'Automated CI/CD pipeline',
            'Kubernetes-native architecture',
            'Infrastructure as Code with Terraform',
            'Automatic rollbacks on failed deployments'
        ]
    },
    'imf-gadgets': {
        id: 'imf-gadgets',
        title: 'IMF Gadget Management System API',
        summary: 'A comprehensive API for tracking and managing mission gadgets with authentication, status tracking, and self-destruct capabilities.',
        tags: ['Node.js', 'Express.js', 'PostgreSQL', 'Sequelize', 'JWT', 'REST API'],
        image: imfapiImage, // You'll need to update this with your actual image variable
        darkImage: imfapiDarkImage,
        links: [
            { type: 'github', label: 'Repository', url: 'https://github.com/yadnyeshkolte/imf-gadgets-api' },
            { type: 'github', label: 'Frontend Repo', url: 'https://github.com/yadnyeshkolte/imf-gadgets-dashboards' },
            { type: 'website', label: 'Web Application', url: 'https://yadnyeshkolte.github.io/imf-gadgets-dashboards/' },
            { type: 'api', label: 'API Documentation', url: 'https://documenter.getpostman.com/view/41932986/2sAYX9kzTN' }
        ],
        features: [
            'JWT-based authentication system',
            'Random codename generation for gadgets',
            'Mission success probability calculation',
            'Status tracking (Available, Deployed, Destroyed, Decommissioned)',
            'Soft delete implementation with decommission timestamps',
            'Self-destruct sequence for gadgets'
        ]
    },
    'esp32-telegram-atm': {
        id: 'esp32-telegram-atm',
        title: 'ESP32 ATM Telegram Bot',
        summary: 'An ATM-like system using ESP32 microcontroller with Telegram bot interface and Google Sheets integration for banking operations.',
        tags: ['ESP32', 'Telegram Bot', 'C++', 'Embedded', 'IoT', 'Google Sheets'],
        image: telegramBotImage, // You may want to replace this with a relevant image
        darkImage: telegramBotDarkImage,
        links: [
            { type: 'github', label: 'Gist', url: 'https://gist.github.com/yadnyeshkolte/02981d86fcf5e6614c0ebf917a44949a' },
            { type: 'youtube', label: 'Demo Video', url: 'https://youtube.com/watch?v=1mQ0rEVkSAc' },
            { type: 'blog', label: 'Blog', url: 'https://yadnyeshkolte.github.io/blog/posts/esp32-atm-telegrambot-project/' }
        ],
        features: [
            'User authentication with OTP and username/password',
            'Balance inquiry and transaction history',
            'Money withdrawal with note denomination management',
            'Money deposit functionality',
            'Touch-based input interface',
            'Google Sheets integration for transaction logging'
        ]
    },
    'structviz3ddesktop': {
        id: 'structviz3ddesktop',
        title: 'StructViz3D Desktop',
        summary: 'A desktop application for 3D structure visualization built on .NET 8.0 with WPF and WebView2.',
        tags: ['C#', 'WPF', 'WebView2', 'WebGL', '3D Visualization', '.NET 8.0'],
        image: structviz3dDesktopImage,
        darkImage: structviz3dDesktopDarkImage,
        links: [
            { type: 'github', label: 'Source Code', url: 'https://github.com/yadnyeshkolte/StructViz3DDesktop' },
            { type: 'youtube', label: 'Demo Video', url: 'https://youtu.be/8gEaS0dXfAg' },
            { type: 'release', label: 'Download', url: 'https://github.com/yadnyeshkolte/StructViz3DDesktop/releases' }
        ],
        features: [
            'Intuitive interface for visualizing 3D models',
            'Support for STL file format',
            'Hybrid architecture combining native C# with web-based rendering',
            'Secure file system operations using C# backend',
            'Interactive 3D manipulation capabilities',
            'Modern UI with native desktop application feel'
        ]
    }
};

export default projectsData;