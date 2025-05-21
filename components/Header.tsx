import { Menu } from "lucide-react"

const Header = () => {
    return (
        <header className="w-full bg-white bg-[url('/wave.png')] p-4 flex justify-between items-center">
            <div className="text-slate-600 font-bold text-sm">
                <span className="opacity-70">Online Masterclass</span> • <span className="opacity-70">For Parents</span>
            </div>
            <button className="text-white">
                <Menu size={24} className="text-slate-600" />
            </button>

        </header>
    )
}

export default Header