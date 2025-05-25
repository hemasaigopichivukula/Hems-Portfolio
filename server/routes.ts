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

      // Create Nodemailer transporter
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_APP_PASSWORD
        },
        tls: {
          rejectUnauthorized: false
        }
      });

      // Email options
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `Portfolio Contact: ${subject || 'New Message'}`,
        text: `
From: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}
        `,
        headers: {
          'priority': 'high'
        }
      };

      // Verify transporter
      await transporter.verify();

      // Send email
      await transporter.sendMail(mailOptions);
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
        from: process.env.EMAIL_USER,
        to: 'hchiv001@ucr.edu', // Your email where you want to receive notifications
        subject: `Portfolio Contact: ${subject || 'New Message'}`,
        text: `
Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}
        `
      };

      // Send email
      await transporter.sendMail(mailOptions);
      console.log("Contact form submission:", { name, email, subject, message });

      // Return a success response
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