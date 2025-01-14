import React from 'react';
import loadericon from "./assets/loadericon.svg"

const Loader = () => {


  return (
    <div className="bg-[#ffffffdb] fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-10">
      <div
        className="z-10 w-36 h-36 sm:w-40 sm:h-40 lg:w-48 lg:h-48 border-8 absolute border-[#029CCC] border-t-transparent rounded-full animate-spin"
        role="status"
      />
      <img src={loadericon} alt="" className='w-16 sm:w-20 lg:w-24 absolute z-10'/>
    </div>
  );
};

export default Loader;
