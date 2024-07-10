import React from "react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  message: string;
  imageUrl: string;
}

const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    role: "CEO",
    company: "Camping Co.",
    message:
      "This is the best camping gear I have ever used! Highly recommend to all outdoor enthusiasts.",
    imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Smith",
    role: "Adventure Blogger",
    company: "Travel Blog",
    message:
      "Fantastic service and amazing products. My camping experience has never been better!",
    imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Samuel Green",
    role: "Tour Guide",
    company: "Explore Tours",
    message:
      "Our tour groups love the equipment we get from this store. Reliable and durable gear for all conditions.",
    imageUrl: "https://randomuser.me/api/portraits/men/56.jpg",
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="mt-3">
      <h2 className="text-primary text-2xl font-semibold text-center mb-3">
        What Our Customers Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="border rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <img
                src={testimonial.imageUrl}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="text-2xl font-semibold">{testimonial.name}</h3>
                <p className="text-base">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>
            <p className="text-base">{testimonial.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
