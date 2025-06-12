// src/components/contact/ContactForm.tsx
'use client'
import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for contacting us!')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="grid md:grid-cols-2 gap-12 bg-white/70 backdrop-blur-md p-8 rounded-lg shadow-lg border border-gray-200">
      
      {/* Left: Contact Info */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-primary">Get in Touch</h2>
        <p className="text-gray-600">
          Have questions or want to discuss your construction project? Fill out the form or reach out directly:
        </p>
        <div className="space-y-4 text-gray-800">
          <div className="flex items-center gap-4">
            <FiMapPin className="text-2xl text-primary" />
            <span>No.12, Main Road, Chennai, TN - 600001</span>
          </div>
          <div className="flex items-center gap-4">
            <FiPhone className="text-2xl text-primary" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-4">
            <FiMail className="text-2xl text-primary" />
            <span>contact@mazaconstruction.com</span>
          </div>
        </div>
      </div>

      {/* Right: Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block font-medium mb-1">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-medium mb-1">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-6 bg-primary text-white font-semibold rounded hover:bg-yellow-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}
