"use client";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full px-6 md:px-16 py-20 bg-black text-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Let's Work Together
        </h2>

        <p className="mb-6 text-gray-300">
          Fill out the form and we’ll get back to you within 24 hours.
        </p>

        <form className="grid gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg text-black"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg text-black"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="p-3 rounded-lg text-black"
            required
          ></textarea>

          <button
            type="submit"
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
