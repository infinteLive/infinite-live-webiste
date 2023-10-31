
import { useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import { useEffect } from "react"

export default function Contactus() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    const Navigation = useNavigate()
    return (
        <div className="background">
        <section className="w-full h-[600px] overflow-hidden bg-[url(https://ik.imagekit.io/zhbznxloz/wallpaperflare%201.png?updatedAt=1694697094143)] bg-cover bg-center bg-no-repeat relative">
    <div className=" mt-40 p-8 md:p-12 lg:px-16 lg:py-24 h-full">
      <div className="justify-center items-center text-center flex flex-col">
        <h1 className="text-white text-5xl font-bold mb-4">
          Contact Us
        </h1>
        <hr className="border-2 border-yellow-500 w-40 mb-8" />
      </div>

      <div className="flex justify-between text-white absolute bottom-4 left-0 right-0"style={{ fontFamily: 'Poppins, sans-serif' }}>
            <div className="ml-2 font-bold">#harusbisa</div>
            <div className=" text-center italic">nest group indonesia</div>
            <div className="mr-2 font-bold ">#integrasitanpabatas</div>
          </div>
    </div>
  </section>
  <div className="mt-20">
        <h1 className="text-orange-500 text-3xl font-bold ml-16">WELCOME TO INFINITE LIVE</h1>
        <p className="text-white font-light text-xl ml-16 mt-4" style={{maxWidth:'900px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>
  </div>
  <div className='text-center mt-20'>
    <h1 className='text-orange-500 italic text-4xl font-bold'>OUR PROJECT</h1>
  </div>
  <div className='flex flex-row justify-center items-center gap-24 mt-20'>
<div className="flex justify-center items-center ">
  <div onClick={() => Navigation('/contact-rent')} className="bg-neutral-500 rounded-lg h-[300px] w-[250px] text-black  border-2 border-black p-8  text-center hover:text-white hover:border-white cursor-pointer transition-colors duration-300">
    <h2 className=" text-center text-2xl font-bold mt-16">RENT</h2>
    <h2 className=" text-center text-2xl font-semibold mt-5 ">EQUIMENT</h2>
  </div>
</div>
<div className="flex justify-center items-center ">
  <div onClick={() => Navigation('/contact-fixed')} className="bg-neutral-500 text-black hover:text-white rounded-lg h-[300px] w-[250px]  border-2 border-black p-8  text-center hover:border-white cursor-pointer transition-colors duration-300">
    <h2 className=" text-center text-2xl font-bold mt-14">FIXED INSTALLATION</h2>
    <h2 className=" text-center text-2xl font-semibold mt-5 ">EQUIMENT</h2>
  </div>
</div>
</div>
<Footer/>
    </div>
    )
}