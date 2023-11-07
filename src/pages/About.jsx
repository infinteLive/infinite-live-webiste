import Footer from "../components/Footer";
import Compro from "../assets/COMPRO INFINITE LIVE - SD.pdf";
import ComproGagasIndo from "../assets/COMPRO-GAGASINDO-2023-FULL.pdf";
import comproVAT from "../assets/Visual-Art-&-Technology-Company-Profile.pdf";
import axios from "axios";
import { saveAs } from "file-saver";
import { useEffect } from "react";
export default function About() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  const handleDownloadInfite = () => {
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
  const handleDownloadComproGagas = () => {
    axios({
      url: ComproGagasIndo,
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
  const handleDownloadComproVAT = () => {
    axios({
      url: comproVAT,
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
  // ABOUT TERUPDATED
  return (
    <div className="background">
      <section className="w-full h-screen overflow-hidden bg-[url(https://ik.imagekit.io/zhbznxloz/wallpaperflare%201.png?updatedAt=1694697094143)] bg-cover bg-center bg-no-repeat">
        <div className=" mt-40 p-8  h-full">
          <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h1 className="text-white  sm:text-5xl font-bold min-[320px]:mb-2  sm:mb-4 min-[320px]:text-4xl ">
              About Us
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
      {/* banner end */}
      <div className="container">
        <div className="mt-20">
          <h1 className="text-red-800 text-4xl font-bold text-center italic">
            Our Founder
          </h1>
        </div>
        <div className="flex min-[320px]:justify-center min-[320px]:items-center  min-[320px]:gap-0 lg:justify-center lg:items-center min-[320px]:flex-col lg:flex-row lg:gap-7 mt-5  ">
          <div className="min-[320px]:w-[80%]  lg:w-[40%]  ">
            <p className="text-lg mb-6   text-white">
              Nest group indonsia Didirikan oleh Bapak Soegianto Husin pada
              tahun 2009 untuk memberikan solusi dari permasalahan persiapan
              perlengkapan acara dengan minimum viable product : professional
              sound system Setahun setelahnya pada 31 desember 2010 INFINITE
              live Production lahir sebagai brand sound system & lighting rental
              company dan terus berkembang menjadi perusahaan jasa rental
              equipment event & pengadaan satu-satunya yang ahli
              mengintegrasikan audio & visual di indonesia
            </p>
          </div>
          <div className=" min-[320px]:order-first lg:order-2 min-[320px]:w-[210px] sm:w-[330px] lg:w-[30%] min-[320px]:mb-5 lg:mb-0 flex min-[320px]:justify-center lg:justify-center items-center">
            <img
              src="https://ik.imagekit.io/zhbznxloz/WhatsApp%20Image%202023-10-11%20at%2022.12.24_c67d5bae.jpg?updatedAt=1697037195297"
              alt="Tentang Kami"
              className=" min-[320px]:w-[230px:h-[360px] sm:h-[420px] rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* founder end */}

      <div className="mt-20 w-[90%] mx-auto">
        <h1 className="text-center text-red-800 text-4xl font-bold italic">
          Who We Are
        </h1>
        <h2 className="text-white text-center  sm:text-lg  min-[320px]  min-[320px]:px-6 text-base mt-2">
          INFINITE live Production merupakan perusahaan yang bergerak di bidang
          event production yang menyediakan kebutuhan produksi, serta peralatan
          audio visual & lighting terbaik untuk acara online maupun offline di
          seluruh indonesia dengan di dukung oleh tim profesional. Kami telah
          bekerjasama dengan berbagai macam perusahaan di indonesia untuk
          berkontribusi dalam menangani acara yang diselenggarakan. INFINITE
          live Production ingin memberikan tingkat layanan yang berbeda, salah
          satunya yaitu bersedia melayani klien selama 24 jam.
        </h2>

        <div className="">
          <h1 className="ps-8 text-left text-orange-500 mt-5 mb-2 text-xl   font-bold">
            Why You Choose Infinite Live
          </h1>

          <div className="flex min-[320px]:flex-wrap lg:flex-nowrap justify-center items-start min-[320px]:gap-5 lg:gap-8 pt-10 px-24">
            <div
              className="text-center lg:w-[700px] md:w-[240px]  sm:w-[210px] 
              min-[320px]:w-[300px] "
            >
              <div className="min-[320px]:w-20 sm:w-20 sm:h-20 lg:w-28 lg:h-28 md:w-20 md:h-20 rounded-full bg-white mx-auto mb-4">
                <img
                  src="https://img.freepik.com/free-icon/star_318-867409.jpg"
                  alt=""
                  className="p-3"
                />
              </div>
              <div className="text-white font-bold mb-2">BERPENGALAMAN</div>
              <p className="text-white text-center  min-[320px]:w-[300px] sm:w-full">
                INFINITE live Production telah berpengalaman sejak tahun 2009
                dalam menangani bidang event production
              </p>
            </div>

            <div className="text-center lg:w-[700px] md:w-[240px] sm:w-[210px] min-[320px]:w-[300px]  ">
              <div className="min-[320px]:w-20 sm:w-20 sm:h-20 lg:w-28 lg:h-28 md:w-20 md:h-20 rounded-full bg-white mx-auto mb-4">
                <img
                  src="https://ik.imagekit.io/zhbznxloz/noun-man-234772.png?updatedAt=1696265592406"
                  alt=""
                  className="p-3"
                />
              </div>
              <div className="text-white font-bold mt-2">
                KOORDINASI YANG BAIK
              </div>
              <p className="text-white text-center min-[320px]:w-[300px] sm:w-full mt-2 ">
                memiliki pola koordinasi yang baik antara satu sama lain
                sehingga dapat memberikan kinerja yang optimal dalam setiap
                event yang akan berlangsung
              </p>
            </div>

            <div className="text-center lg:w-[700px] md:w-[240px] sm:w-[210px] min-[320px]:w-[300px]  ">
              <div className="min-[320px]:w-20 sm:w-20 sm:h-20 lg:w-28 lg:h-28 md:w-20 md:h-20 rounded-full bg-white mx-auto mb-4">
                <img
                  src="https://ik.imagekit.io/zhbznxloz/noun-checklist-5245841.png?updatedAt=1696265732310"
                  alt=""
                  className=" pt-4 p-1 object-cover"
                />
              </div>
              <div className="text-white font-bold mb-2">TIM YANG KOMPAK</div>
              <p className="text-white text-center min-[320px]:w-[300px] sm:w-full">
                memiliki tim yang kompak dengan membangun kerjasama yang baik
                serta komunikasi yang baik setiap event berlangsung
              </p>
            </div>

            <div className="text-center lg:w-[700px] md:w-[240px]  sm:w-[210px] min-[320px]:w-[300px]  ">
              <div className="min-[320px]:w-20 sm:w-20 sm:h-20 lg:w-28 lg:h-28 md:w-20 md:h-20 rounded-full bg-white mx-auto mb-4">
                <img
                  src="https://ik.imagekit.io/zhbznxloz/_Pngtree_rocket%20line%20black%20icon_3767581.png?updatedAt=1694717588452"
                  alt=""
                  className="p-3"
                />
              </div>
              <div className="text-white font-bold mb-2">INOVATIF</div>
              <p className="text-white text-center min-[320px]:w-[300px] sm:w-full">
                memberikan solusi pilihan terbaik dengan melakukan perencanaan
                dan penyelesaian yang sesuai demi mewujudkan konsep yang dibuat
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* who we are end */}

      <div className="min-[320px]:flex-col lg:flex-row min-[320px]:justify-center xl:justify-center xl:items-center min-[320px]:items-center  flex bg-black p-10 min-[320px]:mt-0 lg:mt-20">
        <h1 className="text-red-700  xl:pb-64 lg:pb-0 text-5xl font-bold italic min-[320px]:mt-16 min-[320px]:mb-10 lg:mb-0  ">
          Milestone
        </h1>
        <div className="flex flex-col px-10">
          <div className="min-[320px]:w-full">
            <div className="min-[320px]:w-[90%] md:w-[720px] lg:6/12 xl:w-[90%] mx-auto relative">
              <div className="border-l-2 ">
                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 min-[320px]:py-1 md:py-2  mb-7 bg-blue-600 text-white rounded  flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-xl font-bold">2022</h1>
                    <h1 className="text-base font-semibold">
                      VELVET interior.exhibition.contractor merger dengan
                      INFINITE live sehingga terbentuklah INFINITE live
                      production One Stop Solution sewa dan jual perlengkapan
                      pesta{" "}
                    </h1>
                  </div>
                </div>

                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 min-[320px]:py-1 md:py-2  mb-7 bg-pink-600 text-white rounded  flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-pink-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-pink-300 absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-xl font-bold">2020</h1>
                    <h1 className="text-base font-semibold">
                      INFINITE live mulai menjadi distributor utama YESTECH di
                      indonesia{" "}
                    </h1>
                  </div>
                </div>

                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 min-[320px]:py-1 md:py-2  mb-7 bg-green-600 text-white rounded  flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-green-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-green-300 absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-xl font-bold">2018</h1>
                    <h1 className="text-base font-semibold">
                      INFINITE live mendapatkan rekor MURI untuk "Tayangan
                      Pertunjukan Melalui Rangkaian Layar LED Terpanjang" yang
                      menjadi bagian dari LIVE Show
                    </h1>
                  </div>
                </div>

                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 min-[320px]:py-1 md:py-2  mb-7 bg-purple-600 text-white rounded  flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-purple-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-purple-300 absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-xl font-bold">2018</h1>
                    <h1 className="text-base font-semibold">
                      nest group indonesia berbadan hukum PT. Sarang Gagas
                      Indonesia
                    </h1>
                  </div>
                </div>

                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 min-[320px]:py-1 md:py-2  mb-7 bg-yellow-600 text-white rounded  flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-yellow-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-yellow-300 absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-xl font-bold">2016</h1>
                    <h1 className="text-base font-semibold">
                      INFINITE live meluncurkan ngi-INFINITE.com sebagai portal
                      rental event equipment online pertama di indonesia
                    </h1>
                  </div>
                </div>

                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 min-[320px]:py-1 md:py-2  mb-7 bg-orange-600 text-white rounded  flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-orange-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-orange-300 absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-xl font-bold min-[320px]:ps-4 sm:ps-0">
                      2013
                    </h1>
                    <h1 className="text-base font-semibold min-[320px]:px-4 sm:px-0">
                      VELVET interior.exhibition.contractor terbentuk
                    </h1>
                  </div>
                </div>

                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 min-[320px]:py-1 md:py-2  mb-7 bg-sky-600 text-white rounded  flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-sky-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-sky-300 absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-xl font-bold">2012</h1>
                    <h1 className="text-base font-semibold">
                      INFINITE live mulai mengkapanyekan LIVE (Lighting,
                      Integrated with Visual-audio Equipment) SHOW
                    </h1>
                  </div>
                </div>

                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 min-[320px]:py-1 md:py-2  mb-7 bg-indigo-600 text-white rounded  flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-indigo-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-indigo-300 absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-xl font-bold">2011</h1>
                    <h1 className="text-basese font-semibold">
                      INFINITE live melengkapi bidang layanannya dengan
                      menambahkan perlengkapan multimedia
                    </h1>
                  </div>
                </div>
                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 min-[320px]:py-1 md:py-2  mb-7 bg-cyan-600 text-white rounded  flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-cyan-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-cyan-300 absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-xl font-bold">2010</h1>
                    <h1 className="text-basese font-semibold">
                      INFINITE live lahir sebagai brand sound system & lighting
                      rental company
                    </h1>
                  </div>
                </div>
                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 min-[320px]:py-1 md:py-2  mb-7 bg-cyan-800 text-white rounded  flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-cyan-800 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-cyan-300 absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-xl font-bold">2009</h1>
                    <h1 className="text-base font-semibold">
                      nest group indonesia didirikan untuk memberikan solusi
                      dari permasalahan persiapan perlengkapan perlengkapan
                      acara dengan Minimum Viable Product: Professional Sound
                      System
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  milestone end */}

      <div className="text-center mt-10 font-bold">
        <h1
          className="text-white min-[320px]:text-[22px] sm:text-3xl italic"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          member of nest group indonesia
        </h1>

        <div className="flex min-[320px]:flex-wrap md:flex-nowrap md:flex-row min-[320px]:gap-5 md:gap-8 lg:gap-20 justify-center items-start mt-12">
          <div className="text-center ">
            <div className="min-[320px]:w-[300px] min-[320px]:h-[290px] md:w-[220px] md:h-[200px] lg:w-[250px] lg:h-[220px] rounded-xl shadow-lg bg-zinc-300 border-2 border-black">
              <img
                className="w-full h-full object-cover object-center mt-4"
                src="https://ik.imagekit.io/zhbznxloz/Logo%20Gagasindo.png?updatedAt=1696270465970"
                alt="Kitten"
              />
            </div>
            <div className="mt-5 md:h-20">
              <h2 className="text-sm mb-3 font-bold text-white md:w-[220px] md:h-[200px] lg:w-[250px] lg:h-[220px]  min-[320px]:w-[300px]">
                INTEGRATED OFFLINE ONLINE EVENT
              </h2>
            </div>

            <button
              onClick={handleDownloadComproGagas}
              className="px-8 py-4 min-[320px]:mt-4 sm:mt-4 md:mt-0 mb-5 font-bold text-white border-b-2 rounded-lg shadow-lg bg-black shadow-orange-500/80"
            >
              DOWLOAD COMPRO
            </button>
          </div>

          <div className="text-center">
            <div className="min-[320px]:w-[300px] min-[320px]:h-[290px] md:w-[220px] md:h-[200px] lg:w-[250px] lg:h-[220px]  rounded-xl shadow-lg bg-zinc-300 border-2 border-black">
              <img
                className="w-full h-full object-cover object-center"
                src="https://ik.imagekit.io/zhbznxloz/FINAL%20LOGO%20INFINITE%20live%20Production.png?updatedAt=1696270501376"
                alt="Kitten"
              />
            </div>
            <div className="mt-5 md:h-20">
              <h2 className="text-sm font-bold mb-2 text-white md:w-[220px] md:h-[200px] lg:w-[250px] lg:h-[220px]  min-[320px]:w-[300px]">
                OFFLINE-ONLINE EVENT EQUIPMENT RENTAL & SYSTEMS INTEGRATOR
                SUPPLIER
              </h2>
            </div>
            <button
              onClick={handleDownloadInfite}
              className="px-8 py-4 mb-5  font-bold text-white border-b-2 rounded-lg shadow-lg bg-black shadow-orange-500/80"
            >
              DOWLOAD COMPRO
            </button>
          </div>

          <div className="text-center">
            <div className="min-[320px]:w-[300px] min-[320px]:h-[290px]  md:w-[220px] md:h-[200px] lg:w-[250px] lg:h-[220px]  rounded-xl shadow-lg bg-zinc-300 border-2 border-black flex jus items-center flex-col ">
              <img
                className="min-[320px]:w-[290px] min-[320px]:h-[250px] p-2 mt-3  w-full h-full object-cover object-center "
                src="https://ik.imagekit.io/zhbznxloz/VAT%20logo.png?updatedAt=1696270357403"
                alt="Kitten"
              />
            </div>
            <div className="mt-5 md:h-20">
              <h2 className="text-sm font-bold mb-2 text-white md:w-[220px] md:h-[200px] lg:w-[250px] lg:h-[220px]  min-[320px]:w-[300px]">
                DESIGN AND PROGRAMMING IMMERSIVE SOFTWARE DEVELOPER
              </h2>
            </div>
            <button
              onClick={handleDownloadComproVAT}
              className="px-8 py-4 mb-5  font-bold text-white border-b-2 rounded-lg shadow-lg bg-black shadow-orange-500/80"
            >
              DOWLOAD COMPRO
            </button>
          </div>
        </div>
      </div>
      {/* member end */}
      <Footer />
    </div>
  );
}
