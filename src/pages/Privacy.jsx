import React from 'react';

const Privacy = () => {
  return (
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
    </div>
  );
};

export default Privacy; 