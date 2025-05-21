"use client"
import React, { useEffect, useState } from 'react'

const Counter = () => {

    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date('2025-06-13T18:00:00');

        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / 1000 / 60) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="mt-8">
            <h2 className="text-pink-600 text-3xl font-bold uppercase">Registration For The Next <br />
            <span className='text-black'> Masterclass Closes Soon</span></h2>
            <div className="flex justify-center gap-4 mt-4 text-white font-bold">
                <div className="">
                    <p className="text-2xl bg-black px-6 py-4 rounded-lg">{timeLeft.days}</p>
                    <span className="text-sm text-gray-500">DAYS</span>
                </div>
                <div className="">
                    <p className="text-2xl bg-black px-6 py-4 rounded-lg">{timeLeft.hours}</p>
                    <span className="text-sm text-gray-500">HOURS</span>
                </div>
                <div className="">
                    <p className="text-2xl bg-black px-6 py-4 rounded-lg">{timeLeft.minutes}</p>
                    <span className="text-sm text-gray-500">MINUTES</span>
                </div>
                <div className=" ">
                    <p className="text-2xl bg-black px-6 py-4 rounded-lg">{timeLeft.seconds}</p>
                    <span className="text-sm text-gray-500">SECONDS</span>
                </div>
            </div>
            <button className="bg-[#FBFF00] text-2xl w-fit border-2 border-red-700  text-center font-bold py-1 px-8 mt-4 mx-auto  rounded">
                RESERVE YOUR <br /> SPOT - RS.499
            </button>
        </div>
    )
}

export default Counter
