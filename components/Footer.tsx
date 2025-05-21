const Footer = () => {
    return (
        <footer className=" mt-12 bg-white overflow-hidden text-sm">
            <div className="absolute left-0 bottom-0">
                <img src="/left-rain.png" alt="" className=" h-28 md:h-60" />
            </div>
            <div className="absolute right-0 bottom-0">
                 <img src="/right.png" alt="" className=" h-28 md:h-60" />
            </div>

            <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                <div className="md:col-span-1 text-center md:text-left">
                    <p className="font-medium text-gray-800">
                        The #1 Family-Centred Ed-Tech <br />
                        Provider in India
                    </p>
                </div>

                <div className="text-center md:text-left">
                    <h3 className="font-bold mb-2 text-black">ABOUT US</h3>
                    <ul className="space-y-1 text-gray-600">
                        <li>Who We Are</li>
                        <li>FAB Masterclass</li>
                        <li>Testimonials</li>
                        <li>Refund Policy</li>
                        <li>FAQS</li>
                    </ul>
                </div>

                <div className="text-center md:text-left">
                    <h3 className="font-bold mb-2 text-black">CONTACT US</h3>
                    <ul className="space-y-1 text-gray-600">
                        <li>
                            📧 info@inreal.com
                        </li>
                        <li>📞 +91-7045013337</li>
                        <li>📍 Test Assignment</li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-300 py-4 px-4 relative z-10">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between text-center text-gray-600 text-xs">
                    <div>Copyright © 2025 INREAL</div>
                    <div className="space-x-2 mt-2 sm:mt-0">
                        <span>All Rights Reserved</span>
                        <span>|</span>
                        <span>Terms & Conditions</span>
                        <span>|</span>
                        <span>Privacy Policy</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}



export default Footer
