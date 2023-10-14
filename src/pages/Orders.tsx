import React from "react";
import OrderForm from "../components/forms/OrderForm";
import 'firebase/firestore';

const Orders = () => {

  return (
    <div className="orders">
      <div className="orders-img">
        <img
          src={`${process.env.PUBLIC_URL + "/images/interior.jpg"}`}
          alt="myPhoto"
        ></img>
      </div>
      <OrderForm />
    </div>
  );
};

export { Orders };
