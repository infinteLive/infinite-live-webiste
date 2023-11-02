import Footer from "../components/Footer";
import Compro from "../assets/COMPRO INFINITE LIVE - SD.pdf";
import ComproGagasIndo from "../assets/COMPRO-GAGASINDO-2023-FULL.pdf"
import comproVAT from '../assets/Visual-Art-&-Technology-Company-Profile.pdf'
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
  return (
    <div className="background">
      <section className="w-full h-[600px] overflow-hidden bg-[url(https://ik.imagekit.io/zhbznxloz/wallpaperflare%201.png?updatedAt=1694697094143)] bg-cover bg-center bg-no-repeat">
        <div className=" mt-40 p-8 md:p-12 lg:px-16 lg:py-24 h-full">
          <div className="justify-center items-center text-center flex flex-col">
            <h1 className="text-white text-5xl font-bold mb-4">About Us</h1>
            <hr className="border-2 border-red-800 w-40 mb-8" />
          </div>

          <div
            className="flex justify-between text-white absolute bottom-4 left-0 right-0"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <div className="ml-2 font-bold">#harusbisa</div>
            <div className=" text-center italic ml-[70px]">
              nest group indonesia
            </div>
            <div className="mr-2 font-bold ">#integrasitanpabatas</div>
          </div>
        </div>
      </section>
      <div className="mt-20">
        <h1 className="text-red-800 text-4xl font-bold text-center italic">
          Our Founder
        </h1>
      </div>
      <div className="flex gap-44 mt-5">
        <div className="w-1/2 pl-40 ">
          <p className="text-lg mb-6 mt-20 text-white">
            Nest group indonsia Didirikan oleh Bapak Soegianto Husin pada tahun
            2009 untuk memberikan solusi dari permasalahan persiapan
            perlengkapan acara dengan minimum viable product : professional
            sound system Setahun setelahnya pada 31 desember 2010 INFINITE live
            Production lahir sebagai brand sound system & lighting rental
            company dan terus berkembang menjadi perusahaan jasa rental
            equipment event & pengadaan satu-satunya yang ahli mengintegrasikan
            audio & visual di indonesia
          </p>
        </div>
        <div className="w-[280px] ">
          <img
            src="https://ik.imagekit.io/zhbznxloz/WhatsApp%20Image%202023-10-11%20at%2022.12.24_c67d5bae.jpg?updatedAt=1697037195297"
            alt="Tentang Kami"
            className="w-full h-[420px] rounded-full object-cover"
          />
        </div>
      </div>
      <div className="justify-center items-center mt-20">
        <h1 className="text-red-800 text-4xl font-bold text-center italic">
          Who We Are
        </h1>
        <h2
          className="text-white text-center  ml-20 mr-20 mt-2 "
          // style={{ maxWidth: "1000px" }}
        >
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
          <h1 className="text-orange-500 mt-5 mb-2 text-xl ml-20  font-bold">
            Why You Choose Infinite Live
          </h1>

          <div className="flex justify-center items-start gap-8 pt-10 px-24">
            <div className="text-center">
              <div className="w-28 h-28 rounded-full bg-white mx-auto mb-4">
                <img
                  src="https://img.freepik.com/free-icon/star_318-867409.jpg"
                  alt=""
                  className="p-3"
                />
              </div>
              <div className="text-white font-bold mb-2">BERPENGALAMAN</div>
              <p
                className="text-white text-center"
                style={{ maxWidth: "800px" }}
              >
                INFINITE live Production telah berpengalaman sejak tahun 2009
                dalam menangani bidang event production
              </p>
            </div>

            <div className="text-center">
              <div className="w-28 h-28 rounded-full bg-white mx-auto mb-4">
                <img
                  src="https://ik.imagekit.io/zhbznxloz/noun-man-234772.png?updatedAt=1696265592406"
                  alt=""
                  className="p-3"
                />
              </div>
              <div className="text-white font-bold mt-2">
                KOORDINASI YANG BAIK
              </div>
              <p
                className="text-white text-center mt-2 "
                style={{ maxWidth: "800px" }}
              >
                memiliki pola koordinasi yang baik antara satu sama lain
                sehingga dapat memberikan kinerja yang optimal dalam setiap
                event yang akan berlangsung
              </p>
            </div>

            <div className="text-center">
              <div className="w-28 h-28 rounded-full bg-white mx-auto mb-4">
                <img
                  src="https://ik.imagekit.io/zhbznxloz/noun-checklist-5245841.png?updatedAt=1696265732310"
                  alt=""
                  className=" pt-4 p-1 object-cover"
                />
              </div>
              <div className="text-white font-bold mb-2">TIM YANG KOMPAK</div>
              <p className="text-white text-center">
                memiliki tim yang kompak dengan membangun kerjasama yang baik
                serta komunikasi yang baik setiap event berlangsung
              </p>
            </div>

            <div className="text-center">
              <div className="w-28 h-28 rounded-full bg-white mx-auto mb-4">
                <img
                  src="https://ik.imagekit.io/zhbznxloz/_Pngtree_rocket%20line%20black%20icon_3767581.png?updatedAt=1694717588452"
                  alt=""
                  className="p-3"
                />
              </div>
              <div className="text-white font-bold mb-2">INOVATIF</div>
              <p className="text-white text-center">
                memberikan solusi pilihan terbaik dengan melakukan perencanaan
                dan penyelesaian yang sesuai demi mewujudkan konsep yang dibuat
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-black p-10 mt-20">
        <div className=" flex flex-col">
          <h1 className="text-red-700 text-5xl font-bold italic ml-10 mt-[300px] ">
            Milestone
          </h1>
        </div>
        <div className="flex flex-col px-10">
          <div className="ml-[150px]">
            <div class="w-10/12 md:w-[720px] lg:6/12 mx-auto relative">
              <div class="border-l-2 mt-10">
                <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-2 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                  <div class="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div class="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

                  <div class="flex-auto">
                    <h1 class="text-lg font-semibold">2022</h1>
                    <h1 class="text-sm font-semibold">
                      VELVET interior.exhibition.contractor merger dengan
                      INFINITE live sehingga terbentuklah INFINITE live
                      production One Stop Solution sewa dan jual perlengkapan
                      pesta
                    </h1>
                  </div>
                </div>

                <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-pink-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                  <div class="w-5 h-5 bg-pink-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div class="w-10 h-1 bg-pink-300 absolute -left-10 z-0"></div>

                  <div class="flex-auto">
                    <h1 class="text-lg font-bold">2020</h1>
                    <h1 class="text-sm font-semibold">
                      INFINITE live mulai menjadi distributor utama YESTECH di
                      indonesia{" "}
                    </h1>
                  </div>
                </div>

                <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-green-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                  <div class="w-5 h-5 bg-green-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div class="w-10 h-1 bg-green-300 absolute -left-10 z-0"></div>

                  <div class="flex-auto">
                    <h1 class="text-lg font-bold">2018</h1>
                    <h1 class="text-sm font-semibold">
                      INFINITE live mendapatkan rekor MURI untuk "Tayangan
                      Pertunjukan Melalui Rangkaian Layar LED Terpanjang" yang
                      menjadi bagian dari LIVE Show
                    </h1>
                  </div>
                </div>

                <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-purple-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                  <div class="w-5 h-5 bg-purple-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div class="w-10 h-1 bg-purple-300 absolute -left-10 z-0"></div>

                  <div class="flex-auto">
                    <h1 class="text-lg font-bold">2018</h1>
                    <h1 class="text-sm font-semibold">
                      nest group indonesia berbadan hukum PT. Sarang Gagas
                      Indonesia
                    </h1>
                  </div>
                </div>

                <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-yellow-600 text-white rounded mb-10 flex-col md:flex-row">
                  <div class="w-5 h-5 bg-yellow-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 -mt-2 md:mt-0"></div>

                  <div class="w-10 h-1 bg-yellow-300 absolute -left-10 z-0"></div>

                  <div class="flex-auto">
                    <h1 class="text-lg font-bold">2016</h1>
                    <h1 class="text-sm font-semibold">
                      INFINITE live meluncurkan ngi-INFINITE.com sebagai portal
                      rental event equipment online pertama di indonesia
                    </h1>
                  </div>
                </div>
                <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-orange-500 text-white rounded mb-10 flex-col md:flex-row">
                  <div class="w-5 h-5 bg-orange-500 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 -mt-2 md:mt-0"></div>

                  <div class="w-10 h-1 bg-orange-200 absolute -left-10 z-0"></div>

                  <div class="flex-auto">
                    <h1 class="text-lg font-bold">2013</h1>
                    <h1 class="text-base font-semibold">
                      VELVET interior.exhibition.contractor terbentuk
                    </h1>
                  </div>
                </div>
                <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-sky-950 text-white rounded mb-10 flex-col md:flex-row">
                  <div class="w-5 h-5 bg-sky-950 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 -mt-2 md:mt-0"></div>

                  <div class="w-10 h-1 bg-sky-500 absolute -left-10 z-0"></div>

                  <div class="flex-auto">
                    <h1 class="text-lg font-bold">2012</h1>
                    <h1 class="text-sm font-semibold">
                      INFINITE live mulai mengkapanyekan LIVE (Lighting,
                      Integrated with Visual-audio Equipment) SHOW
                    </h1>
                  </div>
                </div>
                <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-indigo-800 text-white rounded mb-10 flex-col md:flex-row">
                  <div class="w-5 h-5 bg-indigo-800 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 -mt-2 md:mt-0"></div>

                  <div class="w-10 h-1 bg-indigo-400 absolute -left-10 z-0"></div>

                  <div class="flex-auto">
                    <h1 class="text-lg font-bold">2011</h1>
                    <h1 class="text-base font-semibold">
                      INFINITE live melengkapi bidang layanannya dengan
                      menambahkan perlengkapan multimedia
                    </h1>
                  </div>
                </div>
                <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-cyan-800 text-white rounded mb-10 flex-col md:flex-row">
                  <div class="w-5 h-5 bg-cyan-800 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 -mt-2 md:mt-0"></div>

                  <div class="w-10 h-1 bg-cyan-300 absolute -left-10 z-0"></div>

                  <div class="flex-auto">
                    <h1 class="text-lg font-bold">2010</h1>
                    <h1 class="text-base font-semibold">
                      INFINITE live lahir sebagai brand sound system & lighting
                      rental company
                    </h1>
                  </div>
                </div>
                <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-cyan-800 text-white rounded mb-10 flex-col md:flex-row">
                  <div class="w-5 h-5 bg-cyan-800 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 -mt-2 md:mt-0"></div>

                  <div class="w-10 h-1 bg-cyan-300 absolute -left-10 z-0"></div>

                  <div class="flex-auto">
                    <h1 class="text-lg font-bold">2009</h1>
                    <h1 class="text-sm font-semibold">
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
      <div>
        <div className=" text-center mt-10 font-bold">
          <h1
            className="text-white text-3xl italic"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            member of nest group indonesia
          </h1>
          <div className="flex flex-row gap-20 justify-center items-start mt-12">
            <div className="text-center">
              <div className="w-[250px] h-[220px] rounded-xl shadow-lg bg-zinc-300 border-2 border-black">
                <img
                  className="w-full h-full object-cover object-center mt-4"
                  src="https://ik.imagekit.io/zhbznxloz/Logo%20Gagasindo.png?updatedAt=1696270465970"
                  alt="Kitten"
                />
              </div>
              <div className="mt-5">
                <h2
                  className="text-sm mb-3 font-bold text-white"
                  style={{ maxWidth: "250px" }}
                >
                  INTEGRATED OFFLINE ONLINE EVENT
                </h2>
              </div>
            </div>

            <div className="text-center">
              <div className="w-[250px] h-[220px] rounded-xl shadow-lg bg-zinc-300 border-2 border-black">
                <img
                  className="w-full h-full object-cover object-center"
                  src="https://ik.imagekit.io/zhbznxloz/FINAL%20LOGO%20INFINITE%20live%20Production.png?updatedAt=1696270501376"
                  alt="Kitten"
                />
              </div>
              <div className="mt-5">
                <h2
                  className="text-sm font-bold mb-2 text-white"
                  style={{ maxWidth: "250px" }}
                >
                  OFFLINE-ONLINE EVENT EQUIPMENT RENTAL & SYSTEMS INTEGRATOR
                  SUPPLIER
                </h2>
               
              </div>
            </div>

            <div className="text-center">
              <div className="w-[250px] h-[220px] rounded-xl shadow-lg bg-zinc-300 border-2 border-black">
                <img
                  className="w-full h-full object-cover object-center p-5"
                  src="https://ik.imagekit.io/zhbznxloz/VAT%20logo.png?updatedAt=1696270357403"
                  alt="Kitten"
                />
              </div>
              <div className="mt-5">
                <h2
                  className="text-sm font-bold mb-2 text-white"
                  style={{ maxWidth: "250px" }}
                >
                  DESIGN AND PROGRAMMING IMMERSIVE SOFTWARE DEVELOPER
                </h2>
                
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-[120px]">
                <button onClick={handleDownloadComproGagas} class="px-8 py-4 mt-10  font-bold text-white border-b-2 rounded-lg shadow-lg bg-black shadow-orange-500/80">
                  DOWLOAD COMPRO
                </button>
                <button onClick={handleDownloadInfite}   class="px-8 py-4 mt-10  font-bold text-white border-b-2 rounded-lg shadow-lg bg-black shadow-orange-500/80">
                  DOWLOAD COMPRO
                </button>
                <button onClick={handleDownloadComproVAT}   class="px-8 py-4 mt-10  font-bold text-white border-b-2 rounded-lg shadow-lg bg-black shadow-orange-500/80">
                  DOWLOAD COMPRO
                </button>
                
        </div>
      </div>
      <Footer />
    </div>
  );
}
