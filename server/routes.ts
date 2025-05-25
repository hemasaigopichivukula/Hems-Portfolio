import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body as ContactFormData;

      if (!name || !email || !message) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      // Create Nodemailer transporter with Gmail
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: 'hchiv001@ucr.edu', // Your email
          pass: 'nesa tbud jick syne' // Your app password
        }
      });

      // Email options
      const mailOptions = {
        from: 'hchiv001@ucr.edu',
        to: 'hchiv001@ucr.edu',
        subject: `New Contact Form Message: ${subject || 'No Subject'}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`
      };

      // Send email
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');

      return res.status(200).json({
        message: "Message received successfully! We'll be in touch soon."
      });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ 
        message: "Failed to send email. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}