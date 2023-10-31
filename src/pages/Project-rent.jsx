import { useEffect, useState } from "react";
import Footer from "../components/Footer"
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

export default function ProjectRent() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [showImage, setShowImage] = useState(true);
  const [showCards, setShowCards] = useState(false);
  const navigate = useNavigate()
  const toggleImage = () => {
    // if(rou)
    setShowImage(!showImage);
    setShowCards(true);
  };
    return (
        <div className="background">
        <section className="w-full h-[600px] overflow-hidden bg-[url(https://ik.imagekit.io/zhbznxloz/wallpaperflare%201.png?updatedAt=1694697094143)] bg-cover bg-center bg-no-repeat relative">
    <div className=" mt-40 p-8 md:p-12 lg:px-16 lg:py-24 h-full">
      <div className=" text-center justify-center items-center flex flex-col">
        <h1 className="text-white text-5xl font-bold mb-4 ">
          Rental Project
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

        <div className="flex justify-center items-center mt-20">
        
        <img
        onClick={() => navigate('/projectrent')}
          src="https://picsum.photos/200/300" // Ganti dengan URL gambar Anda
          alt="Gambar"
       
          className="cursor-pointer h-[500px] w-[500px] rounded-3xl"
        />
      
      
    </div>
        <Footer/>
  </div>
    )
}