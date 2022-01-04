import React from 'react'
import Image from "next/image"
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from "@heroicons/react/solid"

function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-gray-200 shadow-md p-5
        md:px-10">
        <div className="relative flex items-center h-10 cursor-pointer my-auto">
            <Image
                    src="/pixels6.png"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />

        </div>

        {/*middle*/}
        <div className="flex items-center bg-gray-900 md:border-2 rounded-md py-2 
            md:shadow-sm">
        <input
                    
                    className="flex-grow pl-5 bg-transparent outline-none text-sm  text-white placeholder-white"
                    type="text" placeholder="where do you wanna go?" />

         <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white
                rounded-full p-2 cursor-pointer md:mx-2" />
        </div>

        {/*right*/}
            <div className="flex items-center space-x-4 justify-end ">
                <p className="hidden md:inline text-red-900 font-semibold cursor-pointer">Become a Host</p>
                <GlobeAltIcon className="h-6" />
                <div className="flex items-center space-x-2 border-2 p-2 text-white bg-gray-900 rounded-full
                cursor-pointer">
                    <MenuIcon className="h-6" />
                    <UserCircleIcon className="h-6" />
                </div>
            </div>


        </header>
    )
}

export default Header
