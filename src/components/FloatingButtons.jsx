import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const FloatingButtons = () => {
  const WHATSAPP_URL = "https://wa.me/918273490102?text=Hello%20I%20want%20to%20book%20a%20tour";
  const PHONE_NUMBER = "tel:+918273490102";

  return (
    <div className="fixed bottom-6 left-6 flex flex-col items-start space-y-4 z-50">
      {/* Global Call button */}
      <a
        href={PHONE_NUMBER}
        className="flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl hover:bg-blue-700 hover:scale-110 transition-all duration-300"
        aria-label="Call Us"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-20 animate-ping" />
        <FaPhoneAlt size={24} />
      </a>

      {/* WhatsApp button visible everywhere */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:shadow-xl hover:bg-green-600 hover:scale-110 transition-all duration-300"
        aria-label="Contact on WhatsApp"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-40 animate-ping" />
        <FaWhatsapp size={32} />
      </a>
    </div>
  );
};

export default FloatingButtons;
