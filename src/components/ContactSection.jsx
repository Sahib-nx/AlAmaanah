import React, { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [state, handleSubmit] = useForm("xwpbjnlg");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear any previous errors when user starts typing
    if (submitError) setSubmitError(null);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Create form element to properly submit with Formspree
      const formElement = e.target;
      const formDataObj = new FormData(formElement);

      await handleSubmit(formDataObj);

      // Check if submission was successful
      setTimeout(() => {
        if (state.succeeded) {
          resetForm();
        }
        setIsSubmitting(false);
      }, 1000);

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('Failed to send message. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Ready to start your next project? Get in touch with us today for professional civil engineering solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Send us a Message
            </h3>

            {/* Success Message */}
            {state.succeeded && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-green-800" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Message Sent Successfully!
                    </h4>
                    <p className="text-green-700 text-sm mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {(state.errors && state.errors.length > 0) || submitError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-red-800" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Error Sending Message
                    </h4>
                    <p className="text-red-700 text-sm mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {submitError || 'Please check the form fields and try again.'}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={onSubmit} className="flex flex-col gap-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed"
                  placeholder="Enter your full name"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed"
                  placeholder="Enter your email address"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical disabled:bg-gray-50 disabled:cursor-not-allowed"
                  placeholder="Tell us about your project or inquiry..."
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-800 hover:bg-blue-900 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                style={{ backgroundColor: isSubmitting ? '#9CA3AF' : '#1E3A8A', fontFamily: 'Inter, sans-serif' }}
              >
                <Send size={20} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Get in Touch
            </h3>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <Phone size={24} className="text-blue-800" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Phone
                  </h4>
                  <a
                    href="tel:+917006936512"
                    className="text-gray-600 hover:text-blue-600 transition-colors block"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    +917006936512

                  </a>
                  <a
                    href="tel:+918825040464"
                    className="text-gray-600 hover:text-blue-600 transition-colors block"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    +918825040464
                  </a>
                  <a
                    href="tel:+919797666866"
                    className="text-gray-600 hover:text-blue-600 transition-colors block"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    +919797666866
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 p-3 rounded-lg flex-shrink-0">
                  <Mail size={24} className="text-yellow-600" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-gray-800 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Email
                  </h4>
                  <a
                    href="mailto:info@civilengineering.com"
                    className="text-gray-600 hover:text-blue-600 transition-colors block break-words"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Amaanahestates@gmail.com
                  </a>
                  {/* <a
                    href="mailto:sahibyar214@gmail.com"
                    className="text-gray-600 hover:text-blue-600 transition-colors block break-words"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    sahibyar214@gmail.com
                  </a> */}
                </div>
              </div>

              {/* Office Location */}
              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-3 rounded-lg flex-shrink-0">
                  <MapPin size={24} className="text-gray-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Office Location
                  </h4>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query= 3RG8+W5R,Kothi Bagh,Srinagar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    3RG8+W5R, Kothi Bagh, Srinagar<br />
                    Jammu and Kashmir 190001
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-start gap-4">
                <div className="bg-pink-100 p-3 rounded-lg flex-shrink-0">
                  <Instagram size={24} className="text-pink-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Follow Us
                  </h4>
                  <a
                    href="https://instagram.com/amaanah_estates"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-700 transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    @amaanah_estates
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                Business Hours
              </h4>
              <div className="space-y-2 text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                <div className="flex justify-between">
                  <span>Monday - Thrusday:</span>
                  <span>10:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday - Sunday:</span>
                  <span>10:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;