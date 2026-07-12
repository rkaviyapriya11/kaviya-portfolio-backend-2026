import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const smtpUser = process.env.SMTP_USER?.trim();
const smtpPass = process.env.SMTP_PASS?.trim();

if (!smtpUser || !smtpPass) {
  throw new Error('SMTP credentials are missing. Please set SMTP_USER and SMTP_PASS in your .env file.');
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
});

interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
}

export const sendEmail = async ({
  to,
  subject,
  html,
}: SendEmailOptions) => {
  try {
    const info = await transporter.sendMail({
      from: `"Kaviya-Portfolio" <${smtpUser}>`,
      to,
      subject,
      html,
    });

    console.log('Email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
};