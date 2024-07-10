// src/components/AboutUs.tsx
import React from "react";
// import { Link } from 'react-router-dom';

const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Contact Information Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <p>
          <strong>Phone:</strong> (123) 456-7890
        </p>
        <p>
          <strong>Email:</strong> info@campersshop.com
        </p>
        <p>
          <strong>Address:</strong> 123 Campers Lane, Adventure Town, USA
        </p>
      </section>

      {/* Google Map Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Our Location</h2>
        <iframe
          title="Shop Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509837!2d144.95373631568017!3d-37.81720974202164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e3c1e5dfc40!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1621259076904!5m2!1sen!2sus"
          width="100%"
          height="400"
          className="border-0"
          allowFullScreen={false}
          loading="lazy"
        ></iframe>
      </section>

      {/* Social Media Links Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
              className="h-8 w-8"
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_Logo_as_of_2021.svg"
              alt="Twitter"
              className="h-8 w-8"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              className="h-8 w-8"
            />
          </a>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p>
          At Campers Shop, our mission is to provide high-quality camping gear
          and accessories that make every outdoor adventure enjoyable and
          memorable. We believe in offering products that combine durability,
          functionality, and style to meet the needs of all camping enthusiasts.
        </p>
      </section>

      {/* Team Members Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="John Doe"
              className="w-32 h-32 rounded-full mx-auto mb-2"
            />
            <h3 className="text-lg font-semibold">John Doe</h3>
            <p className="text-sm text-gray-600">Founder & CEO</p>
          </div>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Jane Smith"
              className="w-32 h-32 rounded-full mx-auto mb-2"
            />
            <h3 className="text-lg font-semibold">Jane Smith</h3>
            <p className="text-sm text-gray-600">Chief Marketing Officer</p>
          </div>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Emily Johnson"
              className="w-32 h-32 rounded-full mx-auto mb-2"
            />
            <h3 className="text-lg font-semibold">Emily Johnson</h3>
            <p className="text-sm text-gray-600">Lead Product Designer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
