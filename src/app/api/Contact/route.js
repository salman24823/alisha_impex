import dbConnection from "@/config/connectDB";
import ContactFormModel from "@/models/Contact";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  await dbConnection();

  try {
    const { name, company, phone, email, subject, message } = await req.json(); // Extract form data

    // Validate input data
    if (!name || !email || !message || !company || !subject) {
      return NextResponse.json({
        status: 400,
        error: "Name, company, email, subject, and message are required fields.",
      });
    }

    // Save to MongoDB
    const newContact = new ContactFormModel({ name, company, phone, email, subject, message });
    await newContact.save();

    // Send email to admin
    await sendEmailToAdmin(name, company, phone, email, subject, message);

    return NextResponse.json({
      status: 200,
      message: "Contact saved successfully",
    });
  } catch (error) {
    console.error("Error from CONTACT API:", error);

    return NextResponse.json({
      status: 500,
      error: "Internal Server Error",
    });
  }
}

// Function to send email to admin
async function sendEmailToAdmin(name, company, phone, email, subject, message) {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
      logger: true,
      debug: true,
    });

    const mailOptions = {
      from: process.env.EMAIL_USER.split(",")[0],
      to: process.env.EMAIL_USER.split(","),
      subject: "New Contact Form Submission",
      html: `
      <html>
        <body style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; margin: 0; padding: 0; background-color: #f7f7f7;">
          <div style="width: 100%; max-width: 600px; margin: 20px auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #007bff; text-align: center; font-size: 24px; margin-bottom: 20px;">New Contact Form Submission</h2>
            
            <div style="margin-bottom: 20px;">
              <p style="font-size: 16px; margin: 5px 0;"><strong>Name:</strong> ${name}</p>
              <p style="font-size: 16px; margin: 5px 0;"><strong>Company:</strong> ${company}</p>
              <p style="font-size: 16px; margin: 5px 0;"><strong>Phone:</strong> ${phone}</p>
              <p style="font-size: 16px; margin: 5px 0;"><strong>Email:</strong> ${email}</p>
              <p style="font-size: 16px; margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
            </div>
  
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
              <p style="font-size: 16px; margin: 5px 0;"><strong>Message:</strong></p>
              <p style="font-size: 16px; margin-top: 10px; color: #555;">${message}</p>
            </div>
            
            <div style="margin-top: 20px; text-align: center; font-size: 14px; color: #777;">
              <p>Best Regards,</p>
            </div>
          </div>
        </body>
      </html>
    `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully to multiple recipients");
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
}