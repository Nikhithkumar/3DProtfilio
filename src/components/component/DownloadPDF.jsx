import React from "react";

const DownloadResume = () => {
  return (
    <div className="z-50 absolute">
      <a
         href="/NikhithResume.pdf"  // Ensure the path is relative to the public folder
        download="NikhithResume" // Optional: rename the file when downloaded
        className="mt-5 py-2 px-6 bg-[#915EFF] text-white font-bold text-lg rounded-md shadow-lg hover:bg-[#7a4ecf] transition duration-300"
      >
        Download Resume
      </a>
    </div>
  );
};

export default DownloadResume;
