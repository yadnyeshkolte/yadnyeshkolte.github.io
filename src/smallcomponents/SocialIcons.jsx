import './SocialIcons.css';
import gmailIcon from './socialicons/gmail.svg';
import linkedinIcon from './socialicons/linkedin.svg';
import twitterIcon from './socialicons/x.svg';
import credlyIcon from './socialicons/credly.svg';
import slackIcon from './socialicons/slack.svg';

const SocialIcons = () => {
    return (
        <div className="social-icons-container animate-slide-up">
            <a
                href="mailto:yadnyeshkolte@gmail.com"
                className="social-icon-link animate-pop"
                style={{ "--delay": "0.1s" }}
                aria-label="Email"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={gmailIcon} alt="Email" className="social-icon" />
            </a>
            <a
                href="https://www.linkedin.com/in/yadnyesh-kolte/"
                className="social-icon-link animate-pop"
                style={{ "--delay": "0.2s" }}
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
            </a>
            <a
                href="https://x.com/yadnyeshkolte"
                className="social-icon-link animate-pop"
                style={{ "--delay": "0.5s" }}
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={twitterIcon} alt="Twitter" className="social-icon" />
            </a>
            <a
                href="https://www.credly.com/users/yadnyesh-kolte"
                className="social-icon-link animate-pop"
                style={{ "--delay": "0.3s" }}
                aria-label="Credly"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={credlyIcon} alt="Credly" className="social-icon" />
            </a>
            <a
                href="https://join.slack.com/shareDM/zt-2yetf1qht-wG~RsFrPYdQf8965dA~54g"
                className="social-icon-link animate-pop"
                style={{ "--delay": "0.4s" }}
                aria-label="Slack"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={slackIcon} alt="Slack" className="social-icon" />
            </a>
        </div>
    );
};

export default SocialIcons;
