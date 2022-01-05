import React, { useState } from 'react'
import Image from "next/image"
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from "@heroicons/react/solid"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router'

function Header({placeholder}) {
    const [searchInput, setSearchInput] = useState('');
     const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState(1);
    const router = useRouter();


    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    const resetInput = () => {
        setSearchInput("");
    };
    const search = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests,
            }
        })
    }

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
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
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
            {searchInput && (
                <div className="flex flex-col col-span-3 mx-auto rounded-full text-blue-800">
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minSate={new Date()}
                        rangeColors={["#7B68EE"]}
                        onChange={handleSelect}
                    />
                    <div className="flex items-center border-b ">
                        <h2 className="text-xl flex-grow text-blue-800 bg-white font-semibold">Number of guests</h2>
                        <UsersIcon className="h-5" />
                        <input type="number"
                            className="w-12 pl-2 text-lg outline-none text-blue-500"
                            value={noOfGuests}
                            onChange={e => setNoOfGuests(e.target.value)}
                            min={1}
                        />

                    </div>
                    <div className="flex">
                        <button onClick={resetInput} className="flex-grow rounded-lg bg-black  text-white ">
                            cancel
                        </button >
                        <button onClick={search} className="flex-grow rounded-lg  bg-black text-white">
                            search
                        </button>
                    </div>
                </div>
            )}


        </header>
    )
}

export default Header
