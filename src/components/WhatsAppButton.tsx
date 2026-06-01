import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  productName?: string;
  floating?: boolean;
  className?: string;
}

export default function WhatsAppButton({ productName, floating = false, className = '' }: WhatsAppButtonProps) {
  const phoneNumber = '212600000000'; // Replace with actual number
  const message = productName
    ? `Bonjour ASSIA, je souhaite commander ce produit : ${productName}`
    : 'Bonjour ASSIA, je souhaite avoir plus d\'informations sur vos produits.';

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  if (floating) {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg whatsapp-pulse hover:bg-green-600 transition-colors"
        aria-label="Commander via WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" fill="white" />
      </a>
    );
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-sm font-medium text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-green-600/20 ${className}`}
    >
      <MessageCircle className="w-4 h-4" fill="white" />
      Commander via WhatsApp
    </a>
  );
}
