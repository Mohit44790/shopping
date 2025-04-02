import React from "react";

const logos = [
  "https://pngimg.com/d/amazon_PNG5.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVWzGxiYGlEM-IzG4PWRrn875F0LOcXLulhQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz9Qkg-GB8WdP865DfGolRNW1FfDTQ61X0IA&s",
  "https://w7.pngwing.com/pngs/124/600/png-transparent-microsoft-logo-microsoft-thumbnail.png",
  
];

const Sponsorship = () => {
  return (
    <div className="py-8 bg-gray-100 overflow-hidden">
      <div className="relative flex items-center">
        {/* Infinite Scrolling Container */}
        <div className="flex space-x-8 animate-scroll hover:pause-scroll">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Sponsor `}
              className="h-16 w-auto object-contain animate-rotate"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsorship;
