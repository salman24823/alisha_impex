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
async function sendEmailToAdmin(name, phone, email, message) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use your email service (Gmail, Outlook, etc.)
      auth: {
        user: process.env.EMAIL_USER, // Admin email (stored in environment variables)
        pass: process.env.EMAIL_PASS, // Admin email password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL, // Admin email where notifications should be sent
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
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
}

//   try {
//     await dbConnection();

//     const Data = await req.json();

//     console.log(Data,"Data")

//     // const abc = "hello world";

//     return NextResponse.json({ Data }, { status: 200 });

// } catch (error) {
//     console.log(error, "error from POST API");
//     return NextResponse.json({ status: 237946 });
//   }
// }

// export async function GET() {
//   try {
//     await dbConnection();

//     const abc = "hello world";

//     return NextResponse.json({ abc }, { status: 200 });

//   } catch (error) {
//     console.log(error, "error from get API");
//   }
// }

// import dbConnection from "@/config/connectDB";
// import NewsModel from "@/models/newsModel";
// import { NextResponse } from "next/server";

// export async function GET() {

//   await dbConnection()

//   try {

//     const result = await NewsModel.find();

//     return NextResponse.json(result, { status: 200 });

//   } catch (error) {
//     console.error("Error handling GET request:", error);
//     return NextResponse.json(
//       { message: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }

// export async function POST(req) {

//   await dbConnection()

//   try {
//     const data = await req.json(); // Parse the incoming JSON data
//     const { newsTitle, newsDescription, newsLinks } = data;

//     // Validate the incoming data
//     if (!newsTitle || !newsDescription || !newsLinks || newsLinks.length === 0) {
//       return NextResponse.json(
//         { message: "Missing required fields." },
//         { status: 400 }
//       );
//     }

//     // Save the news to the database (mocked here)
//     const result = await NewsModel({
//       title: newsTitle,
//       description: newsDescription,
//       links: newsLinks,
//     });

//     // save in the mongo db
//     await result.save();

//     // Fetch the updated list of news after deletion
//     const updatedNews = await NewsModel.find();
//     return new NextResponse(JSON.stringify(updatedNews), { status: 201 });

//   } catch (error) {
//     console.error("Error handling POST request:", error);
//     return NextResponse.json(
//       { message: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }
