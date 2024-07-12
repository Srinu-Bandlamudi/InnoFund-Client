// PrivacyPolicy.js

import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-8">
            <h2 className="text-3xl font-bold mb-6">Privacy Policy</h2>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Introduction</h3>
              <p className="mb-2">
                InnoFund is committed to protecting your privacy. This Privacy Policy outlines how we collect, use,
                and disclose information about you when you visit our website and use our services.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Information We Collect</h3>
              <ul className="list-disc list-inside">
                <li>We collect information you provide directly to us.</li>
                <li>We collect information automatically when you use our services.</li>
                <li>We may collect information from other sources.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">How We Use Your Information</h3>
              <p className="mb-2">
                We may use the information we collect for various purposes, including to:
              </p>
              <ul className="list-disc list-inside">
                <li>Provide, operate, and maintain our website and services.</li>
                <li>Improve, personalize, and expand our website and services.</li>
                <li>Understand and analyze how you use our website and services.</li>
                <li>Develop new products, services, features, and functionality.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Information Sharing</h3>
              <p className="mb-2">
                We may share your information in certain circumstances, including:
              </p>
              <ul className="list-disc list-inside">
                <li>With your consent.</li>
                <li>With our service providers and partners.</li>
                <li>For legal reasons or to protect our rights.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Security</h3>
              <p className="mb-2">
                We take reasonable measures to help protect your information from unauthorized access, use, or disclosure.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Changes to This Privacy Policy</h3>
              <p className="mb-2">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="mb-2">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
