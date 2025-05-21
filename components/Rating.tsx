import { Star } from 'lucide-react'
import React from 'react'

const Rating = () => {
    return (
        <div className="bg-[#03DA8D] mt-4 flex justify-around items-center h-20">
            <div className='flex flex-col gap-1'>
                <div className="flex  gap-4 items-center justify-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <p key={star} className=' bg-white p-2'>
                            <Star key={star} className="h-5 w-5 flex gap-4  fill-green-500 text-green-500" />
                        </p>
                    ))}
                </div>
                <p className='font-bold text-md'>Based on 800 reviews</p>
            </div>
            <div className="text-xl">
                <span className="font-bold">Excellent</span> 4.7 out of 5
            </div>
        </div>
    )
}

export default Rating
