"use client";

const testimonials = [
  {
    name: "Rahul Sharma — CEO, TechLore",
    review:
      "Aliens Hub built our SaaS dashboard and automated our workflows. Amazing quality and communication!",
  },
  {
    name: "Aman Singh — Founder, BuildX",
    review:
      "Best developers I’ve worked with. Fast delivery, clean code, scalable architecture.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full px-6 md:px-16 py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-10">
          Client Testimonials
        </h2>

        <div className="grid gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl"
            >
              <p className="text-gray-700 italic">“{t.review}”</p>
              <h4 className="mt-4 font-semibold text-black">{t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
