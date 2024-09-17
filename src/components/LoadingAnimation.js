import React from 'react';

const LoadingAnimation = ({ tenantName }) => {
  return (
    <div className="flex items-center space-x-4">
      <p className=" dark:text-gray-400 ">{tenantName}</p>
      <div className="loader"></div>

      <style jsx>{`
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
