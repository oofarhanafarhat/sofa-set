import React from 'react'

const Com:any = ( {com =true}:{com:boolean}) => {
  return (
    <div>
        <div className="wrappe h-[300px] bg-[#FAF4F4] lg:flex justify-center items-center mt-96 lg:mt-0">
        <div className="w-[376px] h-[108px]  text-[#000000]">
          <h1 className="text-xl font-bold">Free Delivery</h1>
          <h2 className="text-[#9F9F9F] font-normal">
            For all oders over $50, consectetur adipim scing elit.
          </h2>
        </div>
        <div className="w-[376px] h-[108px]  text-[#000000]">
          <h1 className="text-xl font-bold">90 Days Return</h1>
          <h2 className="text-[#9F9F9F] font-normal">
            If goods have problems, consectetur adipim scing elit.
          </h2>
        </div>
        <div className="w-[376px] h-[108px]  text-[#000000]">
          <h1 className="text-xl font-bold">Secure Payment</h1>
          <h2 className="text-[#9F9F9F] font-normal">
            100% secure payment, consectetur adipim scing elit.
          </h2>
        </div>
              
        </div>    
  
    </div>

  )
}

export default Com
