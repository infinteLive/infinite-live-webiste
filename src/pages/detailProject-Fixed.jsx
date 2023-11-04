import Footer from "../components/Footer";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { InstagramEmbed } from "react-social-media-embed";
export default function DetailProjectFixed() {
  const [embedUrl, setEmbedUrl] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  useEffect(() => {
    // Fungsi untuk mendapatkan URL embed dari API Instagram oEmbed
    const getEmbedUrl = async () => {
      try {
        const response = await fetch(
          `https://graph.facebook.com/v13.0/instagram-oembed?url=https://www.instagram.com/p/Cu_97Bzuaz2/`
        );
        const data = await response.json();
        setEmbedUrl(data.html);
      } catch (error) {
        console.error("Error fetching embed URL:", error);
      }
    };

    // Panggil fungsi untuk mendapatkan URL embed saat komponen dimuat
    getEmbedUrl();
  }, []);
  return (
    <div className="background">
      <div className="container min-[320px]:p-5 md:p-0 md:w-[90%] lg:w-[95%] xl:w-[85%] mx-auto overflow-hidden">
        <button
          onClick={() => navigate("/projectRent")}
          className="px-8 py-4 mt-24  font-bold text-white border-b-2 rounded-lg shadow-lg bg-black shadow-orange-500/80"
        >
          BACK
        </button>

        <h1 className="text-red-800 text-3xl font-bold mt-5 ">Name Event</h1>
        <h2 className="text-white font-semibold mt-2">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit..." "There is no one who loves pain
          itself, who seeks after it and wants to have it, simply because it is
          pain..."
        </h2>
        <div className=" mt-7">
          <h1 className="text-white text-3xl font-bold mb-5">Photos</h1>
          <div className="grid min-[320px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 justify-between items-center mb-4">
            <div className="min-[320px]:w-[150px] min-[320px]:h-[210px] min-[400px]:w-[185px]  sm:w-[200px] sm:h-[200px]  bg-white shadow-lg rounded-xl overflow-hidden  relative">
              <img
                className="w-full object-cover object-center h-full"
                src="https://i.pinimg.com/474x/dc/22/d5/dc22d5cbbb686bf567e8fd47a5984840.jpg"
                alt="Card"
              />
            </div>
            <div className="min-[320px]:w-[150px] min-[320px]:h-[210px] min-[400px]:w-[185px]  sm:w-[200px] sm:h-[200px]  bg-white shadow-lg rounded-xl overflow-hidden  relative">
              <img
                className="w-full object-cover object-center h-full"
                src="https://i.pinimg.com/474x/dc/22/d5/dc22d5cbbb686bf567e8fd47a5984840.jpg"
                alt="Card"
              />
            </div>
            <div className="min-[320px]:w-[150px] min-[320px]:h-[210px] min-[400px]:w-[185px]  sm:w-[200px] sm:h-[200px]  bg-white shadow-lg rounded-xl overflow-hidden relative">
              <img
                className="w-full object-cover object-center h-full"
                src="https://i.pinimg.com/474x/dc/22/d5/dc22d5cbbb686bf567e8fd47a5984840.jpg"
                alt="Card"
              />
            </div>
            <div className="min-[320px]:w-[150px] min-[320px]:h-[210px] min-[400px]:w-[185px]  sm:w-[200px] sm:h-[200px]  bg-white shadow-lg rounded-xl overflow-hidden relative">
              <img
                className="w-full object-cover object-center h-full"
                src="https://i.pinimg.com/474x/dc/22/d5/dc22d5cbbb686bf567e8fd47a5984840.jpg"
                alt="Card"
              />
            </div>
            <div className="min-[320px]:w-[150px] min-[320px]:h-[210px] min-[400px]:w-[185px]  sm:w-[200px] sm:h-[200px]  bg-white shadow-lg rounded-xl overflow-hidden  relative">
              <img
                className="w-full object-cover object-center h-full"
                src="https://i.pinimg.com/474x/dc/22/d5/dc22d5cbbb686bf567e8fd47a5984840.jpg"
                alt="Card"
              />
            </div>
          </div>
        </div>
        <div className=" mt-7 ">
          <h1 className="text-3xl font-bold text-white mb-5 ">Videos</h1>
          <div className="flex min-[320px]:flex-wrap lg:flex-nowrap  min-[320px]:justify-center md:justify-between items-center md:gap-1 lg:gap-5 w-full overflow-hidden">
            <InstagramEmbed
              url="https://www.instagram.com/p/Ct8_StbpvGY/?utm_source=ig_embed&amp;utm_campaign=embed_video_watch_again"
              className=" min-[320px]:w-[320px] sm:w-[370px] min-[320px]:mb-5 lg:mb-0 md:w-[340px] lg:w-[370px] xl:w-[378px] h-[500px] xl:bg-red-600"
            />
            <InstagramEmbed
              url="https://www.instagram.com/p/CnpHovFrSFQ/?utm_source=ig_embed&amp;utm_campaign=embed_video_watch_again"
              className="min-[320px]:w-[320px] sm:w-[370px] min-[320px]:mb-5 lg:mb-0 md:w-[340px] lg:w-[370px]   xl:w-[378px] h-[500px]"
            />
            <InstagramEmbed
              url="https://www.instagram.com/reel/CxxesPILl3Y/?utm_source=ig_embed&amp;utm_campaign=embed_video_watch_again"
              className="min-[320px]:w-[320px] sm:w-[370px] min-[320px]:mb-5 lg:mb-0 md:w-[340px] lg:w-[370px]   xl:w-[378px] h-[500px]"
            />
            {/* <InstagramEmbed url="https://www.instagram.com/p/Ct8_StbpvGY/?utm_source=ig_embed&amp;utm_campaign=embed_video_watch_again" width={328} height={600}/> */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
