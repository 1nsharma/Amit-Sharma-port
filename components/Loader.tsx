import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="relative w-16 h-16">
        <div className="absolute w-full h-full border-4 border-primary/20 rounded-full"></div>
        <div className="absolute w-full h-full border-t-4 border-primary dark:border-secondary rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loader;