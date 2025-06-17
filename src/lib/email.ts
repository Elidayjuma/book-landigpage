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
    subject: "Your eBook Purchase",
    html: `
      <h1>Thank You for Your Purchase!</h1>
      <p>I appreciate your purchase of my eBook.</p>
      <p>Your book is attached to this email.</p>
      <p>If you have any issues, please contact me by replying to this email.</p>
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