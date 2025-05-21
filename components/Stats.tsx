import React from "react";

const Stats = () => {
    return (
        <div className="flex items-center justify-center mt-4">

            <div className=" bg-white py-2 px-4 w-full ">
            <div className="p-2 flex justify-between items-center font-bold rounded-lg px-8 border-2 border-pink-700">
                  <div className="flex flex-col gap-2 ">
                    <p className="text-pink-600 text-2xl">100+</p>
                    <p>Top-Rated Lessons</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-pink-600 text-2xl">10,000+</p>
                    <p>Parent Attendend</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-pink-600 text-2xl">2000+</p>
                    <p>Kids becomes fabreaders</p>
                  </div>
            </div>

        </div>
        </div>
    )
}



export default Stats
