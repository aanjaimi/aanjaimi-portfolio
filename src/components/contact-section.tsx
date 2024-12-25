import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Linkedin, MapPin } from 'lucide-react';

const ContactSection = () => {
  const formRef = useRef(null);
  const contactsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate form sliding in from left
    gsap.fromTo(formRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top center",
          end: "bottom center",
        }
      }
    );

    // Animate contacts sliding in from right
    gsap.fromTo(contactsRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: contactsRef.current,
          start: "top center",
          end: "bottom center",
        }
      }
    );
  }, []);

  return (
    <section className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Get in Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div ref={formRef} className="bg-white p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg h-32 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div ref={contactsRef} className="space-y-8 p-8">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-600">your.email@example.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-gray-600">Your City, Country</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Linkedin className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-medium">GitHub</h3>
                <a href="https://d.com" target='_blank' rel="noreferrer" className="text-blue-600 hover:underline">github.com/yourusername</a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Linkedin className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-medium">LinkedIn</h3>
                <a href="https://d.com" target='_blank' rel="noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/yourusername</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;