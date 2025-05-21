import Counter from "@/components/Counter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Rating from "@/components/Rating";
import Stats from "@/components/Stats";

export default function Home() {


  return (
    <div className="relative text-center text-gray-800 min-h-screen bg-[url('/bgimage.jpg')] bg-cover bg-center overflow-hidden">
      <div className="absolute inset-0 bg-white opacity-60 pointer-events-none z-0"></div>
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <Stats />
        <Rating />
        <Counter />
        <Footer />
      </div>
    </div>
  );
}
