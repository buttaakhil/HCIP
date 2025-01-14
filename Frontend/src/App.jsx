import React, { useState } from "react";
import TitleComponent from "./TitleComponent";
import FormSection from "./FormSection";
import CostPredictionSection from "./CostPredictionSection";
import doctor from "./assets/doctor.svg";

function App() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [age, setAge] = useState(21);
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [children, setChildren] = useState(3);
  const [smoker, setSmoker] = useState(false);
  const [region, setRegion] = useState(3);
  const [sex, setSex] = useState(1);

  const clearData=()=>{
    setAge(21);
    setHeight('');
    setWeight('');
    setChildren(3);
    setSmoker(false);
    setRegion(3);
    setSex(1);
  }

  const handleButtonBack=()=>{
    clearData()
    setIsFormSubmitted(false)
  }
  return (
    <div className="bg-[#029CCB] px-[16px] sm:px-[60px] md:px-[96px] lg:pl-[96px] py-[40px] lg:pr-[60px] relative">
      <div className="flex flex-col gap-[16px] bg-white rounded-[16px]">
        <TitleComponent />
        <div className="flex gap-[40px] justify-center lg:hidden">
          {isFormSubmitted ? (
            <CostPredictionSection />
          ) : (
            <FormSection setIsFormSubmitted={setIsFormSubmitted}
              age={age} setAge={setAge}
              height={height} setHeight={setHeight}
              weight={weight} setWeight={setWeight}
              children={children} setChildren={setChildren}
              smoker={smoker} setSmoker={setSmoker}
              region={region} setRegion={setRegion}
              sex={sex} setSex={setSex}
              clearData={clearData}
            />
          )}
        </div>
        <div className="hidden lg:flex gap-[40px] justify-center">
          <FormSection setIsFormSubmitted={setIsFormSubmitted}
            age={age} setAge={setAge}
            height={height} setHeight={setHeight}
            weight={weight} setWeight={setWeight}
            children={children} setChildren={setChildren}
            smoker={smoker} setSmoker={setSmoker}
            region={region} setRegion={setRegion}
            sex={sex} setSex={setSex}
            clearData={clearData}
          />
          <CostPredictionSection />
        </div>
        {isFormSubmitted ? (
          <button onClick={handleButtonBack} className='block lg:hidden py-[6px] px-[22px] rounded-[2px] mb-[24px] text-[18px] text-white bg-[#029CCB] mx-auto'>Back</button>
        ) : null}
      </div>
      <img
        src={doctor}
        alt=""
        className="absolute w-48 left-[-56px] sm:w-72  sm:left-[-80px] md:w-96 bottom-0 md:left-[-120px] pointer-events-none"
      />
    </div>
  );
}

export default App;
