import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';

export const PrivacyPolicyModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Change URL to the privacy policy route
      window.history.pushState({}, '', '/farm-land-doddaballapur/privacy-policy/');
    } else {
      document.body.style.overflow = 'unset';
      // Revert URL to home if it is currently the privacy policy route
      if (window.location.pathname === '/farm-land-doddaballapur/privacy-policy/') {
        window.history.pushState({}, '', '/');
      }
    }

    // Handle browser back button to close the modal
    const handlePopState = () => {
      if (isOpen) {
        onClose();
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white border border-stone-200 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-stone-200 bg-[#fbf9f4]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-[#154726]" />
            <h3 className="text-xl font-serif font-bold text-[#0a2214]">Privacy Policy</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-500 hover:text-stone-900 rounded-full hover:bg-stone-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto text-sm text-stone-700 space-y-6">
          <p className="font-bold text-stone-900">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          
          <p>
            At <strong>Samrudhi Sylvan Retreat</strong>, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, and protect your information when you visit or interact with our website and enquiry services.
          </p>
          <p>
            By accessing or using our website, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with any part of this policy, please refrain from using our website.
          </p>

          <div>
            <h4 className="text-base font-bold text-stone-900 mb-2 border-b border-stone-200 pb-1">1. Information We Collect</h4>
            <p className="mb-2">We may collect personal information that you voluntarily provide to us when you submit an enquiry, request a price sheet, schedule a site visit, or otherwise communicate with us through our website. This information may include:</p>
            <ul className="list-disc pl-5 space-y-1 mb-2">
              <li>Full name</li>
              <li>Email address</li>
              <li>Telephone/mobile number</li>
              <li>Location or city</li>
              <li>Enquiry or message details</li>
              <li>Information related to your property or investment requirements</li>
              <li>Any other information you voluntarily provide to us</li>
            </ul>
            <p>We may also automatically collect limited technical information, such as browser type, device information, IP address, pages visited, and general website usage information, for website functionality, security, and analytics purposes.</p>
          </div>

          <div>
            <h4 className="text-base font-bold text-stone-900 mb-2 border-b border-stone-200 pb-1">2. How We Use Your Information</h4>
            <p className="mb-2">We may use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>To respond to your enquiries and requests</li>
              <li>To provide project details, pricing, brochures, and other requested information</li>
              <li>To arrange or coordinate site visits and cab services where applicable</li>
              <li>To communicate with you regarding <strong>Samrudhi Sylvan Retreat</strong></li>
              <li>To understand your requirements and provide relevant assistance</li>
              <li>To improve our website, services, and user experience</li>
              <li>To maintain website security and prevent unauthorized activities</li>
              <li>To comply with applicable legal and regulatory requirements</li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold text-stone-900 mb-2 border-b border-stone-200 pb-1">3. Communication and Marketing</h4>
            <p className="mb-2">By submitting your contact information through our website, you consent to being contacted by <strong>Samrudhi Sylvan Retreat</strong> or its authorized representatives regarding your enquiry. We may contact you through:</p>
            <ul className="list-disc pl-5 space-y-1 mb-2">
              <li>Phone calls</li>
              <li>SMS</li>
              <li>WhatsApp or other instant messaging services</li>
              <li>Email</li>
            </ul>
            <p>Such communication may include information about the project, pricing, site visits, availability, offers, or other services relevant to your enquiry. You may request that we stop sending promotional or non-essential communications at any time.</p>
          </div>

          <div>
            <h4 className="text-base font-bold text-stone-900 mb-2 border-b border-stone-200 pb-1">4. Sharing of Your Information</h4>
            <p className="mb-2">We do not sell, rent, or trade your personal information to third parties. We may share your information with trusted service providers, representatives, business partners, technology providers, or other authorized parties when reasonably necessary to:</p>
            <ul className="list-disc pl-5 space-y-1 mb-2">
              <li>Respond to your enquiry</li>
              <li>Coordinate site visits or related services</li>
              <li>Operate and maintain our website</li>
              <li>Provide communication and customer support</li>
              <li>Perform analytics or technical services</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p>Any such sharing will be carried out only for legitimate business purposes and, where applicable, subject to appropriate confidentiality and security measures.</p>
          </div>

          <div>
            <h4 className="text-base font-bold text-stone-900 mb-2 border-b border-stone-200 pb-1">5. Data Security</h4>
            <p>We take reasonable and appropriate measures to protect your personal information from unauthorized access, misuse, alteration, disclosure, or destruction. However, no method of transmission over the internet or method of electronic storage can be guaranteed to be completely secure. Therefore, while we take reasonable steps to protect your information, we cannot guarantee absolute security.</p>
          </div>

          <div>
            <h4 className="text-base font-bold text-stone-900 mb-2 border-b border-stone-200 pb-1">6. Cookies and Website Technologies</h4>
            <p>Our website may use cookies and similar technologies to improve functionality, understand visitor behaviour, remember preferences, and analyze website traffic. You may choose to disable cookies through your browser settings. However, disabling certain cookies may affect some features or functionality of the website.</p>
          </div>

          <div>
            <h4 className="text-base font-bold text-stone-900 mb-2 border-b border-stone-200 pb-1">7. Third-Party Services and Links</h4>
            <p>Our website may contain links to third-party websites, platforms, or services. These third parties may have their own privacy policies and terms of use. <strong>Samrudhi Sylvan Retreat</strong> is not responsible for the privacy practices, content, or security of third-party websites. We encourage you to review their respective privacy policies before providing any personal information.</p>
          </div>

          <div>
            <h4 className="text-base font-bold text-stone-900 mb-2 border-b border-stone-200 pb-1">8. User Consent and Authorization</h4>
            <p className="mb-2">By visiting our website or voluntarily submitting your information through our enquiry forms, you consent to the collection, use, storage, and processing of your information in accordance with this Privacy Policy.</p>
            <p className="mb-2">If you provide personal information relating to another individual, you represent that you have the necessary authority or consent to provide that information and permit us to process it in accordance with this Privacy Policy.</p>
            <p>By submitting your contact details, you authorize <strong>Samrudhi Sylvan Retreat</strong> and its authorized representatives, service providers, affiliates, or partners, where applicable, to contact you through phone calls, SMS, WhatsApp, email, or other communication channels for purposes related to your enquiry and the services described in this Privacy Policy.</p>
          </div>

          <div>
            <h4 className="text-base font-bold text-stone-900 mb-2 border-b border-stone-200 pb-1">9. Retention of Information</h4>
            <p>We may retain your personal information for as long as reasonably necessary to fulfill the purposes for which it was collected, provide requested services, maintain business records, resolve disputes, comply with legal obligations, and enforce our agreements. When personal information is no longer required, we may securely delete or anonymize it in accordance with applicable requirements.</p>
          </div>

          <div>
            <h4 className="text-base font-bold text-stone-900 mb-2 border-b border-stone-200 pb-1">10. Your Privacy Choices</h4>
            <p className="mb-2">You may contact us to:</p>
            <ul className="list-disc pl-5 space-y-1 mb-2">
              <li>Request information about the personal data we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information, where legally applicable</li>
              <li>Withdraw consent for certain communications</li>
              <li>Opt out of promotional communications</li>
            </ul>
            <p>Some requests may be subject to applicable legal or contractual requirements.</p>
          </div>

          <div>
            <h4 className="text-base font-bold text-stone-900 mb-2 border-b border-stone-200 pb-1">11. Changes to This Privacy Policy</h4>
            <p><strong>Samrudhi Sylvan Retreat</strong> reserves the right to update or modify this Privacy Policy from time to time. Any changes will be posted on this page with an updated <strong>"Last Updated"</strong> date. We encourage you to review this Privacy Policy periodically to remain informed about how we protect your information. Your continued use of our website after any changes to this Privacy Policy constitutes your acknowledgment of the updated policy.</p>
          </div>

          <div>
            <h4 className="text-base font-bold text-stone-900 mb-2 border-b border-stone-200 pb-1">12. Contact Us</h4>
            <p>If you have any questions, concerns, or requests regarding this Privacy Policy or the way your personal information is handled, please contact <strong>Samrudhi Sylvan Retreat</strong> through the contact details provided on our website.</p>
            <p className="mt-4 font-bold text-stone-900">By using this website and submitting your information, you acknowledge that you have read and understood this Privacy Policy and consent to the practices described above.</p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-stone-200 bg-[#fbf9f4] text-right">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#154726] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-md hover:bg-[#0a2214] transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
