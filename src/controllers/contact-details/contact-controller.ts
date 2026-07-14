import { Request, Response } from "express";
import { sendEmail } from "../../middlewares/sendEmail";
import { contactEmailTemplate } from "../../helpers/emailTemplate";
import ContactDetails from "../../models/Contact/contact-model";

export const ContactDetailsController = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { userName, userMail, subject, message } = req.body;

    if (!userName || !userMail || !subject || !message) {
      res.status(400).json({ message: "Please enter all required fields" });
      return;
    }

    await ContactDetails.create({
      userName,
      userMail,
      subject,
      message,
    });

    try {
       sendEmail({
        to: "rkaviyapriya11@gmail.com",
        subject: "New Portfolio Contact",
        html: contactEmailTemplate({
          name: userName,
          email: userMail,
          subject,
          message,
        }),
      });
    } catch (mailError) {
      console.error("Email failed:", mailError);
      
    }

    res.status(200).json({
      message: "Contact details submitted successfully",
    });

  } catch (error) {
    console.error("Error occurred in ContactDetails:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
