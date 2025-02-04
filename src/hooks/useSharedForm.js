import { useState, useEffect } from 'react';

// Create a shared state object outside of the hook
const sharedState = {
    submitted: false,
    loading: false,
    error: '',
    subscribers: new Set(),
};

export const useSharedForm = () => {
    const [submitted, setSubmitted] = useState(sharedState.submitted);
    const [loading, setLoading] = useState(sharedState.loading);
    const [error, setError] = useState(sharedState.error);

    useEffect(() => {
        // Subscribe to state changes
        const updateState = () => {
            setSubmitted(sharedState.submitted);
            setLoading(sharedState.loading);
            setError(sharedState.error);
        };

        sharedState.subscribers.add(updateState);
        return () => sharedState.subscribers.delete(updateState);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        sharedState.loading = true;
        sharedState.error = '';
        notifySubscribers();

        try {
            const form = e.target;
            await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                mode: 'no-cors'
            });
            sharedState.submitted = true;
        } catch (err) {
            sharedState.error = 'Something went wrong. Please try again later.';
        } finally {
            sharedState.loading = false;
            notifySubscribers();
        }
    };

    const notifySubscribers = () => {
        sharedState.subscribers.forEach(subscriber => subscriber());
    };

    return {
        submitted,
        loading,
        error,
        handleSubmit
    };
};