// In a new file called projectsData.js
import crossdocsImage from './assets/1.png';
import telegramBotImage from './assets/2.png';
import guestbookImage from './assets/3.png';
import githubImage from './assets/4.png';
import lensImage from './assets/5.png';
import blackgithubImage from './assets/6.png';
import blacklensImage from './assets/7.png';

const projectsData = {
    'crossdocs': {
        id: 'crossdocs',
        title: 'Cross-platform Markdown Editor Mobile App',
        summary: 'Kotlin Compose Multiplatform app with real-time preview and AI assistance for Markdown editing across platforms.',
        tags: ['Kotlin', 'Multiplatform', 'AI', 'Markdown'],
        image: crossdocsImage,
        links: [
            { type: 'github', label: 'View Code', url: 'https://github.com/yourusername/crossdocs' },
            { type: 'live', label: 'Live Demo', url: 'https://your-demo-url.com' },
            { type: 'releases', label: 'Download', url: 'https://github.com/yourusername/crossdocs/releases' }
        ],
        features: [
            'Real-time preview of markdown content',
            'AI-powered writing assistance',
            'Cross-platform compatibility (macOS, Windows, Linux)',
            'Syntax highlighting and formatting tools',
            'Cloud synchronization for documents'
        ]
    },
    'telegram-bot': {
        id: 'telegram-bot',
        title: 'ESP32-Based Telegram Bot',
        summary: 'ATM-like functionality using microcontroller integration with Telegram for remote control and monitoring.',
        tags: ['IoT', 'Java', 'Python', 'ESP32', 'Telegram API'],
        image: telegramBotImage,
        links: [
            { type: 'github', label: 'Source Code', url: 'https://github.com/yourusername/telegram-bot' },
            { type: 'demo', label: 'Video Demo', url: 'https://youtube.com/your-demo' }
        ],
        features: [
            'Secure authentication system',
            'Real-time transaction processing',
            'Integration with microcontrollers for physical interactions',
            'Push notifications for status updates',
            'Low power consumption optimization'
        ]
    },
    'guestbook': {
        id: 'guestbook',
        title: 'Guestbook App Deployment',
        summary: 'Continuous delivery pipeline with Argo CD and GitOps for a modern, scalable guestbook application.',
        tags: ['DevOps', 'Kubernetes', 'Docker', 'ArgoCD', 'GitOps'],
        image: guestbookImage,
        links: [
            { type: 'github', label: 'Repository', url: 'https://github.com/yourusername/guestbook' },
            { type: 'live', label: 'Live App', url: 'https://your-guestbook-app.com' },
            { type: 'aws', label: 'Infrastructure', url: 'https://aws.amazon.com/your-deployment' }
        ],
        features: [
            'GitOps-based deployment workflow',
            'Automated CI/CD pipeline',
            'Kubernetes-native architecture',
            'Infrastructure as Code with Terraform',
            'Automatic rollbacks on failed deployments'
        ]
    },
    'github': {
        id: 'github',
        title: 'GitHub App Deployment',
        summary: 'Continuous delivery with GitHub Actions and GitOps principles for seamless application deployment.',
        tags: ['GitHub', 'Kubernetes', 'Docker', 'CI/CD', 'GitHub Actions'],
        image: githubImage,
        links: [
            { type: 'github', label: 'Source', url: 'https://github.com/yourusername/github-app' },
            { type: 'live', label: 'Production', url: 'https://your-app-url.com' }
        ],
        features: [
            'GitHub Actions workflow automation',
            'Container-based deployment',
            'Automatic environment promotion',
            'Integrated testing and quality gates',
            'Deployment metrics and monitoring'
        ]
    },
    'lens': {
        id: 'lens',
        title: 'Lens Pipeline Management',
        summary: 'Kubernetes management with Lens IDE integrated with custom deployment pipelines.',
        tags: ['Lens', 'Terraform', 'Docker', 'Kubernetes', 'Infrastructure'],
        image: lensImage,
        links: [
            { type: 'gitlab', label: 'GitLab', url: 'https://gitlab.com/yourusername/lens-project' },
            { type: 'release', label: 'Latest Release', url: 'https://gitlab.com/yourusername/lens-project/-/releases' }
        ],
        features: [
            'Visual Kubernetes cluster management',
            'Infrastructure automation with Terraform',
            'Multi-environment deployment support',
            'Custom resource visualization',
            'Integrated monitoring dashboards'
        ]
    },
    'blackgithub': {
        id: 'blackgithub',
        title: 'Dark Mode GitHub App',
        summary: 'Dark-themed version of the GitHub app deployment with enhanced visualization features.',
        tags: ['GitHub', 'Kubernetes', 'Docker', 'Dark Mode', 'UI/UX'],
        image: blackgithubImage,
        links: [
            { type: 'github', label: 'Repository', url: 'https://github.com/yourusername/dark-github-app' },
            { type: 'live', label: 'Live Version', url: 'https://dark.your-app-url.com' },
            { type: 'releases', label: 'Releases', url: 'https://github.com/yourusername/dark-github-app/releases' }
        ],
        features: [
            'Accessibility-focused dark mode interface',
            'Enhanced visualization for deployment stages',
            'Resource utilization dashboards',
            'Custom theme configuration',
            'Reduced eye strain for night operations'
        ]
    },
    'blacklens': {
        id: 'blacklens',
        title: 'Dark Mode Lens Pipeline',
        summary: 'Enhanced dark theme for Lens pipeline management with additional visualization tools.',
        tags: ['Lens', 'Terraform', 'Docker', 'Dark Mode', 'Analytics'],
        image: blacklensImage,
        links: [
            { type: 'gitlab', label: 'GitLab', url: 'https://gitlab.com/yourusername/dark-lens' },
            { type: 'aws', label: 'AWS Infrastructure', url: 'https://aws.amazon.com/your-deployment' },
            { type: 'release', label: 'Download', url: 'https://gitlab.com/yourusername/dark-lens/-/releases' }
        ],
        features: [
            'Advanced dark theme UI optimized for long sessions',
            'Custom visualization components',
            'Resource usage analytics',
            'Integrated alerting system',
            'One-click deployment rollbacks'
        ]
    }
};

export default projectsData;