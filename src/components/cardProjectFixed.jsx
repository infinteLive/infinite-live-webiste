import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function CardProjectFixed() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  return (
    <div className="background">
      <div className="container xl:w-[85%]">
        <div className="text-center pt-20">
          <h1 className="text-red-800 italic text-4xl font-bold">
            Our Projects
          </h1>
        </div>
        <div className="flex justify-center items-center mt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 min-[320px]:p-5 sm:p-0">
            <button className="bg-zinc-200 hover:bg-orange-500  text-black hover:text-white min-[320px]:text-sm sm:text-base   font-bold py-1 px-16 rounded">
              ALL
            </button>
            <button className="bg-zinc-200 hover:bg-orange-500  text-black hover:text-white  min-[320px]:px-3 font-bold py-1 sm:px-8 min-[320px]:text-sm sm:text-base  rounded">
              SPECIAL EVENT
            </button>
            <button className="bg-zinc-200 hover:bg-orange-500  text-black hover:text-white  font-bold py-1  min-[320px]:px-3 sm:px-8 min-[320px]:text-sm sm:text-base rounded">
              EXHIBITION
            </button>
            <button className="bg-zinc-200 hover:bg-orange-500  text-black hover:text-white  font-bold py-1 min-[320px]:px-3 sm:px-8 min-[320px]:text-sm sm:text-base rounded">
              CONCERT
            </button>
            <button className="bg-zinc-200 hover:bg-orange-500  text-black hover:text-white  font-bold py-1 min-[320px]:px-3 sm:px-8 min-[320px]:text-sm sm:text-base rounded">
              SPORT EVENT
            </button>
            <button className="bg-zinc-200 hover:bg-orange-500  text-black hover:text-white  font-bold py-1 min-[320px]:px-3 sm:px-8 min-[320px]:text-sm sm:text-base rounded">
              GRADUATION EVENT
            </button>
            <button className="bg-zinc-200 hover:bg-orange-500  text-black hover:text-white  font-bold py-1 min-[320px]:px-3 sm:px-8 min-[320px]:text-sm sm:text-base rounded">
              PERSONAL EVENT
            </button>
            <button className="bg-zinc-200 hover:bg-orange-500  text-black hover:text-white  font-bold py-1 min-[320px]:px-3 sm:px-8 min-[320px]:text-sm sm:text-base rounded">
              THEATER
            </button>
          </div>
        </div>
        <div className="min-[320px]:mt-2 sm:mt-8 "></div>
        <div className="flex items-center flex-col  ">
          <h1 className="text-white text-2xl font-bold mb-4 text-start w-full min-[320px]:ps-5 md:ps-0">
            ALL PROJECT
          </h1>

          <div className="grid xl:grid-cols-4 md:grid-cols-3 min-[320px]:grid-cols-2 gap-5 justify-between w-full">
            <div
              onClick={() => navigate("/detailProject-fixed")}
              className="lg:w-[280px] xl:w-[260px] lg:h-[450px] md:w-[240px] md:h-[380px] sm:w-[220px] sm:h-[340px] min-[320px]:mb-5 min-[400px]:w-[180px] min-[320px]:w-[160px] lg:mb-0  rounded-xl p-1 shadow-lg mx-auto  "
            >
              <div className="mx-auto max-w-xs lg:h-[300px] md:h-[255px] sm:h-[220px] min-[400px]:h-[200px] min-[320px]:h-[180px] overflow-hidden">
                <img
                  className="mx-auto object-cover object-center min-[320px]:mt-[-30px] md:mt-[-60px] lg:mt-[-50px]"
                  src="https://i.pinimg.com/474x/67/0b/d4/670bd443129c43212c4884d50b9d056b.jpg"
                  alt="Kitten"
                />
              </div>
              <div className="mt-2">
                <h2 className="min-[320px]:text-lg sm:text-xl font-semibold md:mb-0 lg:mb-2 text-white md:mt-3 lg:mt-7">
                  LED TV SMART
                </h2>
                <h4
                  className="min-[320px]:text-base sm:text-xl font-light text-white"
                  style={{ maxWidth: "300px" }}
                >
                  Lorem ipsum dolor sit amet consectetur....
                </h4>
              </div>
            </div>

            <div
              onClick={() => navigate("/detailProject-fixed")}
              className="lg:w-[280px] xl:w-[260px] lg:h-[450px] md:w-[240px] md:h-[380px] sm:w-[220px] sm:h-[340px] min-[320px]:mb-5 min-[400px]:w-[180px] min-[320px]:w-[160px] lg:mb-0  rounded-xl p-1 shadow-lg mx-auto  "
            >
              <div className="mx-auto max-w-xs lg:h-[300px] md:h-[255px] sm:h-[220px] min-[400px]:h-[200px] min-[320px]:h-[180px] overflow-hidden">
                <img
                  className="mx-auto object-cover object-center min-[320px]:mt-[-30px] md:mt-[-60px] lg:mt-[-50px]"
                  src="https://i.pinimg.com/474x/67/0b/d4/670bd443129c43212c4884d50b9d056b.jpg"
                  alt="Kitten"
                />
              </div>
              <div className="mt-2">
                <h2 className="min-[320px]:text-lg sm:text-xl font-semibold md:mb-0 lg:mb-2 text-white md:mt-3 lg:mt-7">
                  LED TV SMART
                </h2>
                <h4
                  className="min-[320px]:text-base sm:text-xl font-light text-white"
                  style={{ maxWidth: "300px" }}
                >
                  Lorem ipsum dolor sit amet consectetur....
                </h4>
              </div>
            </div>

            <div
              onClick={() => navigate("/detailProject-fixed")}
              className="lg:w-[280px] xl:w-[260px] lg:h-[450px] md:w-[240px] md:h-[380px] sm:w-[220px] sm:h-[340px] min-[320px]:mb-5 min-[400px]:w-[180px] min-[320px]:w-[160px] lg:mb-0  rounded-xl p-1 shadow-lg mx-auto  "
            >
              <div className="mx-auto max-w-xs lg:h-[300px] md:h-[255px] sm:h-[220px] min-[400px]:h-[200px] min-[320px]:h-[180px] overflow-hidden">
                <img
                  className="mx-auto object-cover object-center min-[320px]:mt-[-30px] md:mt-[-60px] lg:mt-[-50px]"
                  src="https://i.pinimg.com/474x/67/0b/d4/670bd443129c43212c4884d50b9d056b.jpg"
                  alt="Kitten"
                />
              </div>
              <div className="mt-2">
                <h2 className="min-[320px]:text-lg sm:text-xl font-semibold md:mb-0 lg:mb-2 text-white md:mt-3 lg:mt-7">
                  LED TV SMART
                </h2>
                <h4
                  className="min-[320px]:text-base sm:text-xl font-light text-white"
                  style={{ maxWidth: "300px" }}
                >
                  Lorem ipsum dolor sit amet consectetur....
                </h4>
              </div>
            </div>

            <div
              onClick={() => navigate("/detailProject-fixed")}
              className="lg:w-[280px] xl:w-[260px] lg:h-[450px] md:w-[240px] md:h-[380px] sm:w-[220px] sm:h-[340px] min-[320px]:mb-5 min-[400px]:w-[180px] min-[320px]:w-[160px] lg:mb-0  rounded-xl p-1 shadow-lg mx-auto  "
            >
              <div className="mx-auto max-w-xs lg:h-[300px] md:h-[255px] sm:h-[220px] min-[400px]:h-[200px] min-[320px]:h-[180px] overflow-hidden">
                <img
                  className="mx-auto object-cover object-center min-[320px]:mt-[-30px] md:mt-[-60px] lg:mt-[-50px]"
                  src="https://i.pinimg.com/474x/67/0b/d4/670bd443129c43212c4884d50b9d056b.jpg"
                  alt="Kitten"
                />
              </div>
              <div className="mt-2">
                <h2 className="min-[320px]:text-lg sm:text-xl font-semibold md:mb-0 lg:mb-2 text-white md:mt-3 lg:mt-7">
                  LED TV SMART
                </h2>
                <h4
                  className="min-[320px]:text-base sm:text-xl font-light text-white"
                  style={{ maxWidth: "300px" }}
                >
                  Lorem ipsum dolor sit amet consectetur....
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
