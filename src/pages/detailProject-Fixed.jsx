import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { InstagramEmbed } from "react-social-media-embed";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailFixedProject } from "../stores/actionCreator";

export default function DetailProjectFixed() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const [embedUrl, setEmbedUrl] = useState("");
  const { dataFixedDetailProject } = useSelector(
    (state) => state.dataFixedDetailProject
  );

  useEffect(() => {
    dispatch(fetchDetailFixedProject(id));
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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

        {Object.keys(dataFixedDetailProject).length > 0 ? (
          <>
            <h1 className="text-red-800 text-3xl font-bold mt-5 ">
              {dataFixedDetailProject?.title}
            </h1>
            <h2 className="text-white font-semibold mt-2">
              {dataFixedDetailProject?.descTitle}
            </h2>
            <div className=" mt-7">
              <h1 className="text-white text-3xl font-bold mb-5">Photos</h1>
              <div className="grid min-[320px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 justify-between items-center mb-4">
                {dataFixedDetailProject?.imgProject?.length > 0 ? (
                  dataFixedDetailProject?.imgProject.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="min-[320px]:w-[150px] min-[320px]:h-[210px] min-[400px]:w-[185px]  sm:w-[200px] sm:h-[200px]  bg-white shadow-lg rounded-xl overflow-hidden  relative"
                      >
                        <img
                          className="w-full object-cover object-center h-full"
                          src={item}
                          alt={item}
                        />
                      </div>
                    );
                  })
                ) : (
                  <p className="my-16 text-2xl text-white text-center font-semibold">
                    Photos tidak ada.
                  </p>
                )}
              </div>
            </div>
            <div className=" mt-7 ">
              <h1 className="text-3xl font-bold text-white mb-5 ">Videos</h1>
              <div className="grid min-[320px]:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative gap-5 w-full overflow-x-hidden  mx-auto">
                {dataFixedDetailProject?.embedVideo?.length > 0 ? (
                  dataFixedDetailProject?.embedVideo.map((item, index) => {
                    return (
                      <InstagramEmbed
                        key={index}
                        url={`https://www.instagram.com/p/${item}/?utm_source=ig_embed&amp;utm_campaign=embed_video_watch_again`}
                        className="md:h-[600px]"
                      />
                    );
                  })
                ) : (
                  <p className="my-16 text-2xl text-white text-center font-semibold">
                    Video tidak ada.
                  </p>
                )}
              </div>
            </div>
          </>
        ) : (
          <p className="my-16 text-3xl text-white text-center font-semibold">
            Data tidak ada.
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
}
