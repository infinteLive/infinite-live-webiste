import { useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import { useEffect } from "react"


export default function OurProject() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    const navigate = useNavigate()
    return (
        <div className="background">
            <section className="w-full h-[600px] overflow-hidden bg-[url(https://ik.imagekit.io/zhbznxloz/wallpaperflare%201.png?updatedAt=1694697094143)] bg-cover bg-center bg-no-repeat relative">
        <div className=" mt-40 p-8 md:p-12 lg:px-16 lg:py-24 h-full">
          <div className="justify-center items-center text-center flex flex-col">
            <h1 className="text-white text-5xl font-bold mb-4">
              Our Projects
            </h1>
            <hr className="border-2 border-red-800 w-40 mb-8" />
          </div>

          <div className="flex justify-between text-white absolute bottom-4 left-0 right-0"style={{ fontFamily: 'Poppins, sans-serif' }}>
            <div className="ml-2 font-bold">#harusbisa</div>
            <div className=" text-center italic">nest group indonesia</div>
            <div className="mr-2 font-bold ">#integrasitanpabatas</div>
          </div>
        </div>
      </section>
      <div className='text-center mt-20'>
        <h1 className='text-red-800 italic text-4xl font-bold'>Our Projects</h1>
      </div>
      <div className='flex flex-row justify-center items-center gap-24 mt-20 mb-36'>
    <div className="flex justify-center items-center ">
      <div onClick={() => navigate('/project-rent')} className="bg-neutral-500 rounded-lg h-[300px] w-[250px] text-black  border-2 border-black p-8  text-center hover:text-white hover:border-white cursor-pointer transition-colors duration-300">
        <h2 className=" text-center text-2xl font-bold mt-16">RENTAL</h2>
        <h2 className=" text-center text-2xl font-semibold mt-5 ">Event Equipments</h2>
      </div>
    </div>
    <div  onClick={() => navigate('/project-fixed')} className="flex justify-center items-center ">
      <div className="bg-neutral-500 text-black hover:text-white rounded-lg h-[300px] w-[250px]  border-2 border-black p-8  text-center hover:border-white cursor-pointer transition-colors duration-300">
        <h2 className=" text-center text-2xl font-bold mt-7">SYSTEMS INTEGRATOR</h2>
        <h2 className=" text-center text-2xl font-semibold mt-5 ">Fixed Installations</h2>
      </div>
    </div>
    </div>
    <Footer/>
        </div>
    )
}