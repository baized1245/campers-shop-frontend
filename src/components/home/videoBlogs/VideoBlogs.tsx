import React from "react";

interface VideoBlog {
  title: string;
  description: string;
  videoUrl: string;
}

const videoBlogs: VideoBlog[] = [
  {
    title: "Camping Essentials: What to Pack",
    description: "Learn what essentials to pack for a successful camping trip.",
    videoUrl: "https://www.youtube.com/embed/Scxs7L0vhZ4",
  },
  {
    title: "Top 5 Campsites in the USA",
    description: "Discover the top 5 campsites you must visit in the USA.",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
  {
    title: "How to Set Up a Tent",
    description:
      "A step-by-step guide on how to set up a tent quickly and easily.",
    videoUrl: "https://www.youtube.com/embed/FJRVmtOZ9K8",
  },
];

const VideoBlogs: React.FC = () => {
  return (
    <div className="mt-3">
      <h2 className="text-2xl font-semibold text-primary text-center mb-3">
        Video Blogs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videoBlogs.map((video, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg overflow-hidden"
          >
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full"
                src={video.videoUrl}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-2">{video.title}</h3>
              <p className="text-base font-normal">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoBlogs;

// components/Testimonials.tsx
// import React from 'react';

// interface Testimonial {
//   name: string;
//   role: string;
//   company: string;
//   message: string;
//   imageUrl: string;
// }

// const testimonials: Testimonial[] = [
//   {
//     name: "John Doe",
//     role: "CEO",
//     company: "Camping Co.",
//     message: "This is the best camping gear I have ever used! Highly recommend to all outdoor enthusiasts.",
//     imageUrl: "https://randomuser.me/api/portraits/men/32.jpg"
//   },
//   {
//     name: "Jane Smith",
//     role: "Adventure Blogger",
//     company: "Travel Blog",
//     message: "Fantastic service and amazing products. My camping experience has never been better!",
//     imageUrl: "https://randomuser.me/api/portraits/women/44.jpg"
//   },
//   {
//     name: "Samuel Green",
//     role: "Tour Guide",
//     company: "Explore Tours",
//     message: "Our tour groups love the equipment we get from this store. Reliable and durable gear for all conditions.",
//     imageUrl: "https://randomuser.me/api/portraits/men/56.jpg"
//   }
// ];

// const Testimonials: React.FC = () => {
//   return (
//     <div className="max-w-6xl mx-auto py-10 px-4">
//       <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {testimonials.map((testimonial, index) => (
//           <div key={index} className="border rounded-lg shadow-lg p-6">
//             <div className="flex items-center mb-4">
//               <img
//                 src={testimonial.imageUrl}
//                 alt={testimonial.name}
//                 className="w-16 h-16 rounded-full mr-4"
//               />
//               <div>
//                 <h3 className="text-xl font-semibold">{testimonial.name}</h3>
//                 <p className="text-gray-600">{testimonial.role} at {testimonial.company}</p>
//               </div>
//             </div>
//             <p className="text-gray-700">{testimonial.message}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Testimonials;
