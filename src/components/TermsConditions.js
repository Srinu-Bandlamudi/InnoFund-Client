// TermsConditions.js

import React from 'react';

const TermsConditions = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="bg-gray-900 shadow-md rounded-lg overflow-hidden w-full max-w-screen-lg">
        <div className="px-6 py-8 md:p-12">
          <h1 className="text-3xl font-bold mb-6 text-center">Terms and Conditions</h1>

          <section className="bg-gray-900 text-white rounded p-6 mb-8">
            <h2 className="text-2xl mb-4 font-bold">1. License</h2>
            <p className="mb-4">
              Unless otherwise stated, InnoFund and/or its licensors own the intellectual property rights for all material on InnoFund. All intellectual property rights are reserved. You may view and/or print pages from https://innofund.com for your own personal use subject to restrictions set in these terms and conditions.
            </p>
          </section>

          <section className="bg-gray-900 text-white rounded p-6 mb-8">
            <h2 className="text-2xl mb-4 font-bold">2. User Responsibilities</h2>
            <ul className="list-disc ml-8 mb-4">
              <li>Do not misuse our website by knowingly introducing viruses, trojans, worms, logic bombs, or other material that is malicious or technologically harmful.</li>
              <li>Do not attempt to gain unauthorized access to our website, the server on which our website is stored, or any server, computer, or database connected to our website.</li>
              <li>Do not attack our website via a denial-of-service attack or a distributed denial-of-service attack.</li>
              <li>Do not use our website to transmit or send unsolicited commercial communications.</li>
            </ul>
          </section>

          <section className="bg-gray-900 text-white rounded p-6 mb-8">
            <h2 className="text-2xl mb-4 font-bold">3. Limitation of Liability</h2>
            <p className="mb-4">
              In no event shall InnoFund, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the website; (ii) any conduct or content of any third party on the website; (iii) any content obtained from the website; and (iv) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
            </p>
          </section>

          <section className="bg-gray-900 text-white rounded p-6 mb-8">
            <h2 className="text-2xl mb-4 font-bold">4. Governing Law</h2>
            <p className="mb-4">
              These terms and conditions are governed by and construed in accordance with the laws of the State of [Your State] and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
          </section>

          <section className="bg-gray-900 text-white rounded p-6 mb-8">
            <h2 className="text-2xl mb-4 font-bold">5. Amendments</h2>
            <p className="mb-4">
              We reserve the right, at our sole discretion, to modify or replace these terms and conditions at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
          </section>

          <p className="text-center text-gray-400 mt-8">
            For any further information please email us at <a href="mailto:info@innofund.com" className="text-blue-500 hover:underline">info@innofund.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
