import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  DropdownMenu,
  DropdownTrigger,
  Dropdown,
  DropdownItem,
} from "@heroui/react";
import { BiPlus } from "react-icons/bi";
import { UploadButton } from "@uploadthing/react";
import { toast } from "react-toastify";

export default function ModalPopup({ products, setProducts }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [src, setSrc] = useState("");
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function submitForm() {
    setIsLoading(true);

    try {
      const response = await fetch("/api/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: src, name: productName, category }),
      });

      if (response.ok) {
        const successAudio = new Audio("/mp3/successRing.mp3");
        successAudio.play();

        toast.success("Form Submitted Successfully");

        // Clear form fields
        setProductName("");
        setCategory("");
        setSrc("");

        // Fetch updated products
        fetchProducts();
      } else {
        toast.error("Failed to submit form");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }

  async function fetchProducts() {
    try {
      const response = await fetch("/api/product");

      if (!response.ok) {
        toast.error("Error Fetching Products.");
        return;
      }

      const result = await response.json(); // ✅ Corrected JSON parsing
      setProducts(result);
      console.log(result, "fetched products"); // ✅ Moved log inside function
    } catch (error) {
      toast.error("Failed to fetch products.");
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []); // ✅ No dependency on `products`

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Button
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold"
          onPress={onOpen}
        >
          Add New <BiPlus className="text-lg text-white" />
        </Button>
      </div>

      <Modal backdrop={"opaque"} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add Product
              </ModalHeader>
              <ModalBody>
                {src && (
                  <img
                    className="w-full h-48 object-cover rounded-lg mb-4"
                    src={src}
                    alt="Uploaded"
                  />
                )}

                <input
                  type="text"
                  className="w-full mt-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Product Name"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />

                <Dropdown>
                  <DropdownTrigger>
                    <Button
                      className="border border-gray-300 text-start flex justify-start rounded-lg"
                      variant="bordered"
                    >
                      {category || "Category"}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    color="default"
                    onAction={(key) => setCategory(key)}
                  >
                    <DropdownItem key="Reactive_Dyes">Reactive Dyes</DropdownItem>
                    <DropdownItem key="Disperse_Dyes">Disperse Dyes</DropdownItem>
                    <DropdownItem key="Acrylic_Dyes">Acrylic Dyes</DropdownItem>
                    <DropdownItem key="Direct_Dyes">Direct Dyes</DropdownItem>
                    <DropdownItem key="Sulphur_Dyes">Sulphur Dyes</DropdownItem>
                    <DropdownItem key="HPMC">HPMC</DropdownItem>
                  </DropdownMenu>
                </Dropdown>

                <UploadButton
                  endpoint="imageUploader"
                  onClientUploadComplete={(res) => {
                    setSrc(res?.[0]?.url || ""); // Ensure correct image URL extraction
                  }}
                  onUploadError={(error) => {
                    alert(`ERROR! ${error.message}`);
                  }}
                />
              </ModalBody>

              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={submitForm}
                  isLoading={isLoading}
                >
                  Publish
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
