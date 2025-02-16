import dbConnection from "@/config/connectDB";
import ContactFormModel from "@/models/Contact";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  await dbConnection();

  try {
    const { name, phone, email, message } = await req.json(); // Extract form data

    // Validate input data
    if (!name || !email || !message) {
      return NextResponse.json({
        status: 400,
        error: "Name, email, and message are required fields.",
      });
    }

    // Save to MongoDB
    const newContact = new ContactFormModel({ name, phone, email, message });
    await newContact.save();

    // Send email to admin
    await sendEmailToAdmin(name, phone, email, message);

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
// Function to send email to multiple admins
async function sendEmailToAdmin(name, phone, email, message) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: false, // SSL
      auth: {
        user: process.env.ADMIN_EMAIL, // Use the first email for authentication
        pass: process.env.EMAIL_PASS,
      },
      logger: true, // Logs SMTP communication
      debug: true, // Enables debugging
    });

    const mailOptions = {
      from: process.env.EMAIL_USER.split(",")[0], // Send from the first email
      to: process.env.EMAIL_USER.split(","), // Send to all emails in the env
      subject: "New Contact Form Submission",
      html: `
      <html>
        <body style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; margin: 0; padding: 0; background-color: #f7f7f7;">
          <div style="width: 100%; max-width: 600px; margin: 20px auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #007bff; text-align: center; font-size: 24px; margin-bottom: 20px;">New Contact Form Submission</h2>
            
            <div style="margin-bottom: 20px;">
              <p style="font-size: 16px; margin: 5px 0;"><strong>Name:</strong> ${name}</p>
              <p style="font-size: 16px; margin: 5px 0;"><strong>Phone:</strong> ${phone}</p>
              <p style="font-size: 16px; margin: 5px 0;"><strong>Email:</strong> ${email}</p>
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
