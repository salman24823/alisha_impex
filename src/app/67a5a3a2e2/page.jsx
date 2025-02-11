"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";
import { useState, useEffect } from "react";
import ModalPopup from "./Modal."; 
import Filters from "./Filters";
import { BiPencil, BiTrash } from "react-icons/bi";
import Actions from "./Actions";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";

export default function Admin() {
  const { data: session, status } = useSession();
  const [products, setProducts] = useState({ data: [] });

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/product");
      const result = await response.json();
      if (response.ok) {
        setProducts(result);
      } else {
        toast.error("Failed to fetch products");
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      fetchProducts();
    }
  }, [status]);

  async function handleDelete(productId) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch("/api/product", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      });

      if (response.ok) {
        const successAudio = new Audio("/mp3/successRing.mp3");
        successAudio.play();

        toast.success("Deleted Successfully");

        fetchProducts();
      } else {
        toast.error("Failed to Delete.");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  }

  if (status === "loading") return "Loading...";
  if (!session) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-50">
        <h1 className="text-4xl font-bold text-red-500 mb-4">
          Access Denied
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          You do not have permission to access this page.
        </p>
        <p className="text-sm text-gray-500">
          Please contact the administrator if you believe this is an error.
        </p>
      </div>
    );
  }
  return (
    <div className="flex p-5 pt-24 flex-col gap-3">
      <div className="flex justify-end">
        {/* <Filters /> */}
        <ModalPopup products={products} setProducts={setProducts} />
      </div>

      <Table aria-label="Example static collection table" color={"default"}>
        <TableHeader>
          <TableColumn>#</TableColumn>
          <TableColumn>Image</TableColumn>
          <TableColumn>Name</TableColumn>
          <TableColumn>Category</TableColumn>
          <TableColumn>Action</TableColumn>
        </TableHeader>

        <TableBody>
          {(Array.isArray(products.data) ? products.data : []).map(
            (value, index) => (
              <TableRow
                key={value._id}
                className="hover:bg-gray-100 cursor-pointer rounded-lg transition-colors"
              >
                <TableCell className="w-4">{index + 1}</TableCell>
                <TableCell className="w-12">
                  <img
                    src={value.image}
                    alt={value.name}
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                </TableCell>
                <TableCell className="flex-1 w-full">{value.name}</TableCell>
                <TableCell className="flex-1 text-center w-full">
                  {value.category}
                </TableCell>
                <TableCell className="flex w-20 items-center justify-start">
                  <div className="flex gap-5 items-center h-12">
                    <BiTrash
                      onClick={() => handleDelete(value._id)}
                      className="text-red-500 text-lg cursor-pointer"
                    />
                  </div>
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
      <Actions />
    </div>
  );
}