import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function OurProject() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  return (
    <div className="background">
      <section className="w-full h-screen overflow-hidden bg-[url(https://ik.imagekit.io/zhbznxloz/wallpaperflare%201.png?updatedAt=1694697094143)] bg-cover bg-center bg-no-repeat relative">
        <div className=" mt-40 p-8 md:p-12 lg:px-16 lg:py-24 h-full">
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h1 className="text-white min-[320px]:text-2xl  min-[414px]:text-3xl  sm:text-5xl font-bold mb-4">
              Our Projects
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
        <div className="text-center mt-20">
          <h1 className="text-red-800 italic text-4xl font-bold">
            Our Projects
          </h1>
        </div>

        <div className="flex flex-row justify-center items-center sm:gap-16 md:gap-24 min-[320px]:mt-12 sm:mt-20 mb-36  sm:flex-row min-[320px]:gap-5">
          <div className="flex justify-center items-center ">
            <div
              onClick={() => navigate("/project-rent")}
              className="bg-neutral-500 text-black hover:text-white rounded-lg sm:h-[300px] sm:w-[250px]  min-[320px]:h-[260px] min-[320px]:w-[180px]  border-2 border-black min-[320px]:p-2 flex justify-center items-center flex-col sm:p-8  text-center hover:border-white cursor-pointer transition-colors duration-300"
            >
              <h2 className=" text-center text-2xl font-bold">RENTAL</h2>
              <h2 className=" text-center text-2xl font-semibold mt-5 ">
                Event Equipments
              </h2>
            </div>
          </div>
          <div
            onClick={() => navigate("/project-fixed")}
            className="flex justify-center items-center "
          >
            <div className="bg-neutral-500 text-black hover:text-white rounded-lg sm:h-[300px] sm:w-[250px]  min-[320px]:h-[260px] min-[320px]:w-[180px]  border-2 border-black min-[320px]:p-2  flex justify-center items-center flex-col sm:p-8  text-center hover:border-white cursor-pointer transition-colors duration-300">
              <h2 className=" text-center break-words text-2xl font-bold ">
                SYSTEMS INTEGRATOR
              </h2>
              <h2 className=" text-center text-2xl font-semibold mt-5 ">
                Fixed Installations
              </h2>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
