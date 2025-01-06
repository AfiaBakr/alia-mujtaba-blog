// app/contact/page.tsx
'use client';

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaHome } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";

interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

const contactInfo: ContactInfo = {
  address: 'Karachi, Pakistan',
  phone: '+92 334 3536883',
  email: 'afiabakr8602@gmail.com',
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_id',// 'service_rx8gkym', // Replace with your Email.js service ID
        'template_id',// 'template_5tx0i2q', // Replace with your Email.js template ID
        formData,
        'public-key'// 'Z9j3fKzVPxzzv-orQ' // Replace with your Email.js public key
      );
      setSuccess('Your message has been sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSuccess('Failed to send the message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto mt-28 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-12">Contact Me</h2>
          <p className="mb-10">
          <FaHome />
            <strong>Address:</strong><br/> {contactInfo.address}
          </p>
          <p className="mb-10">
          <FaPhoneVolume />
            <strong>Phone:</strong><br/> {contactInfo.phone}
          </p>
          <p className="mb-10">
          <FaMailBulk />
            <strong>Email:</strong><br/> {contactInfo.email}
          </p>
        </div>

        {/* Right Column */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </form>
          {success && (
            <p className={`mt-4 text-sm ${success.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
              {success}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
