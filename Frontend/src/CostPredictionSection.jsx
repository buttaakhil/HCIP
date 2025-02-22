import React, { useContext } from 'react'
import Ambulance from "./assets/Ambulance.png"
import HospitalBed from "./assets/HospitalBed.png"
import RedCross from "./assets/RedCross.png"
import Stethoscope from "./assets/Stethoscope.png"
import { AppContext } from './context/AppContext'
import CountUp from './CountUp'
const CostPredictionSection = () => {
  const { cost } = useContext(AppContext)

  return (
    <div className='min-h-[440px] sm:min-h-[500px] min-w-[320px] sm:min-w-[360px] lg:min-h-max basis-1/2 border-2 rounded-[16px] flex flex-col justify-center gap-4 lg:mr-[40px] mb-[40px] relative overflow-hidden'>
      <img src={Stethoscope} className="absolute w-24 sm:w-32 top-[16px] left-[-16px]" alt="" />
      <img src={RedCross} className="absolute w-28 sm:w-36 top-[-16px] right-[-40px]" alt="" />
      <div>
        <p className='text-[#474D66] text-[28px] xl:text-[32px] text-center'>Medical Costs Billed by</p>
        <p className='text-[#029CCB] text-[28px] xl:text-[32px] text-center font-semibold'>Health Insurance</p>
      </div>
      <div className='xl:text-[60px] text-[40px] text-[#474D66] font-semibold text-center'>
        ₹ {cost !== 0 ? <span><CountUp
          from={0}
          to={Math.abs(parseInt(cost, 10))}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text"
        /></span> : <span>XXXX</span>}
        <span className='text-[#F20004] text-[16px] xl:text-[20px]'>/pm</span>
      </div>
      <img src={Ambulance} className="sm:block hidden absolute w-36 bottom-[-8px] left-[-8px]" alt="" />
      <img src={HospitalBed} className="absolute w-28 sm:w-36 bottom-[-16px] right-[-16px]" alt="" />
    </div>
  )
}

export default CostPredictionSection
