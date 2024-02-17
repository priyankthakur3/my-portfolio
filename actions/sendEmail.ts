"use server";
import { getErrorMessage } from "@/lib/utils/getErrorMessage";
import { validateString } from "@/lib/utils/validations";
import { Resend } from "resend";
import ContactFormEmail from "@/email/ContactFormEmail";
import xss from "xss";
import React from "react";
const resend = new Resend(process.env.RESEND_API_KEY);
export const sendEmail = async (formData: FormData) => {
  let emailID = formData.get("sendEmail");
  let message = formData.get("sendMsg");

  if (!validateString(emailID, 500)) {
    return {
      error: "Invalid EmailID",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid Message",
    };
  }
  emailID = xss(emailID as string);
  message = xss(message as string);
  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "priyankthakur3@live.com",
      subject: "Message from Contact Form",
      reply_to: emailID as string,
      text: message as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: emailID as string,
      }),
    });
    if (data && typeof data === "object" && "error" in data && data.error) {
      throw new Error(getErrorMessage(data.error));
    }
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }
  return {
    data,
  };
};
