import dbConnection from "@/config/connectDB";
import ProductModel from "@/models/Product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  
  await dbConnection();

  try {
    // Fetch all logos from the database
    const data = await ProductModel.find();

    return new NextResponse(JSON.stringify({ message: "Success", data }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  await dbConnection();

  try {
    const { image, name, category } = await req.json(); // Extract form data

    // Validate input data
    if (!name || !category || !image) {
      return NextResponse.json(
        {
          error: "Name, category, and image are required fields.",
        },
        { status: 400 }
      );
    }

    // Save to MongoDB
    const newProduct = new ProductModel({ name, category, image });
    await newProduct.save();

    return NextResponse.json(
      {
        message: "Product saved successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error from PRODUCT API:", error);

    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
      // Connect to the database
      await dbConnection();

    // Extract the productId from the request body
    const { productId } = await req.json(); // Assuming the productId is sent in the body as JSON

    console.log(productId,"productId")
    
    // Find and delete the product by ID
    const deletedProduct = await ProductModel.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return NextResponse.json(
        { status: 404, error: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ status: 200, message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      { status: 500, error: "Failed to delete product" },
      { status: 500 }
    );
  }
}