import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useState } from "react";

export default function DetailFixed() {
  const [largeImageSrc, setLargeImageSrc] = useState(
    "https://i.postimg.cc/0jwyVgqz/Microprocessor1-removebg-preview.png"
  );

  const updateLargeImage = (newSrc) => {
    setLargeImageSrc(newSrc);
  };
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
    "Weight\t26.4 kg / 58.2 lbs",
  ];

  const navigate = useNavigate();
  return (
    //

    <div className="background">
      <div className="container">
        <section className="py-20 font-poppins ">
          <div className="min-[320px]:w-[90%] sm:max-w-6xl h-min mx-auto bg-zinc-600 relative bg-opacity-30 rounded-lg  ">
            <div className="flex flex-wrap justify-center items-center  min-[320px]:mb-14 sm:mb-24  md:h-full overflow-hidden">
              <div className="w-full md:w-1/2">
                <div className="relative  overflow-hidden bg-white rounded-xl min-[320px]:m-0 min-[320px]:m-4 md:m-5">
                  <div className="relative mb-6 lg:mb-10  min-[320px]:h-52 md:h-60 lg:h-[22rem] overflow-hidden">
                    {/* Tombol navigasi */}
                    <a
                      className="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2"
                      href="#"
                    >
                      {/* ... */}
                    </a>
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        className="object-cover  min-[320px]:w-[240px] min-[320px]:pt-5 md:pt-0 min-[320px]:h-[210px] sm:w-[220px] sm:h-[210px] lg:w-[400px] lg:h-[340px]"
                        src={largeImageSrc}
                        alt=""
                      />
                    </div>
                    <a
                      className="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2"
                      href="#"
                    >
                      {/* ... */}
                    </a>
                  </div>
                  <div className="min-[320px]:mt-[-20px] mt-[-40px] flex justify-center items-center mx-2 min-[320px]:flex">
                    <div className="w-1/2 p-2 sm:w-1/4">
                      <a
                        onClick={() =>
                          updateLargeImage(
                            "https://i.postimg.cc/0jwyVgqz/Microprocessor1-removebg-preview.png"
                          )
                        }
                      >
                        <img
                          className="object-contain w-full lg:h-28"
                          src="https://i.postimg.cc/0jwyVgqz/Microprocessor1-removebg-preview.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="w-1/2 p-2 sm:w-1/4">
                      <a
                        onClick={() =>
                          updateLargeImage(
                            "https://i.postimg.cc/Z5KhRkD6/download-1-removebg-preview.png"
                          )
                        }
                      >
                        <img
                          className="object-contain w-full lg:h-28"
                          src="https://i.postimg.cc/Z5KhRkD6/download-1-removebg-preview.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="w-1/2 p-2 sm:w-1/4">
                      <a
                        onClick={() =>
                          updateLargeImage(
                            "https://i.postimg.cc/Z5KhRkD6/download-1-removebg-preview.png"
                          )
                        }
                      >
                        <img
                          className="object-contain w-full lg:h-28"
                          src="https://i.postimg.cc/Z5KhRkD6/download-1-removebg-preview.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="w-1/2 p-2 sm:w-1/4">
                      <a
                        onClick={() =>
                          updateLargeImage(
                            "https://i.postimg.cc/Z5KhRkD6/download-1-removebg-preview.png"
                          )
                        }
                      >
                        <img
                          className="object-contain w-full lg:h-28"
                          src="https://i.postimg.cc/Z5KhRkD6/download-1-removebg-preview.png"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="min-[320px]:mt-3 sm:0 w-full h-auto px-4 md:w-1/2 ">
                <div className="lg:pl-16 md:pl-5  flex flex-col md:gap-1 min-[320px]:gap-0 lg:gap-3">
                  <h2 className="max-w-xl  font-semibold leading-loose tracking-wide text-white min-[320px]:text-lg md:text-2xl lg:text-3xl  ">
                    Intel® Core™ i5-12600HX Processor (18M Cache, up to 4.60
                    GHz)
                  </h2>

                  <p className="inline-block min-[320px]:text-base md:text-xl font-semibold text-white">
                    <span>Rp.7,000.00</span>
                  </p>
                  <div className="flex">
                    <h1 className="text-white min-[320px]:text-base md:text-xl   font-semibold">
                      category :{" "}
                    </h1>
                    <h1 className="text-white min-[320px]:text-base md:text-xl  font-semibold ml-2">
                      TV{" "}
                    </h1>
                  </div>
                  <div className="flex">
                    <h1 className="text-white min-[320px]:text-base md:text-xl   font-semibold ">
                      Brand :{" "}
                    </h1>
                    <h1 className="text-white min-[320px]:text-base md:text-xl   font-semibold ml-2">
                      FBT{" "}
                    </h1>
                  </div>
                  <div className="flex">
                    <h1 className="text-white min-[320px]:text-base md:text-xl font-semibold ">
                      Size Measurements :{" "}
                    </h1>
                    <h1 className="text-white min-[320px]:text-base md:text-xl   font-semibold ml-2">
                      1927 x 1167 x 1927 mm{" "}
                    </h1>
                  </div>

                  <div className="flex ">
                    <h1 className="text-white min-[320px]:text-base md:text-xl   font-semibold ml-2 ">
                      Berat :{" "}
                    </h1>
                    <h1 className="text-white min-[320px]:text-base md:text-xl   font-semibold ml-2">
                      9 Kg{" "}
                    </h1>
                  </div>

                  <div className="flex gap-4 mb-6 min-[320px]:mt-5 lg:mt-10 md:mt-5">
                    <a
                      onClick={() => navigate("/contact-fixed")}
                      className="w-full px-4 py-3 text-center text-gray-100 bg-blue-600 border border-transparent dark:border-gray-700 hover:border-blue-500 hover:text-blue-700 hover:bg-blue-100 dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-900 rounded-xl"
                    >
                      Order
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-white text-center font-bold text-2xl italic">
                PRODUCT DETAILS
              </h1>
              <div className="w-1/2 lg:w-3/5 md:w-4/5 min-[320px]:w-[90%] min-[320px]:mt-3 mx-auto md:mt-8 p-4 rounded-lg text-white">
                <div className="grid grid-cols-2 min-[320px]:gap-2 sm:gap-5">
                  {specDetails.map((detail, index) => (
                    <div key={index}>
                      {detail.split(":").map((item, index) => (
                        <p
                          key={index}
                          className="font-medium text-sm sm:text-base"
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 flex justify-center items-center flex-col">
            <h1 className="uppercase font-bold text-2xl text-center text-white">
              Installed On Projects
            </h1>
            <div className="min-[320px]:px-2 sm:px-6 min-[320px]:pt-2 sm:pt-10 mb-8 w-1/2 lg:w-3/5 md:w-4/5 min-[320px]:w-[90%] md:mb-0 rounded-xl bg-zinc-400 mt-10 flex justify-center items-center ">
              <div className="relative top-0 overflow-hidden  rounded-xl">
                <div className="relative mb-6 lg:mb-10 lg:h-96">
                  {/* Tombol navigasi */}
                  <a
                    className="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2"
                    href="#"
                  >
                    {/* ... */}
                  </a>
                  <div className="video-responsive object-center">
                    <iframe
                      width="560"
                      height="400"
                      src={`https://www.youtube.com/embed/Shtwr8-P0zs`}
                      title="YouTube Video Embed"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="sm:w-[560px] sm:h-[400px] min-[320px]:w-[100%] "
                    />
                  </div>

                  <a
                    className="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2"
                    href="#"
                  >
                    {/* ... */}
                  </a>
                </div>
                <div className="mx-2 flex min-[320px]:mt-[-20px] mt-[-40px] ">
                  <div className="w-1/2 p-2 sm:w-1/4">
                    <a
                      onClick={() =>
                        updateLargeImage(
                          "https://i.postimg.cc/0jwyVgqz/Microprocessor1-removebg-preview.png"
                        )
                      }
                    >
                      <img
                        className="object-contain w-full lg:h-28"
                        src="https://i.postimg.cc/0jwyVgqz/Microprocessor1-removebg-preview.png"
                        alt=""
                      />
                    </a>
                  </div>
                  {/* Tambahkan gambar kecil lainnya dengan event handler yang sesuai */}
                  {/* ... */}
                  <div className="w-1/2 p-2 sm:w-1/4">
                    <a
                      onClick={() =>
                        updateLargeImage(
                          "https://i.postimg.cc/Z5KhRkD6/download-1-removebg-preview.png"
                        )
                      }
                    >
                      <img
                        className="object-contain w-full lg:h-28"
                        src="https://i.postimg.cc/Z5KhRkD6/download-1-removebg-preview.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="w-1/2 p-2 sm:w-1/4">
                    <a
                      onClick={() =>
                        updateLargeImage(
                          "https://i.postimg.cc/Z5KhRkD6/download-1-removebg-preview.png"
                        )
                      }
                    >
                      <img
                        className="object-contain w-full lg:h-28"
                        src="https://i.postimg.cc/Z5KhRkD6/download-1-removebg-preview.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="w-1/2 p-2 sm:w-1/4">
                    <a
                      onClick={() =>
                        updateLargeImage(
                          "https://i.postimg.cc/Z5KhRkD6/download-1-removebg-preview.png"
                        )
                      }
                    >
                      <img
                        className="object-contain w-full lg:h-28"
                        src="https://i.postimg.cc/Z5KhRkD6/download-1-removebg-preview.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
