import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailRent() {
  const [dataDetailRent, setDataDetailRent] = useState({});
  const [largeImageSrc, setLargeImageSrc] = useState("");
  const [imageInstalledActive, setImageInstalledActive] = useState("");
  const [showPopupInstalled, setShowPopupInstalled] = useState(false);

  const [showPopup, setShowPopup] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };
  const openPopupInstalled = () => {
    setShowPopupInstalled(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const closePopupInstalled = () => {
    setShowPopupInstalled(false);
  };

  const openZoom = () => {
    setIsZoomed(true);
  };
  const closZoom = () => {
    setIsZoomed(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const updateLargeImage = (newSrc) => {
    setLargeImageSrc(newSrc);
  };

  const updateImageInstalled = (newSrc) => {
    setImageInstalledActive(newSrc);
  };

  const { id } = useParams();
  const navigate = useNavigate();

  async function fetchDetailRent() {
    const response =
      await fetch(`https://90b9399s-3000.asse.devtunnels.ms/rents/${id}
    `);

    const data = await response.json();
    setDataDetailRent(data);
    setLargeImageSrc(data.url);
  }

  useEffect(() => {
    fetchDetailRent();
  }, []);

  return (
    <div className="background">
      <div className="container">
        {Object.keys(dataDetailRent).length > 0 ? (
          <section className="py-20 font-poppins ">
            <div className="min-[320px]:w-[90%] sm:max-w-6xl mx-auto  bg-zinc-600 relative bg-opacity-30 rounded-lg  ">
              <div className="flex flex-wrap justify-center items-center  min-[320px]:mb-14 sm:mb-24  md:h-full overflow-hidden">
                <div className="w-full  md:w-1/2 ">
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
                          onClick={openPopup}
                          onMouseEnter={openZoom}
                          onMouseLeave={closZoom}
                          className={` object-center object-cover  min-[320px]:w-[240px] min-[320px]:pt-5 md:pt-0 min-[320px]:h-[210px] sm:w-[220px] sm:h-[210px] lg:w-[400px] lg:h-[340px]  ${
                            isZoomed
                              ? "transform scale-105 transition-transform"
                              : ""
                          }`}
                          src={largeImageSrc}
                          alt=""
                        />
                      </div>
                      <a
                        className="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2"
                        href="#"
                      ></a>
                    </div>
                    <div className=" min-[320px]:mt-[-20px] mt-[-40px] flex justify-center items-center mx-2 min-[320px]:flex">
                      <div className="w-1/2 p-2 sm:w-1/4">
                        <a
                          onClick={() =>
                            updateLargeImage(dataDetailRent?.smallImg1)
                          }
                        >
                          <img
                            className="object-center object-cover  w-full lg:h-28"
                            src={dataDetailRent?.smallImg1}
                            alt=""
                          />
                        </a>
                      </div>

                      <div className="w-1/2 p-2 sm:w-1/4">
                        <a
                          onClick={() =>
                            updateLargeImage(dataDetailRent?.smallImg2)
                          }
                        >
                          <img
                            className="object-center object-cover  w-full lg:h-28"
                            src={dataDetailRent?.smallImg2}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="w-1/2 p-2 sm:w-1/4">
                        <a
                          onClick={() => updateLargeImage(dataDetailRent?.img3)}
                        >
                          <img
                            className="object-center object-cover  w-full lg:h-28"
                            src={dataDetailRent?.img3}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="w-1/2 p-2 sm:w-1/4">
                        <a
                          onClick={() => updateLargeImage(dataDetailRent?.img4)}
                        >
                          <img
                            className="object-center object-cover  w-full lg:h-28"
                            src={dataDetailRent?.img4}
                            alt=""
                          />
                        </a>
                      </div>

                      {}
                    </div>
                  </div>
                </div>
                <div className="min-[320px]:mt-3 sm:0 w-full h-auto px-4 md:w-1/2 ">
                  <div className="lg:pl-16 md:pl-5  flex flex-col md:gap-1 min-[320px]:gap-0 lg:gap-3">
                    <h2 className="max-w-xl  font-semibold leading-loose tracking-wide text-white min-[320px]:text-lg md:text-2xl lg:text-3xl ">
                      {dataDetailRent?.name}
                    </h2>

                    <p className="inline-block min-[320px]:text-base md:text-xl font-semibold text-white ">
                      <span>
                        {dataDetailRent?.price?.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })}
                      </span>
                      <p></p>
                    </p>

                    <div className="flex">
                      <h1 className="text-white min-[320px]:text-base md:text-xl   font-semibold ">
                        category : {dataDetailRent?.SubCategoryRent?.name}
                      </h1>
                      <h1 className="text-white min-[320px]:text-base md:text-xl  font-semibold ml-2">
                        TV{" "}
                      </h1>
                    </div>
                    <div className="flex">
                      <h1 className="text-white min-[320px]:text-base md:text-xl   font-semibold ">
                        Size Measurements :{" "}
                      </h1>
                      <h1 className="text-white min-[320px]:text-base md:text-xl   font-semibold ml-2">
                        1927 x 1167 x 1927 mm{" "}
                      </h1>
                    </div>

                    <div className="flex">
                      <h1 className="text-white min-[320px]:text-base md:text-xl   font-semibold ">
                        Berat :{" "}
                      </h1>
                      <h1 className="text-white min-[320px]:text-base md:text-xl   font-semibold ml-2">
                        9 Kg{" "}
                      </h1>
                    </div>

                    <div className="flex gap-4 mb-6 min-[320px]:mt-5 lg:mt-10 md:mt-5">
                      <a
                        onClick={() => navigate("/contact-us")}
                        className="w-full px-4 py-3 text-center font-semibold text-gray-100 bg-blue-600 border border-transparent dark:border-gray-700 hover:border-blue-500 hover:text-blue-700 hover:bg-blue-100 dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-900 rounded-xl"
                      >
                        Minta Penawaran
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-white text-center font-bold text-2xl italic">
                  PRODUCT DETAILS
                </h1>
                <div className="overflow-hidden w-1/2 lg:w-3/5 md:w-4/5 min-[320px]:w-[90%] min-[320px]:mt-3 mx-auto md:mt-8 p-4 rounded-lg text-white">
                  <div className="grid grid-cols-2 min-[320px]:gap-2 sm:gap-5">
                    {Array.isArray(dataDetailRent?.details) ? (
                      dataDetailRent?.details?.map((detail, index) => (
                        <div key={index}>
                          {detail.split(":").map((item, index) => (
                            <p
                              key={index}
                              className="font-medium text-sm sm:text-base text-center"
                            >
                              {item}
                            </p>
                          ))}
                        </div>
                      ))
                    ) : (
                      <p className="text-center">Detail Rent Tidak ada.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20 flex justify-center items-center flex-col">
              <h1 className="uppercase font-bold text-2xl text-center text-white">
                Installed On Projects
              </h1>
              <div className="min-[320px]:px-2 sm:px-6 min-[320px]:pt-2 sm:pt-10 mb-8 w-1/2 lg:w-3/5 md:w-4/5 min-[320px]:w-[90%] md:mb-0 rounded-xl bg-zinc-400 mt-10 flex justify-center items-center ">
                <div className="relative top-0 overflow-hidden w-full rounded-xl">
                  <div className="relative  mb-6 lg:mb-10 lg:h-96 overflow-hidden rounded-xl ">
                    {/* Tombol navigasi */}
                    <a
                      className="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2"
                      href="#"
                    >
                      {/* ... */}
                    </a>
                    <div className="">
                      <iframe
                        src={`https://www.youtube.com/embed/Shtwr8-P0zs`}
                        title="YouTube Video Embed"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="sm:w-[560px] lg:w-full sm:h-[400px] min-[320px]:w-[100%] min-[320px]:h-[240px] "
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
                          updateImageInstalled(dataDetailRent?.img1)
                        }
                      >
                        <img
                          onClick={openPopupInstalled}
                          onMouseEnter={openZoom}
                          onMouseLeave={closZoom}
                          className="object-center object-cover w-full lg:h-28"
                          src={dataDetailRent?.img1}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="w-1/2 p-2 sm:w-1/4">
                      <a
                        onClick={() =>
                          updateImageInstalled(dataDetailRent?.img2)
                        }
                      >
                        <img
                          onClick={openPopupInstalled}
                          onMouseEnter={openZoom}
                          onMouseLeave={closZoom}
                          className="object-center object-cover w-full lg:h-28"
                          src={dataDetailRent?.img2}
                          alt=""
                        />
                      </a>
                    </div>

                    <div className="w-1/2 p-2 sm:w-1/4">
                      <a
                        onClick={() =>
                          updateImageInstalled(dataDetailRent?.img3)
                        }
                      >
                        <img
                          onClick={openPopupInstalled}
                          onMouseEnter={openZoom}
                          onMouseLeave={closZoom}
                          className="object-center object-cover w-full lg:h-28"
                          src={dataDetailRent?.img3}
                          alt=""
                        />
                      </a>
                    </div>

                    <div className="w-1/2 p-2 sm:w-1/4">
                      <a
                        onClick={() =>
                          updateImageInstalled(dataDetailRent?.img4)
                        }
                      >
                        <img
                          onClick={openPopupInstalled}
                          onMouseEnter={openZoom}
                          onMouseLeave={closZoom}
                          className="object-center object-cover w-full lg:h-28"
                          src={dataDetailRent?.img4}
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <h1>Detail rent tidak ada.</h1>
        )}
      </div>

      <Footer />
      {showPopupInstalled && (
        <div className="fixed inset-0 mt-16 flex items-center justify-center z-100">
          <div className="bg-white p-8 rounded shadow-lg min-[320px]:max-w-xs sm:max-w-md sm:h-[500px] relative">
            {/* Isi popup di sini */}
            <img
              src={imageInstalledActive}
              alt=""
              className="w-full h-full object-cover p-10"
            />
            <button
              onClick={closePopupInstalled}
              className="absolute top-2 right-2 p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {showPopup && (
        <div className="fixed inset-0 mt-16 flex items-center justify-center z-100">
          <div className="bg-white p-8 rounded shadow-lg min-[320px]:max-w-xs sm:max-w-md sm:h-[500px] relative">
            {/* Isi popup di sini */}
            <img
              src={largeImageSrc}
              alt=""
              className="w-full h-full object-cover p-10"
            />
            <button onClick={closePopup} className="absolute top-2 right-2 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
