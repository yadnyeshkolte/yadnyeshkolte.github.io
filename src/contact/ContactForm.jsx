import React, { useState } from "react";
import { LoaderIcon, SendIcon } from "lucide-react";
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email || !formData.subject || !formData.message) {
      setSubmitStatus("Please fill in required fields");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(
          "https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(formData),
          },
      );

      if (response.ok) {
        setSubmitStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
      <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Me</h2>

        {/* Optional Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name (Optional)
          </label>
          <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-white/20 rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Required Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email *
          </label>
          <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-white/20 rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Required Subject Field */}
        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            Subject *
          </label>
          <input
              type="text"
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-white/20 rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Required Message Field */}
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message *
          </label>
          <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 bg-white/20 rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Status */}
        {submitStatus && (
            <div
                className={`mb-4 text-center p-2 rounded ${
                    submitStatus.includes("successfully")
                        ? "bg-green-500/20 text-green-700"
                        : "bg-red-500/20 text-red-700"
                }`}
            >
              {submitStatus}
            </div>
        )}

        {/* Submit Button */}
        <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-blue-500/50 text-white rounded-md hover:bg-blue-600/50 transition-colors flex items-center justify-center"
        >
          {isSubmitting ? (
              <LoaderIcon className="animate-spin mr-2" />
          ) : (
              <SendIcon className="mr-2" />
          )}
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
  );
};

export default ContactForm;