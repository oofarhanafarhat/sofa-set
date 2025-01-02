
import Nav from '@/component/Nav'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Cart = () => {
  return (
    <div>
        <Nav bg={false}/>
          <div className=" w-screen lg:wrappe relative h-[316px] flex items-center justify-center bg-gray-50">
                <div className="absolute inset-0">
                  <Image
                    src="/shopbg.png"
                    alt="Shop Background"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-100"
                  />
                </div>
          <div className="relative z-10 text-center px-4 flex flex-col justify-center items-center">
                  <Image src="/shopa.png" width={77} height={77} alt="Shop Icon" />
                  <h1 className="text-[#000000] text-4xl font-semibold pb-5 h-[72px] w-[233px]">
                    Cart
                  </h1>
                  <div className="flex items-center space-x-2 mb-4">
                    <button className="text-[#000000] text-xl font-semibold">
                      Home
                    </button>
                    <Image src={"/shopb.png"} width={14} height={8} alt="arrow" />
                    <button className="text-lg text-[#000000] font-normal">
                      Cart
                    </button>
                  </div>
                </div>    
    </div>
    <div className='w-wrappe h-[525px]  lg:flex justify-center space-x-7'>
        
        <div className='w-[817px] h-[216px]  '>
            <div className='flex justify-around bg-[#FFF9E5] bg-opacity-160 h-[55px] w-[817px] mt-[72px] gap-10 pb-aut0'>
                <h1 className='text-[#000000] text-lg font-medium text-center pt-3 pl-44'>Product</h1>
                <h1 className='text-[#000000] text-lg font-medium text-center pt-3 '>Price</h1>
                <h1 className='text-[#000000] text-lg font-medium text-center pt-3   '>Quantity</h1>
                <h1 className='text-[#000000] text-lg font-medium text-center pt-3 pr-20'>Subtotal</h1>
            </div>
            <div className='flex justify-evenly items-baseline '>
                <Image src={"/t11.jpg"} width={106} height={106} alt='' className='w-[106px] h-[106px] object-cover '/>
                <h1>Asgaard sofa</h1>
                <h1>Rs. 250,000.00</h1>
                <button className='border border-[#9F9F9F] py-2 px-4 ml-10 rounded-md'>1</button>
                <h1 className='ml-5 '>Rs. 250,000.00</h1>
                <Image src={"/v09.png"} width={21} height={21.88} alt='' className='bg-[#FBEBB5] w-[21px] h-[21.88px]'/>
            </div>
            </div>
            <div className='bg-[#FFF9E5] bg-opacity-160 w-[383px] h-[390px] mt-[72px] '>
          <h1 className='text-center text-[#000000] text-2xl py-4 font-semibold font-poppins'>Cart Totals</h1>
          <div className='flex justify-around py-8'>
            <h1 className='text-[#000000] text-md font-semibold '>Subtotal</h1>
            <h1 className='text-[#9F9F9F] text-lg'>Rs. 250,000.00</h1>
          </div>
          <div className='flex justify-around'>
            <h1 className='text-[#000000] text-md font-semibold '>Total</h1>
            <h1 className='text-[#B88E2F] text-xl'>Rs. 250,000.00</h1>
          </div>
        <div className='flex justify-center pt-16'>
         <Link href={"/checkout"} > <button className=' rounded-2xl border border-[#9F9F9F] py-4 px-10 '>Check Out</button> </Link></div>

        </div>
        </div>
        
  
        <div className="wrappe h-[300px] bg-[#FAF4F4] lg:flex justify-center items-center">
        <div className="w-[376px] h-[108px]  text-[#000000] text-left lg:mx-4 mb-6 lg:mb-0">
          <h1 className="text-xl font-bold  pb-5">Free Delivery</h1>
          <h2 className="text-[#9F9F9F] font-normal">
            For all oders over $50, consectetur adipim scing elit.
          </h2>
        </div>
        <div className="w-[376px] h-[108px]  text-[#000000] text-left lg:mx-4 mb-6 lg:mb-0">
          <h1 className="text-xl font-bold pb-5">90 Days Return</h1>
          <h2 className="text-[#9F9F9F] font-normal">
            If goods have problems, consectetur adipim scing elit.
          </h2>
        </div>
        <div className="w-[376px] h-[108px]  text-[#000000] text-left lg:mx-4 mt-2 lg:mt-0">
          <h1 className="text-xl font-bold pb-5">Secure Payment</h1>
          <h2 className="text-[#9F9F9F] font-normal">
            100% secure payment, consectetur adipim scing elit.
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Cart
