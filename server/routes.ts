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

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Handle contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body as ContactFormData;

      // Validate the request body
      if (!name || !email || !message) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
        console.error('Missing email credentials in environment variables');
        return res.status(500).json({ message: 'Email configuration error' });
      }

      // Create Nodemailer transporter
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_APP_PASSWORD
        }
      });

      // Email options
      const mailOptions = {
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: `Portfolio Contact: ${subject || 'New Message'}`,
        text: `From: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
      };

      try {
        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
      } catch (error) {
        console.error('Error sending email:', error);
        throw error;
      }
      console.log("Contact form submission:", { name, email, subject, message });

      return res.status(200).json({ 
        message: "Message received successfully! We'll be in touch soon." 
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      return res.status(500).json({ 
        message: "There was an error processing your request. Please try again later." 
      });
    }
  });
  // Handle contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body as ContactFormData;

      // Validate the request body
      if (!name || !email || !message) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      try {
        // Create Nodemailer transporter
        const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 587,
          secure: false,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_APP_PASSWORD
          }
        } as TransportOptions);

        // Email options
        const mailOptions = {
          from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
          to: process.env.EMAIL_USER,
          subject: `New Contact Form Message: ${subject || 'No Subject'}`,
          text: `New message from your portfolio contact form:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`
        };

        console.log('Attempting to send email with config:', {
          host: 'smtp.gmail.com',
          port: 587,
          auth: {
            user: process.env.EMAIL_USER,
            pass: '****' // Masked for security
          }
        });

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.messageId);
} catch (error) {
        console.error('Failed to send email:', error);
        return res.status(500).json({ message: 'Failed to send email notification' });
      }

      return res.status(200).json({
        message: "Message received successfully! We'll be in touch soon."
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      return res.status(500).json({ 
        message: "There was an error processing your request. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}