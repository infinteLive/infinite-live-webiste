import { useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import { useEffect } from "react"


export default function CardProjectFixed() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    const navigate = useNavigate()
return (
    <div className="background">
    <section className="w-full h-[600px] overflow-hidden bg-[url(https://ik.imagekit.io/zhbznxloz/wallpaperflare%201.png?updatedAt=1694697094143)] bg-cover bg-center bg-no-repeat relative">
<div className=" mt-40 p-8 md:p-12 lg:px-16 lg:py-24 h-full">
  <div className=" text-center justify-center items-center flex flex-col">
    <h1 className="text-white text-5xl font-bold mb-4">
      Fixed Project
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
    <h1 className='text-red-800 italic text-4xl font-bold'>OUR PROJECT</h1>
  </div>
  <div class="flex justify-center items-center mt-14">
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <button class="bg-zinc-200 hover:bg-orange-500  text-black hover:text-white  font-bold py-1 px-16 rounded">
      ALL
    </button>
    <button class="bg-zinc-200 hover:bg-orange-500  text-black hover:text-white  font-bold py-1 px-8 rounded">
      SPECIAL EVENT
    </button>
    <button class="bg-zinc-200 hover:bg-orange-500  text-black hover:text-white  font-bold py-1 px-8 rounded">
      EXHIBITION
    </button>
    <button class="bg-zinc-200 hover:bg-orange-500  text-black hover:text-white  font-bold py-1 px-8 rounded">
      CONCERT
    </button>
    <button class="bg-zinc-200 hover:bg-orange-500  text-black hover:text-white  font-bold py-1 px-8 rounded">
      SPORT EVENT
    </button>
    <button class="bg-zinc-200 hover:bg-orange-500  text-black hover:text-white  font-bold py-1 px-8 rounded">
      GRADUATION EVENT
    </button>
    <button class="bg-zinc-200 hover:bg-orange-500  text-black hover:text-white  font-bold py-1 px-8 rounded">
      PERSONAL EVENT
    </button>
     <button class="bg-zinc-200 hover:bg-orange-500  text-black hover:text-white  font-bold py-1 px-8 rounded">
      THEATER
    </button>
  </div>
</div>
<div className='mt-28'>
        <h1 className='text-white text-2xl font-bold ml-[200px] mb-4'>ALL PROJECT</h1>
    </div>
    <div className="flex justify-center items-center">
        <div className="grid grid-cols-3 gap-4">
        <div className='container  text-center'>
    <div onClick={() => navigate('/detailProject-fixed')} className="w-[280px] h-[300px] rounded-xl  shadow-lg mx-auto bg-zinc-300 ">
        <img className="w-[280px] h-[300px] object-cover object-center rounded-md" src="https://i.pinimg.com/474x/67/0b/d4/670bd443129c43212c4884d50b9d056b.jpg" alt="Kitten" />
    </div>
    <div className="mb-10">
        <h2 className="text-xl font-semibold mb-2 text-white mt-3">LED TV SMART</h2>
            <h4 className="text-xl font-light text-white" style={{maxWidth:'300px'}}>Lorem ipsum dolor sit amet consectetur....</h4>
    </div>
</div>
<div className='container  text-center'>
    <div onClick={() => navigate('/detailProject-rent')} className="w-[280px] h-[300px] rounded-xl  shadow-lg mx-auto bg-zinc-300 ">
        <img className="w-[280px] h-[300px] object-cover object-center rounded-md" src="https://i.pinimg.com/474x/67/0b/d4/670bd443129c43212c4884d50b9d056b.jpg" alt="Kitten" />
    </div>
    <div className="mb-10">
        <h2 className="text-xl font-semibold mb-2 text-white mt-3">LED TV SMART</h2>
            <h4 className="text-xl font-light text-white" style={{maxWidth:'300px'}}>Lorem ipsum dolor sit amet consectetur....</h4>
    </div>
</div>
<div onClick={() => navigate('/detailProject-rent')} className='container  text-center'>
    <div className="w-[280px] h-[300px] rounded-xl  shadow-lg mx-auto bg-zinc-300 ">
        <img className="w-[280px] h-[300px] object-cover object-center rounded-md" src="https://i.pinimg.com/474x/67/0b/d4/670bd443129c43212c4884d50b9d056b.jpg" alt="Kitten" />
    </div>
    <div onClick={() => navigate('/detailProject-rent')} className="mb-10">
        <h2 className="text-xl font-semibold mb-2 text-white mt-3">LED TV SMART</h2>
            <h4 className="text-xl font-light text-white" style={{maxWidth:'300px'}}>Lorem ipsum dolor sit amet consectetur....</h4>
    </div>
</div>
<div onClick={() => navigate('/detailProject-rent')} className='container  text-center'>
    <div className="w-[280px] h-[300px] rounded-xl  shadow-lg mx-auto bg-zinc-300 ">
        <img className="w-[280px] h-[300px] object-cover object-center rounded-md" src="https://i.pinimg.com/474x/67/0b/d4/670bd443129c43212c4884d50b9d056b.jpg" alt="Kitten" />
    </div>
    <div className="mb-10">
        <h2 className="text-xl font-semibold mb-2 text-white mt-3">LED TV SMART</h2>
            <h4 className="text-xl font-light text-white" style={{maxWidth:'300px'}}>Lorem ipsum dolor sit amet consectetur....</h4>
    </div>
</div>


        </div>
    </div>
    <Footer/>
</div>
)
}