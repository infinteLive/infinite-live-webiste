/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import "../app.css";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import FloatingButton from "../components/FloatingButton.";
import videoOpening from "../assets/VIDEO PROFILE_INFINITE_FIX.mp4";
export default function LandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [currentImage, setCurrentImage] = useState(0);
  const Navigate = useNavigate();

  const images = [
    {
      url: "https://ik.imagekit.io/zhbznxloz/WhatsApp%20Image%202023-10-03%20at%2000.31.12_6cdb25f5%20(1).jpg?updatedAt=1696408097014",
      text: "Sound System Lighting, FX Multimedia & Production ",
    },
    {
      url: "https://ik.imagekit.io/zhbznxloz/WhatsApp%20Image%202023-10-03%20at%2000.42.39_47e30e46.jpg?updatedAt=1696328387881",
      text: "Rental",
    },
    {
      url: "https://ik.imagekit.io/zhbznxloz/WhatsApp%20Image%202023-10-03%20at%2010.16.09_59409e58.jpg?updatedAt=1696328454872",
      text: "Systems Integrator",
    },
  ];

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000); // Pindah setiap 5 detik
    return () => clearInterval(interval); // Bersihkan interval saat komponen dibongkar
  }, [currentImage]); // Jadikan currentImage sebagai dependensi
  useEffect(() => {
    const video = document.getElementById("myVideo");
    video.play();
    video.volume = 0.5; // Atur volume ke 50% (nilai dari 0 hingga 1)
  }, []);

  return (
    <div className="bg-black w-full ">
      <div>
        <div
          className=" w-full h-screen overflow-hidden "
          data-carousel="slide"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`${
                index === currentImage ? "block w-full h-full" : "hidden"
              } duration-700 ease-in-out`}
              data-carousel-item
            >
              <img
                src={image.url}
                className="block w-full h-full opacity-50 "
                alt={`Image ${index + 1}`}
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="text-center text-white md:text-5xl min-[320px]:text-3xl  font-extrabold">
                  {image.text}
                </p>
              </div>
            </div>
          ))}

          <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-3 h-3 rounded-full ${
                  index === currentImage ? "bg-white" : "bg-gray-500"
                }`}
                aria-current={index === currentImage ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
                data-carousel-slide-to={index}
              ></button>
            ))}
          </div>

          <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
            onClick={prevImage}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>

          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
            onClick={nextImage}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
      <div className="background">
        <div className="flex justify-center items-center pt-20">
          <video
            id="myVideo"
            className="lg:max-w-full md:max-w-3xl  sm:max-w-xl sm:h-[500px] rounded-xl min-[320px]:max-w-xs"
            autoPlay
            loop
          >
            <source src={videoOpening} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div id="product-section" className="text-center mt-20">
          <h1 className="text-red-800 text-4xl font-bold">Our Products</h1>
        </div>
        <div className="flex sm:flex-row justify-center min-[320px]:flex-col items-center sm:gap-5 md:gap-24 mt-20">
          <div className="flex justify-center items-center ">
            <div
              onClick={() => Navigate("/product-rent")}
              className="bg-neutral-500 rounded-lg  h-[300px] w-[250px] text-black  border-2 border-black p-8  text-center hover:text-white hover:border-white cursor-pointer transition-colors duration-300 min-[320px]:mb-5 sm:mb-0"
            >
              <h2 className=" text-center text-2xl font-bold mt-16">RENTAL</h2>
              <h2 className=" text-center text-2xl font-semibold mt-5 ">
                Event Equipments
              </h2>
            </div>
          </div>
          <div
            onClick={() => Navigate("/product-fixed")}
            className="flex justify-center items-center "
          >
            <div className="bg-neutral-500 text-black hover:text-white rounded-lg h-[300px] w-[250px]  border-2 border-black p-8  text-center hover:border-white cursor-pointer transition-colors duration-300">
              <h2 className=" text-center text-2xl font-bold mt-7">
                SYSTEMS INTEGRATOR
              </h2>
              <h2 className=" text-center text-2xl font-semibold mt-5 ">
                Fixed Installations
              </h2>
            </div>
          </div>
        </div>
        <div className="flex min-[320px]:flex-col md:flex-row min-[320px]:gap-5 flex-row items-center justify-center md:gap-5 lg:gap-16 ml-4  lg:bg-transparent">
          <div className="sm:max-w-sm min-[320px]:max-w-xs   mt-40  rounded overflow-hidden shadow-lg text-center">
            <img
              className="md:w-[200px] md:h-[240px] lg:w-[250px] lg:h-[250px] sm:w-full min-[320px]:w-full rounded "
              src="https://akcdn.detik.net.id/community/media/visual/2023/09/01/lrt-jabodebek-8_169.jpeg?w=700&q=90"
              alt=""
            />
            <div className="md:px-0   py-2 border-white">
              <p className="text-white text-left text-sm mt-4 md:w-[200px]  lg:w-[250px] line-clamp-2 overflow-hidden">
                Tarif LRT Jabodebek Rp 3.000 hingga Rp 20.000 Mulai Hari Ini
              </p>
            </div>
          </div>

          <div className="sm:max-w-sm min-[320px]:max-w-xs   md:mt-40 sm:mt-5 rounded overflow-hidden shadow-lg text-center">
            <img
              className="md:w-[200px] md:h-[240px] lg:w-[250px] lg:h-[250px] sm:w-full min-[320px]:w-full rounded "
              src="https://akcdn.detik.net.id/community/media/visual/2023/09/01/lrt-jabodebek-8_169.jpeg?w=700&q=90"
              alt=""
            />
            <div className="md:px-0   py-2 border-white">
              <p className="text-white text-left text-sm mt-4 md:w-[200px]  lg:w-[250px] line-clamp-2 overflow-hidden">
                Tarif LRT Jabodebek Rp 3.000 hingga Rp 20.000 Mulai Hari Ini
              </p>
            </div>
          </div>
          <div className="sm:max-w-sm min-[320px]:max-w-xs  md:mt-40 sm:mt-5 rounded overflow-hidden shadow-lg text-center">
            <img
              className="md:w-[200px] md:h-[240px] lg:w-[250px] lg:h-[250px] rounded sm:w-full min-[320px]:w-full"
              src="https://akcdn.detik.net.id/community/media/visual/2023/05/02/ilustrasi-capres-terkuat-jelang-2024-ilustrator-zaki-alfarabidetikcom-4_169.jpeg?w=700&q=90"
              alt=""
            />
            <div className="md:px-0   py-2 border-white ">
              <p className="text-white text-left text-sm mt-4 md:w-[200px]  lg:w-[250px] line-clamp-2 overflow-hidden">
                Head to Head Survei Indikator: Prabowo Unggul di Duel Lawan
                Ganjar atau Anies
              </p>
            </div>
          </div>
        </div>
        <FloatingButton />
        <Footer />
      </div>
    </div>
  );
}
