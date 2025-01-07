import React from 'react';
import { Mail, Phone } from 'lucide-react';

export function ContactSection() {
  const email = 'ankahorvat08@gmail.com';
  const whatsapp = '385922872972';

  return (
      <section id="contact" className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-4">
              To check availability or book an apartment, please fill in the form below.
              We'll respond within 48 hours of receiving your inquiry.
            </p>
          </div>

          <form
              action={`mailto:${email}`}
              method="post"
              encType="text/plain"
              className="max-w-2xl mx-auto bg-gray-50 p-4 md:p-8 rounded-xl shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 md:px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="surname" className="block text-sm font-medium text-gray-700 mb-1">Surname</label>
                <input
                    type="text"
                    id="surname"
                    name="surname"
                    required
                    className="w-full px-3 md:px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 md:px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="apartment" className="block text-sm font-medium text-gray-700 mb-1">Preferred Apartment</label>
              <select
                  id="apartment"
                  name="apartment"
                  required
                  className="w-full px-3 md:px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select an apartment</option>
                <option value="Apartment Borna">Apartment Borna</option>
                <option value="Apartment Luna">Apartment Luna</option>
                <option value="Apartment Max">Apartment Max</option>
                <option value="Apartment Hana">Apartment Hana</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
              <div>
                <label htmlFor="checkin" className="block text-sm font-medium text-gray-700 mb-1">Check-in Date</label>
                <input
                    type="date"
                    id="checkin"
                    name="checkin"
                    required
                    className="w-full px-3 md:px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="checkout" className="block text-sm font-medium text-gray-700 mb-1">Check-out Date</label>
                <input
                    type="date"
                    id="checkout"
                    name="checkout"
                    required
                    className="w-full px-3 md:px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 md:px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Any special requests or questions?"
              ></textarea>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-4">
              <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-6 md:px-8 py-2 md:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
                <span>Send Inquiry</span>
              </button>

              <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 md:px-8 py-2 md:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                <span>Contact via WhatsApp</span>
              </a>
            </div>
          </form>
        </div>
      </section>
  );
}