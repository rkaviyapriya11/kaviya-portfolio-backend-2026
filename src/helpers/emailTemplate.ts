interface ContactEmailData {
  name: string;
  email: string;
  message: string;
  subject?: string;
}
 
export const contactEmailTemplate = ({
  name,
  email,
  message,
  subject,
}: ContactEmailData): string => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${subject}</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f5f7; font-family:'Segoe UI', Arial, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f5f7; padding:40px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.06);">
 
          <!-- Header -->
          <tr>
            <td style="background-color:#111827; padding:28px 32px;">
              <h1 style="margin:0; color:#ffffff; font-size:20px; font-weight:600; letter-spacing:0.3px;">
                Kaviya &mdash; Portfolio
              </h1>
              <p style="margin:6px 0 0; color:#9ca3af; font-size:13px;">
                New message received from your portfolio site
              </p>
            </td>
          </tr>
 
          <!-- Body -->
          <tr>
            <td style="padding:32px;">
              <h2 style="margin:0 0 20px; font-size:18px; color:#111827; font-weight:600;">
                ${subject}
              </h2>
 
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                <tr>
                  <td style="padding:8px 0; font-size:14px; color:#6b7280; width:100px;">Name</td>
                  <td style="padding:8px 0; font-size:14px; color:#111827; font-weight:500;">${name}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0; font-size:14px; color:#6b7280;">Email</td>
                  <td style="padding:8px 0; font-size:14px;">
                    <a href="mailto:${email}" style="color:#2563eb; text-decoration:none; font-weight:500;">${email}</a>
                  </td>
                </tr>
              </table>
  <div style="border-top:1px solid #e5e7eb; padding-top:20px;">
                <p style="margin:0 0 8px; font-size:13px; color:#6b7280; text-transform:uppercase; letter-spacing:0.5px;">Subject</p>
                <p style="margin:0; font-size:15px; line-height:1.6; color:#374151; white-space:pre-wrap;">${subject}</p>
              </div>
              <div style="border-top:1px solid #e5e7eb; padding-top:20px;">
                <p style="margin:0 0 8px; font-size:13px; color:#6b7280; text-transform:uppercase; letter-spacing:0.5px;">Message</p>
                <p style="margin:0; font-size:15px; line-height:1.6; color:#374151; white-space:pre-wrap;">${message}</p>
              </div>
            </td>
          </tr>
 
          <!-- CTA -->
          <tr>
            <td style="padding:0 32px 32px;">
              <a href="mailto:${email}" style="display:inline-block; background-color:#111827; color:#ffffff; text-decoration:none; padding:12px 24px; border-radius:6px; font-size:14px; font-weight:600;">
                Reply to ${name}
              </a>
            </td>
          </tr>
 
          <!-- Footer -->
          <tr>
            <td style="background-color:#f9fafb; padding:20px 32px; border-top:1px solid #e5e7eb;">
              <p style="margin:0; font-size:12px; color:#9ca3af; text-align:center;">
                This message was sent via the contact form on Kaviya's portfolio website.
              </p>
            </td>
          </tr>
 
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
}