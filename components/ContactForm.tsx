"use client"
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        className="w-full border rounded p-2"
        placeholder="Your Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        className="w-full border rounded p-2"
        placeholder="Your Email"
        name="email"
        value={form.email}
        onChange={handleChange}
        required
        type="email"
      />
      <textarea
        className="w-full border rounded p-2"
        placeholder="Your Message"
        name="message"
        rows={4}
        value={form.message}
        onChange={handleChange}
        required
      />
      <button className="bg-yellow-500 text-white px-6 py-2 rounded" type="submit">
        Send Message
      </button>
    </form>
  );
}
