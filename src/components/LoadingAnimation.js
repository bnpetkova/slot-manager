import React from "react";

const LoadingAnimation = ({ tenantName, onTenantClick, key }) => {
  return (
    <div key={key} className="flex items-center space-x-4">
      <span
        className="text-gray-700 font-semibold cursor-pointer hover:underline"
        onClick={() => onTenantClick(tenantName)}
      >
        {tenantName}
      </span>
      <div className="loader"></div>

      <style>{`
        .loader {
          width: 100%;
          height: 20px;
          background:
            linear-gradient(#000 0 0) 0/0% no-repeat
            #ddd;
          animation: l1 2s infinite linear;
        }

        @keyframes l1 {
          100% {
            background-size: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingAnimation;
