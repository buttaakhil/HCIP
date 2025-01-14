import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AppContext } from './context/AppContext';
import Loader from "./Loader.jsx";

const FormSection = ({
  setIsFormSubmitted,
  age,
  setAge,
  height,
  setHeight,
  weight,
  setWeight,
  children,
  setChildren,
  smoker,
  setSmoker,
  region,
  setRegion,
  sex,
  setSex,
  clearData
}) => {
  const { setCost } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleForm = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Show loader
  
    const data = {
      features: [age, weight / (height * height), children, region, sex, smoker ? 1 : 0],
    };
  
    console.log(data);
  
    // Start tracking the request start time
    const requestStartTime = Date.now();
  
    try {
      const response = await axios.post('https://hcip-backend.onrender.com/predict', data);
  
      // Calculate remaining time for loader to complete 3 seconds
      const elapsedTime = Date.now() - requestStartTime;
      const remainingTime = Math.max(0, 3000 - elapsedTime);
  
      // Ensure loader stays visible for at least 3 seconds before running the next steps
      setTimeout(() => {
        setCost(response.data.prediction);
        setIsFormSubmitted(true);
        clearData();
        setIsLoading(false); // Hide loader
      }, remainingTime);
    } catch (error) {
      console.error("There was an error making the request:", error);
      setIsLoading(false); // Hide loader on error
    }
  };
  

  const handleSexChange = (event) => setSex(Number(event.target.value));
  const handleAge = (event) => setAge(Number(event.target.value));
  const toggleSwitch = () => setSmoker(!smoker);
  const handleHeight = (event) => setHeight(event.target.value);
  const handleWeight = (event) => setWeight(event.target.value);

  const handleChildrenIncrement = () => {
    if (children < 10) {
      setChildren((val) => val + 1);
    }
  };

  const handleChildrenDecrement = () => {
    if (children > 0) {
      setChildren((val) => val - 1);
    }
  };

  const handleRegion = (event) => setRegion(Number(event.target.value));

  return (
    <div className='basis-1/2 border-2 rounded-[16px] py-[32px] px-[32px] sm:pl-[56px] sm:pr-[32px] lg:ml-[40px] mb-[40px]'>
      {isLoading && <Loader />}
      <form onSubmit={handleForm} className='flex flex-col gap-[32px]'>
        <div className='flex flex-col gap-[24px]'>
          <div className="flex flex-col gap-[14px]">
            <label htmlFor="age" className='text-lg sm:text-xl lg:text-2xl text-[#474D66]'>Age<sup className='text-[#F20004] text-lg sm:text-xl lg:text-2xl'>*</sup></label>
            <select id="age" value={age} onChange={handleAge} className='pl-[40px] w-24 sm:w-40 border-2 divide-solid border-[#029CCB] text-[#029CCB] text-lg sm:text-xl lg:text-2xl rounded-[4px]'>
              {Array.from({ length: 100 }, (_, i) => i + 1).map((age) => (
                <option key={age} value={age}>
                  {age}
                </option>
              ))}
            </select>
          </div>

          <div className='flex gap-[40px]'>
            <div className='flex flex-col gap-[14px]'>
              <label htmlFor="height" className='text-lg sm:text-xl lg:text-2xl text-[#474D66]'>Height(in m)<sup className='text-[#F20004] text-lg sm:text-xl lg:text-2xl'>*</sup></label>
              <input required type="text" id="height" value={height} onChange={handleHeight} className='outline-none w-28 sm:w-40 border-2 divide-solid border-[#029CCB] text-[#029CCB] text-lg sm:text-xl lg:text-2xl rounded-[4px]' />
            </div>
            <div className='flex flex-col gap-[14px]'>
              <label htmlFor="weight" className='text-lg sm:text-xl lg:text-2xl text-[#474D66]'>Weight(in kg)<sup className='text-[#F20004] text-lg sm:text-xl lg:text-2xl'>*</sup></label>
              <input required type="text" id="weight" value={weight} onChange={handleWeight} className='outline-none w-28 sm:w-40 border-2 divide-solid border-[#029CCB] text-[#029CCB] text-lg sm:text-xl lg:text-2xl rounded-[4px]' />
            </div>
          </div>

          <div className='flex gap-[20px]'>
            <div className='text-lg sm:text-xl lg:text-2xl text-[#474D66]'>Children<sup className='text-[#F20004] text-lg sm:text-xl lg:text-2xl'>*</sup></div>
            <div className='flex gap-[12px]'>
              <button type="button" className='text-lg sm:text-xl lg:text-2xl rounded-[4px] px-[8px] text-white bg-[#029CCC] flex justify-center items-center' onClick={handleChildrenDecrement}>
                -
              </button>
              <span className='text-lg sm:text-xl lg:text-2xl text-[#474D66]'>{children}</span>
              <button type="button" className='rounded-[4px] px-[8px] text-lg sm:text-xl lg:text-2xl text-white bg-[#029CCC] flex justify-center items-center' onClick={handleChildrenIncrement}>
                +
              </button>
            </div>
          </div>

          <div className="flex gap-[24px]">
            <label htmlFor="male" className="flex gap-[16px] items-center cursor-pointer">
              <input
                type="radio"
                name="sex"
                id="male"
                value={1}
                checked={sex === 1}
                onChange={handleSexChange}
                className="hidden peer"
              />
              <div className="w-6 h-6 rounded-full border-2 border-[#029CCC] flex justify-center items-center peer-checked:bg-[#029CCC]"></div>
              <span className="text-lg sm:text-xl lg:text-2xl text-[#474D66]">Male<sup className='text-[#F20004] text-lg sm:text-xl lg:text-2xl'>*</sup></span>
            </label>

            <label htmlFor="female" className="flex gap-[16px] items-center cursor-pointer">
              <input
                type="radio"
                name="sex"
                id="female"
                value={0}
                checked={sex === 0}
                onChange={handleSexChange}
                className="hidden peer"
              />
              <div className="w-6 h-6 rounded-full border-2 border-[#029CCC] flex justify-center items-center peer-checked:bg-[#029CCC]"></div>
              <span className="text-lg sm:text-xl lg:text-2xl text-[#474D66]">Female<sup className='text-[#F20004] text-lg sm:text-xl lg:text-2xl'>*</sup></span>
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <div
              className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${smoker ? 'bg-[#029CCC]' : 'bg-gray-300'
                }`}
              onClick={toggleSwitch}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${smoker ? 'translate-x-6' : 'translate-x-0'
                  }`}
              ></div>
            </div>
            <label className='text-lg sm:text-xl lg:text-2xl text-[#474D66]'>Smoker<sup className='text-[#F20004] text-lg sm:text-xl lg:text-2xl'>*</sup></label>
          </div>

          <div className='flex gap-[16px]'>
            <label htmlFor="region" className='text-lg sm:text-xl lg:text-2xl text-[#474D66]'>Region<sup className='text-[#F20004] text-lg sm:text-xl lg:text-2xl'>*</sup></label>
            <select className='pl-[40px] sm:w-60 border-2 divide-solid border-[#029CCB] text-[#029CCB] text-lg sm:text-xl lg:text-2xl rounded-[4px]' name="" id="region" value={region} onChange={handleRegion}>
              <option value="3">South West</option>
              <option value="2">South East</option>
              <option value="1">North West</option>
              <option value="0">North East</option>
            </select>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row gap-[16px]'>
          <button type="button" onClick={clearData} className='px-[32px] py-[8px] text-lg sm:text-xl lg:text-2xl border-2 border-[#029CCC] text-[#029CCB] rounded-[4px]'>Clear</button>
          <button type="submit" className='px-[32px] py-[8px] text-lg sm:text-xl lg:text-2xl bg-[#029CCB] text-white rounded-[4px]'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormSection;
