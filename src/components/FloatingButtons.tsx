import { MessageCircle, Phone } from "lucide-react";

const FloatingButtons = () => {
  const openTelegram = () => {
    window.open("https://t.me/quorbik", "_blank");
  };

  const openViber = () => {
    window.open("viber://chat?number=+37368787316", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Telegram Button */}
      <button
        onClick={openTelegram}
        className="floating-btn flex items-center justify-center group hover:bg-[#0088cc] transition-colors"
        aria-label="Contact via Telegram"
      >
        <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Viber Button */}
      <button
        onClick={openViber}
        className="floating-btn flex items-center justify-center group hover:bg-[#665CAC] transition-colors"
        aria-label="Contact via Viber"
      >
        <Phone className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
};

export default FloatingButtons;