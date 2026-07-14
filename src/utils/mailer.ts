// import nodemailer from 'nodemailer';
// import type Mail from 'nodemailer/lib/mailer';
// import { env } from '../config/env';

// const transporter = nodemailer.createTransport({
//   host: env.smtpHost,
//   port: env.smtpPort,
//   secure: env.smtpSecure,
//   auth: {
//     user: env.smtpUser,
//     pass: env.smtpPass,
//   },
// });

// export const sendContactMail = async (payload: {
//   userName: string;
//   userMail: string;
//   subject: string;
//   message: string;
//   createdAt: string;
// }) => {
//   const html = `
//     <div style="font-family: Arial, sans-serif; background-color:#f7f8fc; padding:24px;">
//       <div style="max-width:680px; margin:0 auto; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.08);">
//         <div style="background:linear-gradient(135deg,#4f46e5,#7c3aed); padding:24px 32px; color:#ffffff;">
//           <h2 style="margin:0; font-size:24px;">Portfolio Contact Request</h2>
//           <p style="margin:6px 0 0; opacity:0.9;">A new message was submitted from your portfolio website.</p>
//         </div>
//         <div style="padding:28px 32px; color:#1f2937;">
//           <p style="margin:0 0 16px;">You received a new contact form submission with the following details:</p>
//           <table style="width:100%; border-collapse:collapse;">
//             <tr><td style="padding:8px 0; font-weight:700; width:140px;">Name</td><td style="padding:8px 0;">${payload.userName}</td></tr>
//             <tr><td style="padding:8px 0; font-weight:700;">Email</td><td style="padding:8px 0;">${payload.userMail}</td></tr>
//             <tr><td style="padding:8px 0; font-weight:700;">Subject</td><td style="padding:8px 0;">${payload.subject}</td></tr>
//             <tr><td style="padding:8px 0; font-weight:700; vertical-align:top;">Message</td><td style="padding:8px 0; white-space:pre-wrap;">${payload.message}</td></tr>
//             <tr><td style="padding:8px 0; font-weight:700;">Submitted At</td><td style="padding:8px 0;">${payload.createdAt}</td></tr>
//           </table>
//         </div>
//       </div>
//     </div>
//   `;

//   const mailOptions: Mail.Options = {
//     from: `Portfolio Contact <${env.mailFrom}>`,
//     to: env.mailTo,
//     subject: `New Portfolio Contact: ${payload.subject}`,
//     html,
//   };

//   await transporter.sendMail(mailOptions);
// };
