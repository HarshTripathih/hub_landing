"use client";

import { useState } from "react";

export default function EnquiryModal() {
  const [loading, setLoading] = useState(false);

  const closeModal = () => {
    document.getElementById("enquiryModal")?.classList.add("hidden");
  };

  const submitForm = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
    };

    const res = await fetch("/api/enquiry", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    setLoading(false);

    if (res.ok) {
      alert("Thank you! Brochure unlocked.");

      // Notify HeroSection
      window.dispatchEvent(new Event("brochure-updated"));

      closeModal();
      window.open("/brochure.pdf", "_blank");
    }
  };

  return (
    <div
      id="enquiryModal"
      className="hidden fixed inset-0 bg-black/40 flex justify-center items-center z-50"
    >
      <form
        onSubmit={submitForm}
        className="bg-white p-6 rounded-xl shadow-lg w-96 relative"
      >
        <button
          type="button"
          className="absolute top-2 right-2 text-gray-600 text-xl"
          onClick={closeModal}
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4">Fill Enquiry Form</h2>

        <input
          name="name"
          placeholder="Full Name"
          className="w-full border p-2 mb-3 rounded"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-3 rounded"
          required
        />

        <input
          name="phone"
          placeholder="Phone Number"
          className="w-full border p-2 mb-4 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-3 rounded-lg"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit & Download"}
        </button>
      </form>
    </div>
  );
}
