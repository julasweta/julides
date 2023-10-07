import React from "react";
import { SocialIcon } from "react-social-icons";

const SocialLinks: React.FC = () => {
  return (
    <div className="social">
      <h3> Також можете вибрати будь-який інший спосіб для зв'язку з нами</h3>
      <SocialIcon
        url="https://www.instagram.com/julianna1711"
        aria-label="instagram"
      />
      <SocialIcon url="https://www.facebook.com/jula92" />
      <SocialIcon url="https://t.me/julianna1711" network="telegram" />
    </div>
  );
};

export { SocialLinks };
