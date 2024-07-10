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
    <div className="my-3">
      <h2 className="text-2xl font-semibold text-primary text-center mb-3">
        Video Blogs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
