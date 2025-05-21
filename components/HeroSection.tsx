import Image from "next/image"

const HeroSection = () => {
    return (
        <div className="bg-pink-600/80 w-full ">

            <p className="text-[#FBFF00] text-xl py-4 font-bold text-center"> 13th and 14th May 2025 6:00 pm - 7:30 pm</p>
            <div className="flex  items-center justify-center ">
                <div className="text-black px-4 py-4 relative max-w-lg bg-white rounded-lg text-center font-bold text-2xl">
                    <p className="border-2 border-pink-600 px-4 py-2 rounded-lg">
                        YOUR CHILD CAN START READING AT HOME - EVEN BEFORE AGE 3
                    </p>

                    <div className="bg-[#FBFF00] absolute left-6 md:left-20  -bottom-4 border-2 border-red-700  text-center font-bold py-1 px-4 mt-4 mx-auto w-fit rounded">
                        ENROLL NOW SEPT 12-18
                    </div>
                </div>

            </div>

            <div className="text-white text-center italic text-lg mt-6">(proof below)</div>

            <div className="flex flex-col md:flex-row">
                <p className=" px-10 leading-8 text-xl text-white max-w-sm">
                    Join the World&apos;s
                    Highest-Rated Online  Masterclass
                    (for Parents) Learn   simple, science backed techniques to   teach your child to read — in just 15 minutes a day.
                </p>
                <div className="relative w-full h-96">
                    <Image
                        src="/imagemain.png"
                        alt="Parent-child"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
