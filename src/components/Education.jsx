import React from "react";

const Education = () => {
  return (
    <div className="p-8 py-20">
      <h2 className="text-4xl font-bold text-center mb-10">Education</h2>

      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* HSC Card */}
        <div className=" rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-3 border-b border-gray-200 pb-2">
            Higher Secondary Certificate (HSC)
          </h3>
          <p className="text-gray-200 mb-1">Completed in 2024</p>
          <p className="text-gray-200">Afajuddin Memorial School And College</p>
        </div>

        {/* SSC Card */}
        <div className=" rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-3 border-b border-gray-200 pb-2">
            Secondary School Certificate (SSC)
          </h3>
          <p className="text-gray-200 mb-1">Completed in 2022</p>
          <p className="text-gray-200">Rofiqraju Cadet Academy</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
