import React from 'react';

const Document = () => {
  // Define dynamic styles based on props
  const width = "w-3/4"; // 75% width
  const height = "h-auto"; // Dynamic height
  const borderRadius = "rounded-lg"; // Rounded corners

  return (
    <div
      className={`relative ${width} ${height} ${borderRadius} bg-custom-togglegray cursor-pointer p-4`}
    >
  
      {/* User Details */}
      <div className="flex flex-col items-start space-y-2">
          <h2 className="text-white text-left">Introduction</h2>
          <div className="bg-white rounded-lg p-2 text-black w-fit text-left">”Dimen” the 3D Model Annotation System is a web-based platform designed as a business solution to enhance the design process of 3D models that represent business products by addressing the above problems, through collaborative features and advanced tools. This system facilitates seamless real-time collaboration, enabling the stakeholders from designers, project managers, and reviewers to product owners to work together by creating an environment to incorporate feedback and suggestions directly on to the 3D models using textual and voice annotations. By providing comprehensive tools for enhanced annotations and effective communication our system ensures that every stage of the design process is streamlined for productivity and scrutinised and evaluated thoroughly to derive the optimised final output.


</div>
        </div>
      
        <div className="flex flex-col items-center space-y-2">
        <div className="flex flex-col items-start space-y-2">
          <h2 className="text-white text-left">Goals</h2>
          <div className="bg-white rounded-lg p-2 text-black w-fit text-left">Primary goal of the system is to provide a web-based platform to
            streamline and enhance the review process for 3D models that
            represent business products. This involves providing an integrated
            suite of tools and features that facilitate detailed inspection,
            collaborative feedback, and thorough analysis of the design models.
            By doing so, the system aims to improve the efficiency and the
            quality of the review process, ensuring that all stakeholders can
            effectively communicate, evaluate, and refine the product designs,
            guaranteeing that the final output adheres to all business
            requirements and standards.</div>
        </div>
        <div className="flex flex-col items-start space-y-2">
          <h2 className="text-white text-left">Objectives</h2>
          <div className="bg-white rounded-lg p-2 text-black w-fit text-left">Develop a business solution to streamline the review and
              evaluation process of 3D models that represent business products.

              Create an environment where team members/stakeholders can
              brainstorm directly on the 3D models enhancing effective
              real-time collaboration among the stakeholders to consolidate a
              diverse set of ideas and suggestions into the business product.</div>
        </div>
        
        <div className="flex flex-col items-start space-y-2">
          <h2 className="text-blue-400 text-left">Edit</h2>
        </div>
      </div>
    </div>
  );
};

export default Document;




