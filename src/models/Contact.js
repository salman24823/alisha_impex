import mongoose from "mongoose";

// Define Schema
const FormData = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    company: { type: String, required: true }, 
    subject: { type: String, required: true }, 
    message: { type: String, required: true },
  },
  { timestamps: true } // Adds createdAt and updatedAt automatically
);

// Prevent OverwriteModelError
const ContactFormModel = mongoose.models.ContactForm || mongoose.model("ContactForm", FormData);

export default ContactFormModel;
