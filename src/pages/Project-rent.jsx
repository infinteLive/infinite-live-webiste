import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ProjectRent() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [showImage, setShowImage] = useState(true);
  const [showCards, setShowCards] = useState(false);
  const navigate = useNavigate();
  const toggleImage = () => {
    // if(rou)
    setShowImage(!showImage);
    setShowCards(true);
  };
  return (
    <div className="background">
      <section className="w-full h-screen overflow-hidden bg-[url(https://ik.imagekit.io/zhbznxloz/wallpaperflare%201.png?updatedAt=1694697094143)] bg-cover bg-center bg-no-repeat relative">
        <div className=" mt-40 p-8 md:p-12 lg:px-16 lg:py-24 h-full">
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h1 className="text-white min-[320px]:text-2xl  min-[414px]:text-3xl  sm:text-5xl font-bold mb-4 ">
              Rental Project
            </h1>
            <hr className="border-2 border-red-800 w-50 mb-8" />
          </div>

          <div
            className="flex justify-between text-white absolute bottom-4 left-0 right-0"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <div className="min-[320px]:text-xs sm:text-base ml-2 font-bold">
              #harusbisa
            </div>
            <div className="min-[320px]:text-xs sm:text-xl text-center italic sm:ml-[70px]">
              nest group indonesia
            </div>
            <div className="min-[320px]:text-xs sm:text-base mr-2 font-bold ">
              #integrasitanpabatas
            </div>
          </div>
        </div>
      </section>

      <div className="container min-[320px]:p-5 sm:p-0">
        <div className="flex justify-center items-center mt-20 ">
          <img
            onClick={() => navigate("/projectrent")}
            src="https://picsum.photos/200/300" // Ganti dengan URL gambar Anda
            alt="Gambar"
            className="cursor-pointer min-[320px]:w-[85%] min-[320px]:h-[280px] sm:h-[500px] sm:w-[500px] rounded-3xl"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
