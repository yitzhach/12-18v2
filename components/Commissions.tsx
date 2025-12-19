import React, { useState } from 'react';

const Commissions: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    dimensions: '',
    timeline: '',
    budget: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Commission Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AProject Type: ${formData.projectType}%0D%0ADimensions: ${formData.dimensions}%0D%0ATimeline: ${formData.timeline}%0D%0ABudget: ${formData.budget}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:isaac@isaacandersonart.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-light tracking-[0.2em] text-gray-900 mb-8 uppercase text-center">
          Commissions
        </h1>
        <p className="text-gray-600 font-light text-center max-w-2xl mx-auto mb-12">
          Interested in commissioning a custom piece? Please fill out the form below with your project details, and I'll get back to you to discuss your vision.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white border border-gray-200 p-3 focus:outline-none focus:border-gray-400 transition-colors font-light"
                placeholder="Your Name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white border border-gray-200 p-3 focus:outline-none focus:border-gray-400 transition-colors font-light"
                placeholder="Your Email"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-white border border-gray-200 p-3 focus:outline-none focus:border-gray-400 transition-colors font-light"
              placeholder="Your Phone Number"
            />
          </div>

          <div>
            <label htmlFor="projectType" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Project Type</label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full bg-white border border-gray-200 p-3 focus:outline-none focus:border-gray-400 transition-colors font-light"
            >
              <option value="">Select a project type</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="public">Public Art</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="dimensions" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Dimensions</label>
              <input
                type="text"
                id="dimensions"
                name="dimensions"
                value={formData.dimensions}
                onChange={handleChange}
                className="w-full bg-white border border-gray-200 p-3 focus:outline-none focus:border-gray-400 transition-colors font-light"
                placeholder="e.g., 48&quot; x 36&quot;"
              />
            </div>
            
            <div>
              <label htmlFor="timeline" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Timeline</label>
              <input
                type="text"
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full bg-white border border-gray-200 p-3 focus:outline-none focus:border-gray-400 transition-colors font-light"
                placeholder="e.g., 3-6 months"
              />
            </div>
          </div>

          <div>
            <label htmlFor="budget" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Budget Range</label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full bg-white border border-gray-200 p-3 focus:outline-none focus:border-gray-400 transition-colors font-light"
            >
              <option value="">Select a budget range</option>
              <option value="under-5k">Under $5,000</option>
              <option value="5k-10k">$5,000 - $10,000</option>
              <option value="10k-25k">$10,000 - $25,000</option>
              <option value="25k-50k">$25,000 - $50,000</option>
              <option value="50k-plus">$50,000+</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Project Description</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-white border border-gray-200 p-3 focus:outline-none focus:border-gray-400 transition-colors font-light"
              placeholder="Tell me about your vision, style preferences, color palette, and any other details..."
            ></textarea>
          </div>

          <div className="text-center mt-8">
            <button
              type="submit"
              className="px-8 py-3 bg-gray-900 text-white font-light tracking-widest text-sm hover:bg-gray-700 transition-colors uppercase"
            >
              Submit Commission Inquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Commissions;

