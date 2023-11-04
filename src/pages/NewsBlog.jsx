import "../app.css";
import Footer from "../components/Footer";
import Compro from "../assets/COMPRO INFINITE LIVE - SD.pdf";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { useEffect } from "react";
export default function NewsBlog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleDownload = () => {
    axios({
      url: Compro,
      method: "GET",
      responseType: "blob",
    })
      .then((response) => {
        const contentDisposition = response.headers["content-disposition"];
        const fileName = contentDisposition.split("filename=")[1].trim();

        saveAs(
          new Blob([response.data], { type: "application/pdf" }),
          fileName
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="background">
      <section className="w-full h-screen overflow-hidden bg-[url(https://ik.imagekit.io/zhbznxloz/concert-show-stage-entertainment%201.png?updatedAt=1694679652713)] bg-cover bg-center bg-no-repeat relative">
        <div className=" h-screen overflow-hidden">
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h1 className="text-white min-[320px]:text-2xl  min-[414px]:text-3xl  sm:text-5xl font-bold mb-4">
              Blogs & Tools
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
            <div className=" min-[320px]:text-xs sm:text-xl text-center italic sm:ml-[70px]">
              nest group indonesia
            </div>
            <div className="min-[320px]:text-xs sm:text-base mr-2 font-bold ">
              #integrasitanpabatas
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="flex min-[320px]:flex-col md:flex-row justify-center lg:justify-between lg:items-start mt-10 gap-5 ">
          <div className="min-[320px]:w-[90%]  min-[320px]:mx-auto sm:mx-0 sm:w-full md:w-[48%] xl:w-[50%] ">
            <h1 className="text-white  text-3xl font-bold mb-5"> BLOGS</h1>
            <div className="flex  justify-center flex-col items-start gap-5 ">
              {/* Kartu Besar */}
              <div className="w-full h-auto bg-zinc-600 bg-opacity-30 shadow-lg rounded-lg overflow-hidden p-5 ">
                <div className="flex xl:flex-row  min-[320px]:flex-col">
                  <div className="xl:w-[50%] lg:w-full ">
                    <img
                      src="https://ik.imagekit.io/h8zb3jmn4/Property%201=slider2.png?updatedAt=1694625796632"
                      alt=""
                      className="object-cover h-full w-full"
                    />
                  </div>
                  <div className="xl:w-[50%] lg:w-full xl:p-4 md:w-full md:p-5">
                    <h2 className="text-2xl font-semibold text-white">
                      judul event
                    </h2>
                    <p className="mt-2 text-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua....
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full h-auto bg-zinc-600 bg-opacity-30 shadow-lg rounded-lg overflow-hidden p-5 ">
                <div className="flex xl:flex-row  min-[320px]:flex-col">
                  <div className="xl:w-[50%] lg:w-full ">
                    <img
                      src="https://ik.imagekit.io/h8zb3jmn4/Property%201=slider2.png?updatedAt=1694625796632"
                      alt=""
                      className="object-cover h-full w-full"
                    />
                  </div>
                  <div className="xl:w-[50%] lg:w-full xl:p-4 md:w-full md:p-5">
                    <h2 className="text-2xl font-semibold text-white">
                      judul event
                    </h2>
                    <p className="mt-2 text-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua....
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full h-auto bg-zinc-600 bg-opacity-30 shadow-lg rounded-lg overflow-hidden p-5 ">
                <div className="flex xl:flex-row  min-[320px]:flex-col">
                  <div className="xl:w-[50%] lg:w-full ">
                    <img
                      src="https://ik.imagekit.io/h8zb3jmn4/Property%201=slider2.png?updatedAt=1694625796632"
                      alt=""
                      className="object-cover h-full w-full"
                    />
                  </div>
                  <div className="xl:w-[50%] lg:w-full xl:p-4 md:w-full md:p-5">
                    <h2 className="text-2xl font-semibold text-white">
                      judul event
                    </h2>
                    <p className="mt-2 text-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua....
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tiga Kartu Kecil */}
          <div className="sm:w-full md:w-[48%] xl:w-[50%] min-[320px]:w-[90%] min-[320px]:mx-auto sm:mx-0">
            <h1 className="text-white mr-[450px] text-3xl font-bold">TOOLS</h1>
            <div className="flex flex-col gap-5 mt-5">
              <div className="w-full h-auto bg-zinc-600 bg-opacity-30 shadow-lg rounded-lg overflow-hidden">
                <div className="p-5">
                  <div className="flex justify-between items-center mt-2 ">
                    <h2 className="min-[320px]:text-lg sm:text-xl font-semibold text-white">
                      Venue Layouts
                    </h2>
                    <div className="min-[320px]:w-[50%] md:w-[33%]">
                      <div className="relative flex items-center w-full h-9 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                        <div className="grid place-items-center h-full w-9 text-gray-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                        </div>

                        <input
                          className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 "
                          type="text"
                          id="search"
                          placeholder="Search something.."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <h1 className="text-white mt-2">1. Lorem Ipsum</h1>
                    <h1 className="text-white mt-2">2. Lorem Ipsum</h1>
                    <h1 className="text-white mt-2">3. Lorem Ipsum</h1>
                  </div>
                </div>
              </div>

              <div className="w-full h-auto bg-zinc-600 bg-opacity-30 shadow-lg rounded-lg overflow-hidden">
                <div className="p-5">
                  <div className="flex justify-between items-center  mt-2 ">
                    <h2 className="min-[320px]:text-lg sm:text-xl font-semibold text-white">
                      {" "}
                      Artist Riders
                    </h2>
                    <div className="min-[320px]:w-[50%] md:w-[33%]">
                      <div className="relative flex items-center w-full h-9 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                        <div className="grid place-items-center h-full w-9 text-gray-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                        </div>

                        <input
                          className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                          type="text"
                          id="search"
                          placeholder="Search something.."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <h1 className="text-white mt-2">1. Lorem Ipsum</h1>
                    <h1 className="text-white mt-2">2. Lorem Ipsum</h1>
                    <h1 className="text-white mt-2">3. Lorem Ipsum</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
