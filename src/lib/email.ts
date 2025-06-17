import nodemailer from "nodemailer";
import path from "path";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  // tls: {
  //   rejectUnauthorized: false
  // },
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function sendPasswordResetEmail(email: string, resetUrl: string) {
  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: email,
    subject: "Password Reset Request",
    html: `
      <h1>Password Reset Request</h1>
      <p>You requested a password reset for your account.</p>
      <p>Click the link below to reset your password:</p>
      <a href="${resetUrl}">Reset Password</a>
      <p>This link will expire in 1 hour.</p>
      <p>If you didn't request this, please ignore this email.</p>
    `,
  };

  await transporter.sendMail(mailOptions);
} 

export async function sendBook(email: string) {
  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: email,
    subject: "Your copy of Build Anyway is here!",
    html: `
    <h1>You've taken the first step. Thank you.</h1>
    <p>This book is not a magic formula. It’s a playbook built from the mud — for founders like you, building with what they have.</p>
    <p>Your copy of <strong>Build Anyway</strong> is attached to this email. Read it. Test it. Make it your own.</p>
    <p>If anything isn’t clear, or if you hit a wall and want to talk — reply to this email. I read every message.</p>
    <p>Build with courage. Build anyway.</p>
    <p>- Eliutherius Juma</p>
    `,
    attachments: [
      {
        filename: "book.pdf",
        path: path.join(process.cwd(), "files/Build_Anyway_By_EJuma.pdf"), // Adjust path as needed
        contentType: "application/pdf",
      },
    ],
  };
  await transporter.sendMail(mailOptions);
}