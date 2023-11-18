import { useEffect, useRef } from "react";
import Footer from "../components/Footer";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailBlog, fetchBlogRandom } from "../stores/actionCreator";
import { data } from "autoprefixer";

export default function DetailNewsBlog() {
  const galleryRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispath = useDispatch();

  const { dataBlogDetail } = useSelector((state) => state.dataBlogDetail);
  const { dataBlogRandom } = useSelector((state) => state.dataBlogRandom);

  useEffect(() => {
    dispath(fetchDetailBlog(id));
  }, [id]);

  useEffect(() => {
    dispath(fetchBlogRandom());
  }, []);

  const handleScrollLeft = () => {
    const maxScroll =
      galleryRef.current.scrollWidth - galleryRef.current.clientWidth;
    const newScrollPosition = (scrollPosition - 150 + maxScroll) % maxScroll;
    setScrollPosition(newScrollPosition);
    galleryRef.current.scrollLeft = newScrollPosition;
  };

  const handleScrollRight = () => {
    const maxScroll =
      galleryRef.current.scrollWidth - galleryRef.current.clientWidth;
    const newScrollPosition = (scrollPosition + 150) % maxScroll;
    setScrollPosition(newScrollPosition);
    galleryRef.current.scrollLeft = newScrollPosition;
  };

  const handlerBlogRandom = (id) => {
    navigate(`/detail-news/${id}`);
    window.location.reload();
  };

  return (
    <div className="background">
      <div className="flex justify-between ">
        <div className="container mx-auto min-[320px]:mt-28 md:mt-32 relative  min-[320px]:w-[90%] sm:w-[70%] md:w-[90%]  lg:w-[75%] flex justify-center items-start gap-8  min-[320px]:flex-col md:flex-row">
          {Object.keys(dataBlogDetail).length > 0 ? (
            <div className="md:w-[75%] lg:w-[60%] ">
              <img
                src={dataBlogDetail?.image}
                alt="Gambar Besar"
                className="w-full min-[320px]:h-[230px] object-cover object-center sm:h-[290px] md:h-[270px] lg:h-[345px] mb-2 rounded-lg"
              />

              {/* Kontainer Gambar Kecil dengan Efek Scroll */}
              <div className="relative w-[100%] overflow-hidden">
                <div
                  className="flex overflow-x-auto snap-none "
                  ref={galleryRef}
                  style={{
                    scrollLeft: scrollPosition,
                    scrollBehavior: "smooth",
                  }}
                >
                  {dataBlogDetail?.urls?.length > 0 ? (
                    dataBlogDetail?.urls.map((item, index) => {
                      return (
                        <img
                          key={index}
                          src={item}
                          alt="Gambar Kecil 1"
                          className="min-[320px]:w-[120px]  lg:w-[150px] h-auto mr-2"
                        />
                      );
                    })
                  ) : (
                    <p>Gambar tidak ada</p>
                  )}
                  {/* Galeri Gambar Kecil di Bawah */}
                </div>

                {/* Tombol Scroll Kustom - Kiri */}
                <BiChevronLeft
                  size={30}
                  className="text-white font-bold absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer z-10"
                  onClick={handleScrollLeft}
                />

                {/* Tombol Scroll Kustom - Kanan */}
                <BiChevronRight
                  size={30}
                  className="z-10 text-white font-bold absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer"
                  onClick={handleScrollRight}
                />
              </div>

              <div className=" mt-5">
                <h1 className="sm:text-xl md:text-2xl text-white font-semibold">
                  {dataBlogDetail?.name}
                </h1>
                <p className="text-white mt-3 min-[320px]:text-xs sm:text-sm md:text-base">
                  {dataBlogDetail?.desc}
                </p>
              </div>
            </div>
          ) : (
            <p className="my-10 text-3xl text-white text-center font-semibold">
              Blog tidak ada.
            </p>
          )}

          <div className="min-[320px]:hidden md:flex md:w-[50%] lg:w-[40%]  flex-col gap-8">
            {dataBlogRandom?.length > 0 ? (
              dataBlogRandom.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="cursor-pointer"
                    onClick={() => handlerBlogRandom(item.id)}
                  >
                    <div className=" flex justify-between items-center sm:flex-row min-[320px]:flex-col md:h-[130px] lg:h-[120px] xl:h-[125px]">
                      <div className="sm:w-[50%] overflow-hidden w-full h-full  grid grid-cols-1 gap-4">
                        <img
                          src={item?.image}
                          alt="Gambar Kecil 1"
                          className="object-cover object-center w-full h-full min-[320px]:mr-0 sm:mr-2"
                        />
                      </div>
                      <div className="sm:w-[50%] ps-3 text-white ">
                        <h2 className="sm:text-lg md:text-xl font-semibold line-clamp-2">
                          {item?.name}
                        </h2>
                        <p className="line-clamp-4 md:text-xs lg:text-sm ">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Odio ut corporis quidem impedit pariatur
                          praesentium excepturi ratione aspernatur adipisci at!
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>Article tidak ada</p>
            )}
          </div>

          <div className="min-[320px]:flex md:hidden md:w-[50%] w-full  flex-col gap-8">
            <div className=" grid grid-cols-2 p-3 gap-8  ">
              {dataBlogRandom.length > 0 ? (
                dataBlogRandom.map((item) => {
                  return (
                    <div
                      key={item.id}
                      onClick={() => handlerBlogRandom(item.id)}
                      className=" overflow-hidden  flex flex-col gap-2 cursor-pointer"
                    >
                      <img
                        src={item?.image}
                        alt={item?.name}
                        className="object-cover object-center w-full h-auto min-[320px]:mr-0 sm:mr-2"
                      />
                      <div className="text-white">
                        <h2 className="text-lg line-clamp-1 font-semibold">
                          {item?.name}
                        </h2>
                        <p className="line-clamp-4 text-sm ">{item?.desc}</p>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p>Article tidak ada</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <Footer />
    </div>
  );
}
