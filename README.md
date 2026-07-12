# Portfolio Backend

## Environment Variables

Create a .env file in the server root with:

```env
PORT=9070
NODE_ENV=development
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-gmail-app-password
MAIL_FROM=your-email@gmail.com
MAIL_TO=your-email@gmail.com
```

## Gmail App Password Setup

1. Open your Google Account.
2. Go to Security > 2-Step Verification.
3. Create an App Password for Mail.
4. Use that value in SMTP_PASS.

## API Example

```http
POST http://localhost:9070/v1/user/create-contact
Content-Type: application/json

{
  "userName": "Kaviyapriya",
  "userMail": "user@example.com",
  "subject": "Project Inquiry",
  "message": "Hello, I would like to discuss a project."
}
```
