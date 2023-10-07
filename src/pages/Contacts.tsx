import React from "react";
import MyMapComponent from "../components/socialLinks/socialLinks/MyMapComponent";
import OrderForm from "../components/forms/OrderForm";
import { SocialLinks } from "../components";

const Contacts = () => {
  return (
    <div className="contacts">
      <button className="call-button">
        <a className="call-link" href="tel:+380977454521">Зателефонувати нам</a>
      </button>
      <div className="contacts-box">
        
        <div className="for-contact">

          <MyMapComponent />
          <OrderForm />
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export { Contacts };
