import React from "react";
import Joi from "joi";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import "./form.css";
import axios from "axios";

const schema = Joi.object({
  firstName: Joi.string()
    .pattern(/^[A-Za-zА-Яа-яЁёҐґІіЇїЄє']{3,20}$/)
    .required()
    .messages({
      "string.pattern.base": "Можна вводити лише букви від 3 до 20",
      "string.empty": "Поле firstName обов'язкове для заповнення",
    }),
  phone: Joi.string()
    .required()
    .messages({ "string.empty": "Поле phone обов'язкове для заповнення" }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.email": "Некоректний email",
      "string.empty": "Поле email обов'язкове для заповнення",
    }),
  description: Joi.string().allow(""),
});

const OrderForm = () => {
  type FormData = {
    firstName: string;
    phone: string;
    email: string;
    description: string;
  };

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: joiResolver(schema),
    mode: "onChange", //має різні варіанти, при вводі, при фокусі і тд
  });

  const onSubmit = handleSubmit((data) => {
    sendTelegramMessage(data);
  });

  const telegramBotToken: string = process.env.REACT_APP_TOKEN_TELLEGRAM;
  const chatId: string = process.env.REACT_APP_CHATID_TELEGRAM;

  const sendTelegramMessage = async (data: any) => {
    try {
      await axios.post(
        `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
        {
          chat_id: chatId,
          text: `First Name: ${data.firstName}\nPhone: ${data.phone}\nEmail: ${data.email}\nDescription: ${data.description}`,
        },
      );

      console.log("Повідомлення відправлено успішно!");
    } catch (error) {
      console.error("Помилка при відправленні повідомлення:", error);
    }
  };

  return (
    <>
      {" "}
      <form className="form-orders" onSubmit={onSubmit}>
        <span>
          Залиште заявку, щоб обговорити проект з дизайнером. Ми зв’яжемося з
          вами, відповімо на всі питання і призначимо зустріч.
        </span>
        <input {...register("firstName")} placeholder="First Name*" />
        <input {...register("phone")} placeholder="Your Phone*" type="tel" />
        <input {...register("email")} placeholder="Email*" />
        <input {...register("description")} placeholder="Description ..." />

        <button type="submit"> Send </button>
        <div className="red">
          {errors.firstName && <div>{errors.firstName.message}</div>}
          {errors.email && <div>{errors.email.message}</div>}
          {errors.phone && <div>{errors.phone.message}</div>}
          {errors.description && <div>{errors.description.message}</div>}
        </div>
      </form>
    </>
  );
};

export default OrderForm;
