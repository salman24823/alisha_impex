"use client";

import React, { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { toast } from "react-toastify";

const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state

  async function submitForm(e) {
    e.preventDefault(); // Prevent page reload

    setIsLoading(true); // Set loading to true

    try {
      const response = await fetch("/api/Contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, email, message }),
      });

      console.log(response, "response");

      if (response.ok) {
        // Play success sound
        const successAudio = new Audio("/mp3/successRing.mp3");
        successAudio.play();

        toast.success("Form Submitted Successfully");
        // Clear form fields after successful submission
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
      } else {
        toast.error("Failed to submit form");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false); // Reset loading state
    }
  }

  return (
    <div id="contact" className="sections w-full p-[5%] greenback">
      <div className="contact_section grid grid-rows-1 grid-cols-1 md:grid-cols-[1.5fr,1fr] gap-8">
        <div className="flex flex-col gap-12">
          <h2 className="text-white text-3xl font-bold">
            Have questions? Fill out our form, and we’ll get back to you soon!
          </h2>
          <p className="text-white w-full md:w-[80%]">
            Essentials is designed with your customers in mind, so you can track
            and analyze all your data in one central location. There are no
            limits to how you can look at your data.
          </p>
          <div className="ques_list text-white">
            <ul className="font-bold flex flex-col gap-4">
              <li className="flex items-center gap-2">
                <FaRegCheckCircle />
                Tendis tempor ante acu ipsum finibus.
              </li>
              <li className="flex items-center gap-2">
                <FaRegCheckCircle />
                Pellentesque habitant morbi tristique.
              </li>
              <li className="flex items-center gap-2">
                <FaRegCheckCircle />
                Cras facilisis tortor in metus ultrices.
              </li>
              <li className="flex items-center gap-2">
                <FaRegCheckCircle />
                Maecenas volutpat leo in metus pulvinar.
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-auto">
          <form
            className="contact_form flex flex-col items-center gap-4 p-8 bg-white justify-self-end w-full"
            onSubmit={submitForm}
          >
            <span className="text-3xl font-bold green">Get in touch</span>

            <input
              className="p-2 w-full border-bottom border-gray-200 border-b font-light"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="p-2 w-full border-gray-200 border-b font-light"
              type="number"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <input
              className="p-2 w-full border-gray-200 border-b font-light"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              className="p-2 w-full border-gray-200 border-b font-light"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows="3"
            ></textarea>

            <button
              className="w-full text-white rounded-[5px] py-2 font-bold greenback"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;