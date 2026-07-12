import { Request, Response } from "express";
import { sendEmail } from "../../middlewares/sendEmail";
import { contactEmailTemplate } from "../../helpers/emailTemplate";

export const ContactDetailsController = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { userName, userMail, subject, message } = req.body;
    

    if (!userName || !userMail || !subject || !message) {
      res.status(400).json({ message: "Please enter all required feilds" });
      return;
    }
    
   await sendEmail({
  to: 'rkaviyapriya11@gmail.com',
  subject: 'New Portfolio Contact',
  html: contactEmailTemplate({
    name: userName,
    email: userMail,
    subject:subject,
    message:message,
  }),
});
    res.status(200).json({
      message: "Contact details submitted successfully",
    });
  } catch (error: any) {
    console.error("Error occured in ContactDetails:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
