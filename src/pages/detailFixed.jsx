import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useState } from "react";

export default function DetailFixed() {
    const [largeImageSrc, setLargeImageSrc] = useState('https://i.postimg.cc/0jwyVgqz/Microprocessor1-removebg-preview.png');

    const updateLargeImage = (newSrc) => {
      setLargeImageSrc(newSrc);
    }
    const specDetails = [
      "Power-handling nominal (RMS)\t600 W",
      "Power-handling, program\t1200 W",
      "Power-handling, peak\t2400 W",
      "Nominal impedance\t8 ohms",
      "Max SPL\t133 dB half space (@10% THD)",
      "Max SPL peak\t138 dB half space (@10% THD)",
      "Sensitivity 1W/1m\t110 dB half space",
      "Frequency response +/- 3 dB\t108 Hz – 14 kHz",
      "Frequency response -10 dB\t100 Hz – 20 kHz",
      "Low/Mid Speaker\t3x 8″ with 2″ voice coil (32 ohms) Neodymium",
      "HF Driver\t1″ with 1.75″ voice coil (16 ohms) Neodymium",
      "Horn characteristics\t60° x +5°/-25° MCT horn",
      "Crossover frequency\t1.7 kHz, 12 dB/oct.",
      "Connections\t2x Speakon NL4, pin assignment switchable between 1+/1- and 2+/2-",
      "Pole mount\tMonoTilt 0°",
      "Rigging points\t7x M8",
      "Handles\t2, integrated",
      "Enclosure\tBirch multiplex",
      "Grille\t2 mm metal grille backed with black acoustic foam",
      "Finish\tAcrylic enamel, black",
      "Optional accessories\tProtective transport covers, Tilt bracket, Tilt bracket head stack extension set, Pick point / Cluster plate, AP-8 Rigging point",
      "Dimensions (WxHxD)\t44 x 68 x 46 cm",
      "Weight\t26.4 kg / 58.2 lbs"
    ];
  
  const navigate = useNavigate();
  return (
    //

    <div className="background">
      <section class="py-20 font-poppins ">
        <div class="max-w-6xl px-4 mx-auto bg-zinc-600 relative bg-opacity-30 rounded-lg  ">
          <div class="flex flex-wrap mb-24 -mx-4">
            <div class="w-full px-6 pt-10 mb-8 md:w-1/2 md:mb-0">
            <div className="relative top-0 overflow-hidden bg-white rounded-xl">
      <div className="relative mb-6 lg:mb-10 lg:h-96">
        {/* Tombol navigasi */}
        <a className="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2" href="#">
          {/* ... */}
        </a>
        <img className="object-contain w-full lg:h-full" src={largeImageSrc} alt="" />
        <a className="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2" href="#">
          {/* ... */}
        </a>
      </div>
      <div className="flex-wrap hidden -mx-2 md:flex">
        <div className="w-1/2 p-2 sm:w-1/4">
          <a  onClick={() => updateLargeImage('https://i.postimg.cc/0jwyVgqz/Microprocessor1-removebg-preview.png')}>
            <img className="object-contain w-full lg:h-28"
              src="https://i.postimg.cc/0jwyVgqz/Microprocessor1-removebg-preview.png" alt="" />
          </a>
        </div>
        <div className="w-1/2 p-2 sm:w-1/4">
          <a  onClick={() => updateLargeImage('https://i.postimg.cc/Z5KhRkD6/download-1-removebg-preview.png')}>
            <img className="object-contain w-full lg:h-28"
              src="https://i.postimg.cc/Z5KhRkD6/download-1-removebg-preview.png" alt="" />
          </a>
        </div>
        <div className="w-1/2 p-2 sm:w-1/4">
          <a  onClick={() => updateLargeImage('https://i.postimg.cc/Z5KhRkD6/download-1-removebg-preview.png')}>
            <img className="object-contain w-full lg:h-28"
              src="https://i.postimg.cc/Z5KhRkD6/download-1-removebg-preview.png" alt="" />
          </a>
        </div>
        <div className="w-1/2 p-2 sm:w-1/4">
          <a  onClick={() => updateLargeImage('https://i.postimg.cc/Z5KhRkD6/download-1-removebg-preview.png')}>
            <img className="object-contain w-full lg:h-28"
              src="https://i.postimg.cc/Z5KhRkD6/download-1-removebg-preview.png" alt="" />
          </a>
        </div>
      </div>
    </div>
            </div>
            <div class="w-full px-4 md:w-1/2 mt-20">
              <div class="lg:pl-20">
                <div class="mb-6 ">
                  <h2 class="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-white md:text-2xl ">
                    Intel® Core™ i5-12600HX Processor (18M Cache, up to 4.60
                    GHz)
                  </h2>
                 
                  <p class="inline-block text-2xl font-semibold text-white ">
                    <span>Rp.7,000.00</span>
                  
                  </p>
                </div>
             
<div className="">
  <div className="flex">
    <h1 className="text-white text-xl font-semibold ">category : </h1>
  <h1 className="text-white text-xl font-semibold ml-2">TV </h1>
  </div>
  <div className="flex mt-5">
    <h1 className="text-white text-xl font-semibold ">Brand : </h1>
  <h1 className="text-white text-xl font-semibold ml-2">FBT </h1>
  </div>
  <div className="flex mt-5">
    <h1 className="text-white text-xl font-semibold ">Size Measurements : </h1>
  <h1 className="text-white text-xl font-semibold ml-2">1927 x 1167 x 1927 mm </h1>
  </div>
    
  <div className="flex mt-5">
    <h1 className="text-white text-xl font-semibold ">Berat : </h1>
  <h1 className="text-white text-xl font-semibold ml-2">9 Kg </h1>
  </div>
</div>

               
                <div class="mb-6 mt-28 "></div>
              
                <div class="flex gap-4 mb-6">
                  <a
                    onClick={() => navigate('/contact-fixed')}
                    class="w-full px-4 py-3 text-center text-gray-100 bg-blue-600 border border-transparent dark:border-gray-700 hover:border-blue-500 hover:text-blue-700 hover:bg-blue-100 dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-900 rounded-xl"
                  >
                    Order
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1  className="text-white text-center font-bold text-2xl italic">PRODUCT DETAILS</h1>
            <div className="w-1/2 mx-auto mt-8 p-4 rounded-lg text-white">
     
      <div className="grid grid-cols-2 gap-10">
        {specDetails.map((detail, index) => (
          <div key={index}>
            {detail.split(':').map((item, index) => (
              <p key={index} className="font-medium">{item}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
          </div>
        </div>
        <div className="mt-20">
          <h1 className="uppercase font-bold text-2xl text-center text-white">
Installed On Projects</h1>
<div class="w-full px-6 pt-10 mb-8 md:w-1/2 md:mb-0 rounded-xl bg-zinc-400 mt-10 flex justify-center items-center ml-[280px]">
            <div className="relative top-0 overflow-hidden  rounded-xl">
      <div className="relative mb-6 lg:mb-10 lg:h-96">
        {/* Tombol navigasi */}
        <a className="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2" href="#">
          {/* ... */}
        </a>
        <div className="video-responsive">
      <iframe
        width="560"
        height="400"
        src={`https://www.youtube.com/embed/Shtwr8-P0zs`}
        title="YouTube Video Embed"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className=""
      />
    </div>

        <a className="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2" href="#">
          {/* ... */}
        </a>
      </div>
      <div className="flex-wrap hidden -mx-2 md:flex">
        <div className="w-1/2 p-2 sm:w-1/4">
          <a  onClick={() => updateLargeImage('https://i.postimg.cc/0jwyVgqz/Microprocessor1-removebg-preview.png')}>
            <img className="object-contain w-full lg:h-28"
              src="https://i.postimg.cc/0jwyVgqz/Microprocessor1-removebg-preview.png" alt="" />
          </a>
        </div>
        {/* Tambahkan gambar kecil lainnya dengan event handler yang sesuai */}
        {/* ... */}
        <div className="w-1/2 p-2 sm:w-1/4">
          <a  onClick={() => updateLargeImage('https://i.postimg.cc/Z5KhRkD6/download-1-removebg-preview.png')}>
            <img className="object-contain w-full lg:h-28"
              src="https://i.postimg.cc/Z5KhRkD6/download-1-removebg-preview.png" alt="" />
          </a>
        </div>
        <div className="w-1/2 p-2 sm:w-1/4">
          <a  onClick={() => updateLargeImage('https://i.postimg.cc/Z5KhRkD6/download-1-removebg-preview.png')}>
            <img className="object-contain w-full lg:h-28"
              src="https://i.postimg.cc/Z5KhRkD6/download-1-removebg-preview.png" alt="" />
          </a>
        </div>
        <div className="w-1/2 p-2 sm:w-1/4">
          <a  onClick={() => updateLargeImage('https://i.postimg.cc/Z5KhRkD6/download-1-removebg-preview.png')}>
            <img className="object-contain w-full lg:h-28"
              src="https://i.postimg.cc/Z5KhRkD6/download-1-removebg-preview.png" alt="" />
          </a>
        </div>
      </div>
    </div>
            </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
