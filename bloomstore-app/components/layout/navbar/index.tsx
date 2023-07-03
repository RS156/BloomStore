'use client';
import React, { Fragment } from 'react'
import { SiJordan, SiNike } from 'react-icons/si'
import { GiConverseShoe } from 'react-icons/gi'

import { AiOutlineUser } from 'react-icons/ai'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <div className=" h-40 sticky w-full">
            {/* header part 1 */}
            <div className="bg-lightgray h-10 w-full flex justify-between" >
                {/* Left SIde - Icons */}
                <div className="flex items-center justify-center gap-7 ml-10 ">
                    <SiJordan className='w-6 h-6 cursor-pointer hover:text-gray-500' />
                    <GiConverseShoe className='w-6 h-6 cursor-pointer hover:text-gray-500' />
                </div>
                {/* Right side Links */}
                <div className="flex gap-1 mr-10 items-center justify-center">

                    <div className="flex items-center justify-center">


                        <div className="cursor-pointer hover:text-gray-500 flex justify-between text-xs gap-3">
                            Find a Store
                            <span className='mr-2'>|</span> </div>
                        
                        <div className="flex justify-between text-xs gap-3">
                            <span className="cursor-pointer hover:text-gray-500">Hi, Rishabh</span>
                        </div>
                        <AiOutlineUser className='w-9 h-9 rounded-full hover:bg-gray-200 p-1 ml-1' />

                    </div>
                </div>
            </div>
            {/* header part 2 */}
            <div className="h-16 w-full flex justify-between items-center">
                {/* logo */}
                <div className="logo">
                    <SiNike className='w-14 h-14 ml-10 cursor-pointer hover:text-gray-500' />
                </div>
                {/* Menu */}
                <div className="flex mr"></div>
                {/* Search bar and icons */}
                <div className="">Search</div>
            </div>
            {/* header part 3 */}
            <div className="bg-lightgray h-14 w-full">test3</div>

        </div>
    )
}

function EditActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 13V16H7L16 7L13 4L4 13Z"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
        </svg>
    )
}

export default Navbar