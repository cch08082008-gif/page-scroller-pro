import { useState } from "react";

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const PolicyModal = ({ isOpen, onClose, title }: PolicyModalProps) => {
  if (!isOpen) return null;

  const isPrivacy = title === "Privacy Policy";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative z-10 max-w-2xl w-full max-h-[80vh] overflow-y-auto bg-[#171f33] border border-[#424754]/30 rounded-xl p-8 md:p-12"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#c2c6d6] hover:text-[#adc6ff] transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        <h2 className="text-3xl font-headline font-bold text-[#dae2fd] mb-6">{title}</h2>
        <div className="space-y-4 text-[#c2c6d6] text-sm leading-relaxed">
          {isPrivacy ? (
            <>
              <p>Last updated: January 2024</p>
              <h3 className="text-lg font-headline font-bold text-[#dae2fd] mt-6">1. Information We Collect</h3>
              <p>We collect information you provide directly to us, such as your name, email address, WhatsApp number, and any messages you send through our booking form.</p>
              <h3 className="text-lg font-headline font-bold text-[#dae2fd] mt-6">2. How We Use Your Information</h3>
              <p>We use the information we collect to respond to your inquiries, provide our services, and communicate with you about projects and updates.</p>
              <h3 className="text-lg font-headline font-bold text-[#dae2fd] mt-6">3. Information Sharing</h3>
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties. Your data is used solely for the purpose of delivering our services.</p>
              <h3 className="text-lg font-headline font-bold text-[#dae2fd] mt-6">4. Data Security</h3>
              <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, or destruction.</p>
              <h3 className="text-lg font-headline font-bold text-[#dae2fd] mt-6">5. Contact Us</h3>
              <p>If you have any questions about this Privacy Policy, please contact us through our booking form.</p>
            </>
          ) : (
            <>
              <p>Last updated: January 2024</p>
              <h3 className="text-lg font-headline font-bold text-[#dae2fd] mt-6">1. Services</h3>
              <p>Byteframe Studio provides web design, web application development, booking systems, and related digital services. All projects are subject to individual agreements.</p>
              <h3 className="text-lg font-headline font-bold text-[#dae2fd] mt-6">2. Project Timeline</h3>
              <p>Timelines are estimates and may vary based on project complexity and client responsiveness. We aim to deliver most projects within 2–3 weeks.</p>
              <h3 className="text-lg font-headline font-bold text-[#dae2fd] mt-6">3. Payment Terms</h3>
              <p>Payment terms will be agreed upon before project commencement. A deposit may be required for larger projects.</p>
              <h3 className="text-lg font-headline font-bold text-[#dae2fd] mt-6">4. Intellectual Property</h3>
              <p>Upon full payment, all deliverables become the property of the client unless otherwise stated in the project agreement.</p>
              <h3 className="text-lg font-headline font-bold text-[#dae2fd] mt-6">5. Limitation of Liability</h3>
              <p>Byteframe Studio shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PolicyModal;
