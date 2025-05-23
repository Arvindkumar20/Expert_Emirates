import React from 'react';
import FacebookIcon from '../assets/support/facebook.png';
import InstagramIcon from '../assets/support/insta.png';
import YouTubeIcon from '../assets/support/youtube.png';

const FollowUsSection = () => {
  return (
    // Outer black background with safe padding and responsive center
    <div className="bg-black px-4 py-6 sm:py-8 md:py-10 flex justify-center">
      {/* Inner box with original color and responsive spacing */}
      <div className="bg-[#1b181f] rounded-2xl px-4 sm:px-6 md:px-8 py-8 sm:py-10 text-center w-full max-w-4xl">
        {/* Gradient Heading */}
        <h2 className="text-transparent bg-clip-text bg-gradient-to-t from-[#281000] via-[#FFE976] to-[#281000]
                       text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-relaxed tracking-widest font-[Poppins]"
                       style={{
                        fontFamily: 'Poppins',
                       }}
                       >
          Follow us
        </h2>

        {/* Subtext */}
        <p className="text-md sm:text-md text-gray-300 mt-3 sm:mt-4 leading-relaxed tracking-widest font-sans font-normal">
          Get market updates and exclusive trading tips on our <br className="hidden sm:inline" />
          social channels
        </p>

        {/* Social Icons */}
        <div className="flex justify-center items-center space-x-6 mt-5 sm:mt-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img
              src={FacebookIcon}
              alt="Facebook"
              className="w-16 h-16 sm:w-14 sm:h-14 hover:scale-110 transition-transform"
            />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img
              src={InstagramIcon}
              alt="Instagram"
              className="w-16 h-16 sm:w-14 sm:h-14 hover:scale-110 transition-transform"
            />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img
              src={YouTubeIcon}
              alt="YouTube"
              className="w-16 h-16 sm:w-14 sm:h-14 hover:scale-110 transition-transform"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FollowUsSection;
