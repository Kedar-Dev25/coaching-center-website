import { useEffect, useState } from "react";
import Icon from "./Icon";
import { PHONE_TEL, whatsappLink } from "../config";

// Sticky Call / WhatsApp bar for phones. Slides in after the hero.
function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`mobile-cta ${visible ? "visible" : ""}`}>
      <a className="btn btn-primary" href={`tel:${PHONE_TEL}`}>
        <Icon name="phone" size={18} /> Call Now
      </a>
      <a
        className="btn btn-whatsapp"
        href={whatsappLink("Hi Leads Academy, I'd like to know more about admissions.")}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="message" size={18} /> WhatsApp
      </a>
    </div>
  );
}

export default MobileCTA;
