import React from 'react';
import { useSharedForm } from '../hooks/useSharedForm.js';
import './OverlayContact.css';

const OverlayContact = ({ isOpen, onClose }) => {
    const { submitted, loading, error, handleSubmit } = useSharedForm();

    if (!isOpen) return null;

    if (submitted) {
        return (
            <div className="overlay">
                <div className="success-modal">
                    <button onClick={onClose} className="close-button">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                    <div className="success-content">
                        <svg className="success-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M22 4L12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <h2>Thank you for reaching out!</h2>
                        <p>Will get back to you as soon as possible.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="overlay">
            <div className="contact-modal">
                <button onClick={onClose} className="close-button">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                <div className="modal-header">
                    <h2>Get in Touch</h2>
                    <p>I would love to hear from you. Send a message!</p>
                </div>

                {error && (
                    <div className="error-alert">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/>
                            <line x1="12" y1="8" x2="12" y2="12"/>
                            <line x1="12" y1="16" x2="12.01" y2="16"/>
                        </svg>
                        <p>{error}</p>
                    </div>
                )}

                <form
                    name="gform"
                    id="gform"
                    className="contact-form"
                    encType="text/plain"
                    target="hidden_iframe"
                    onSubmit={handleSubmit}
                    action="https://docs.google.com/forms/d/e/1FAIpQLScy1iM-erdX2ZaZGqkt5rlksSGK2sFK59LHISRaBxc2Sb0e7g/formResponse?"
                >
                    <div className="form-row">
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                name="entry.508287588"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="entry.1219103022"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Message</label>
                        <textarea
                            name="entry.1912912210"
                            required
                            rows="6"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`submit-button ${loading ? 'loading' : ''}`}
                    >
                        <svg className="send-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 2L11 13"/>
                            <path d="M22 2L15 22L11 13L2 9L22 2z"/>
                        </svg>
                        <span>{loading ? 'Sending...' : 'Send Message'}</span>
                    </button>
                </form>
                <iframe name="hidden_iframe" id="hidden_iframe" className="hidden-iframe"/>
            </div>
        </div>
    );
};

export default OverlayContact;