import React from 'react'

import { SiJordan } from 'react-icons/si'
import { GiConverseShoe } from 'react-icons/gi'

import { AiOutlineUser } from 'react-icons/ai'
type Props = {}

const Navbar = (props: Props) => {
    return (
        <div className=" h-24 sticky w-full">
            <div className="bg-lightgray h-10 w-full flex justify-between" >
                <div className="flex items-center justify-center gap-7 ml-10 ">
                    <SiJordan className='w-6 h-6 cursor-pointer hover:text-gray-500' />
                    <GiConverseShoe className='w-6 h-6 cursor-pointer hover:text-gray-500' />
                </div>
                <div className="flex gap-1 mr-10 items-center justify-center">

                    <div className="flex items-center justify-center">
                        <div className="flex justify-between text-xs gap-3">
                            <span className="cursor-pointer hover:text-gray-500">Find a Store</span> 
                            <span className='mr-2'>|</span></div>
                            <div className="flex justify-between text-xs gap-3">
                            <span className="cursor-pointer hover:text-gray-500">Help</span> 
                            <span className='mr-2'>|</span></div>
                            <div className="flex justify-between text-xs gap-3">
                            <span className="cursor-pointer hover:text-gray-500">Hi, Rishabh</span> 
                            </div>
                        <AiOutlineUser className='w-9 h-9 rounded-full hover:bg-gray-200 p-1 ml-1' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar