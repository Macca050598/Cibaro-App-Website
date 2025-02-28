import React, { useState } from "react";
import Section from "./Section";
import { socials } from "../constants";
import { Link } from 'react-router-dom';
import Modal from './Modal';

const Privacy = () => (
  <div>
    <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
    <p className="text-gray-300 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-gray-300 mb-4">Last updated: {new Date().toLocaleDateString()}</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
        <p className="mb-4">We collect the following types of information:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Email addresses for waitlist and communication purposes</li>
          <li>Usage data and analytics</li>
          <li>Device information</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
        <p className="mb-4">We use the collected information for:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Providing and maintaining our service</li>
          <li>Notifying you about changes to our service</li>
          <li>Providing customer support</li>
          <li>Analyzing usage to improve our service</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Data Storage and Security</h2>
        <p className="mb-4">
          We implement appropriate security measures to protect your personal information.
          Your data is stored securely and we do not share it with third parties except
          as described in this policy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Your Rights</h2>
        <p className="mb-4">You have the right to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Access your personal data</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Withdraw consent at any time</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us at:{' '}
          <a href="mailto:your-email@example.com" className="text-blue-400 hover:text-blue-300">
            your-email@example.com
          </a>
        </p>
      </section>
    </div>  </div>
);

const Terms = () => (
  <div>
    <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
    <p className="text-gray-300 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="text-gray-300 mb-4">Last updated: {new Date().toLocaleDateString()}</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
        <p className="mb-4">
          By accessing or using our application, you agree to be bound by these Terms of Service.
          If you disagree with any part of the terms, you may not access the service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
        <p className="mb-4">
          Permission is granted to temporarily download one copy of the app for personal,
          non-commercial transitory viewing only.
        </p>
        <p className="mb-4">This is the grant of a license, not a transfer of title, and under this license you may not:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Modify or copy the materials</li>
          <li>Use the materials for any commercial purpose</li>
          <li>Attempt to decompile or reverse engineer any software contained in the app</li>
          <li>Remove any copyright or other proprietary notations</li>
          <li>Transfer the materials to another person</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
        <p className="mb-4">
          The materials within the app are provided on an 'as is' basis. We make no
          warranties, expressed or implied, and hereby disclaim and negate all other
          warranties including, without limitation, implied warranties or conditions of
          merchantability, fitness for a particular purpose, or non-infringement of
          intellectual property or other violation of rights.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
        <p className="mb-4">
          In no event shall [Your Company Name] or its suppliers be liable for any damages
          (including, without limitation, damages for loss of data or profit, or due to
          business interruption) arising out of the use or inability to use the materials
          on our app.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Governing Law</h2>
        <p className="mb-4">
          These terms and conditions are governed by and construed in accordance with
          the laws of [Your Country/State] and you irrevocably submit to the exclusive
          jurisdiction of the courts in that location.
        </p>
      </section>
    </div>
  </div>
);

const Footer = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <>
      <div className="border-t border-n-6 py-6 mt-auto">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-n-4 text-sm">
            © {new Date().getFullYear()}. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setShowPrivacy(true)} 
              className="text-n-4 hover:text-n-1 text-sm transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setShowTerms(true)} 
              className="text-n-4 hover:text-n-1 text-sm transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {/* Modals */}
      <Modal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)}>
        <Privacy />
      </Modal>

      <Modal isOpen={showTerms} onClose={() => setShowTerms(false)}>
        <Terms />
      </Modal>
    </>
  );
};

export default Footer;
