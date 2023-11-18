import "../app.css";
import Footer from "../components/Footer";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBlog,
  fetchToolsArtistRiderSearch,
  fetchToolsArtistRiders,
  fetchToolsVenueLayouts,
  fetchToolsVenueLayoutsSearch,
} from "../stores/actionCreator";
// import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function NewsBlog() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { dataBlog } = useSelector((state) => state.dataBlog);

  const { dataToolsVenueLayouts } = useSelector(
    (state) => state.dataToolsVenueLayouts
  );
  const { dataToolsArtistRiders } = useSelector(
    (state) => state.dataToolsArtistRiders
  );

  const { dataVenueLayoutsSearch } = useSelector(
    (state) => state.dataVenueLayoutsSearch
  );
  const { dataArtisRiderSearch } = useSelector(
    (state) => state.dataArtisRiderSearch
  );

  const [totalPageVenueLayouts, setTotalPageVenueLayouts] = useState([]);
  const [totalPageArtistReaders, setTotalPageArtistReaders] = useState([]);
  const [totalPageBlog, setTotalPageBlog] = useState([]);

  const [datasVenueLayouts, setDatasVenueLayouts] = useState(
    dataToolsVenueLayouts
  );
  const [datasArtisRider, setDatasArtisRider] = useState(dataToolsArtistRiders);

  const [searchInputVenueLayouts, setSearchInputVenueLayouts] = useState("");
  const [searchInputArtisRider, setSearchInputArtisRider] = useState("");

  const fetchTotalPageVenueLayouts = async () => {
    const response = await fetch(
      "https://90b9399s-3000.asse.devtunnels.ms/Toolss?category_id=1"
    );
    const data = await response.json();
    setTotalPageVenueLayouts(data.totalPages);
  };

  const fetchTotalPageArtistRider = async () => {
    const response = await fetch(
      "https://90b9399s-3000.asse.devtunnels.ms/Toolss?category_id=2"
    );
    const data = await response.json();
    setTotalPageArtistReaders(data.totalPages);
  };

  const fetchTotalPageBlog = async () => {
    const response = await fetch(
      "https://90b9399s-3000.asse.devtunnels.ms/blog?page=2&perPage=5"
    );
    const data = await response.json();
    setTotalPageBlog(data.totalPages);
  };

  useEffect(() => {
    dispatch(fetchBlog());
    dispatch(fetchToolsVenueLayouts());
    dispatch(fetchToolsArtistRiders());
    fetchTotalPageVenueLayouts();
    fetchTotalPageArtistRider();
    fetchTotalPageBlog();
  }, []);

  useEffect(() => {
    if (dataToolsVenueLayouts) {
      setDatasVenueLayouts(dataToolsVenueLayouts);
    }
  }, [dataToolsVenueLayouts]);

  useEffect(() => {
    if (dataToolsArtistRiders) {
      setDatasArtisRider(dataToolsArtistRiders);
    }
  }, [dataToolsArtistRiders]);

  useEffect(() => {
    dispatch(fetchToolsVenueLayoutsSearch(searchInputVenueLayouts));
  }, [searchInputVenueLayouts]);

  useEffect(() => {
    dispatch(fetchToolsArtistRiderSearch(searchInputArtisRider));
  }, [searchInputArtisRider]);

  const searchVenueLayouts = (e) => {
    setSearchInputVenueLayouts(e.target.value);
    setDatasVenueLayouts(dataVenueLayoutsSearch);
  };
  const searchArtisRider = (e) => {
    setSearchInputArtisRider(e.target.value);
    setDatasArtisRider(dataArtisRiderSearch);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePaginationVenueLayouts = (data) => {
    let currentPage = data.selected + 1;
    dispatch(fetchToolsVenueLayouts(currentPage));
  };

  const handlePaginationArtistRider = (data) => {
    let currentPage = data.selected + 1;
    dispatch(fetchToolsArtistRiders(currentPage));
  };

  const handlePaginationBlog = (data) => {
    let currentPage = data.selected + 1;
    dispatch(fetchBlog(currentPage));
  };

  return (
    <div className="background">
      <section className="w-full h-screen overflow-hidden bg-[url(https://ik.imagekit.io/zhbznxloz/concert-show-stage-entertainment%201.png?updatedAt=1694679652713)] bg-cover bg-center bg-no-repeat relative">
        <div className=" h-screen overflow-hidden">
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h1 className="text-white min-[320px]:text-2xl  min-[414px]:text-3xl  sm:text-5xl font-bold min-[320px]:mb-2 sm:mb-4">
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
      <div className="container xl:w-[85%]">
        <div className="flex min-[320px]:flex-col md:flex-row justify-center lg:justify-between lg:items-start mt-10 gap-5">
          <div className="min-[320px]:w-[90%]  min-[320px]:mx-auto sm:mx-0 sm:w-full md:w-[48%] xl:w-[50%] ">
            <h1 className="text-white  text-3xl font-bold mb-5"> BLOGS</h1>
            <div className="flex  justify-center flex-col items-start gap-5 ">
              {/* Kartu Besar */}
              {dataBlog?.length > 0 ? (
                dataBlog.map((item) => {
                  return (
                    <div
                      key={item.id}
                      onClick={() => navigate(`/detail-news/${item.id}`)}
                      className="cursor-pointer w-full h-auto bg-zinc-600 bg-opacity-30 shadow-lg rounded-lg overflow-hidden p-5 "
                    >
                      <div className="flex xl:flex-row  min-[320px]:flex-col">
                        <div className="xl:w-[60%] lg:w-full ">
                          <img
                            src={item.image}
                            alt=""
                            className="object-cover h-full w-full"
                          />
                        </div>
                        <div className="xl:w-[50%] lg:w-full xl:p-4 md:w-full md:p-5">
                          <h2 className="text-2xl font-semibold text-white line-clamp-3">
                            {item.name}
                          </h2>
                          <p className="mt-2 text-white line-clamp-6">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="my-8 text-3xl text-white text-center font-semibold">
                  Blog tidak ada.
                </p>
              )}
              <div className="flex min-[320px]:justify-end sm:justify-center items-center mt-5">
                <ReactPaginate
                  className=" bg-white  text-black font-medium  inline-flex -space-x-px rounded-md shadow-sm  justify-center items-center"
                  previousLabel="< previous"
                  nextLabel="next >"
                  breakLabel="..."
                  pageCount={totalPageBlog}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={3}
                  onPageChange={handlePaginationBlog}
                  pageClassName="border border-black"
                  pageLinkClassName=" relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-0 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                  previousLinkClassName=" pe-2 border border-black relative inline-flex items-center rounded-l-md px-2 py-[6px] text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  nextLinkClassName="ps-2 border border-black  relative inline-flex items-center rounded-r-md px-2 py-[6px] text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  breakClassName="border border-black"
                  breakLinkClassName="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                  activeLinkClassName="hover:bg-red-500 relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white outline-0 b-0 m-0"
                />
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
                      Vanue Layouts
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
                          onChange={searchVenueLayouts}
                        />
                      </div>
                    </div>
                  </div>
                  <ol className="mt-0 list-decimal text-white p-4 flex flex-col gap-2">
                    {datasVenueLayouts.length > 0 ? (
                      datasVenueLayouts.map((item) => {
                        return (
                          <li key={item.id}>
                            <a
                              href={item.link}
                              className=" text-white hover:border-b-2 border-b-2 border-transparent hover:border-white cursor-pointer transition"
                              target="blank"
                            >
                              {item.name}
                            </a>
                          </li>
                        );
                      })
                    ) : (
                      <p>Venus tidak ada.</p>
                    )}
                  </ol>
                  <div className="flex min-[320px]:justify-end sm:justify-center items-center mt-5">
                    <ReactPaginate
                      className=" bg-white  text-black font-medium  inline-flex -space-x-px rounded-md shadow-sm  justify-center items-center"
                      previousLabel="< previous"
                      nextLabel="next >"
                      breakLabel="..."
                      pageCount={totalPageVenueLayouts}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={3}
                      onPageChange={handlePaginationVenueLayouts}
                      pageClassName="border border-black"
                      pageLinkClassName=" relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-0 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                      previousLinkClassName=" pe-2 border border-black relative inline-flex items-center rounded-l-md px-2 py-[6px] text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                      nextLinkClassName="ps-2 border border-black  relative inline-flex items-center rounded-r-md px-2 py-[6px] text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                      breakClassName="border border-black"
                      breakLinkClassName="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                      activeLinkClassName="hover:bg-red-500 relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white outline-0 b-0 m-0"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full h-auto bg-zinc-600 bg-opacity-30 shadow-lg rounded-lg overflow-hidden">
                <div className="p-5">
                  <div className="flex justify-between items-center mt-2 ">
                    <h2 className="min-[320px]:text-lg sm:text-xl font-semibold text-white">
                      Artist Rider
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
                          onChange={searchArtisRider}
                        />
                      </div>
                    </div>
                  </div>
                  <ol className="mt-0 list-decimal text-white p-4 flex flex-col gap-2">
                    {datasArtisRider.length > 0 ? (
                      datasArtisRider.map((items) => {
                        return (
                          <li key={items.id}>
                            <a
                              href={items.link}
                              className=" text-white hover:border-b-2 border-b-2 border-transparent hover:border-white cursor-pointer transition"
                              target="blank"
                            >
                              {items.name}
                            </a>
                          </li>
                        );
                      })
                    ) : (
                      <p>Artis tidak ada</p>
                    )}
                  </ol>
                  <div className="flex min-[320px]:justify-end sm:justify-center items-center mt-5">
                    <ReactPaginate
                      className=" bg-white  text-black font-medium  inline-flex -space-x-px rounded-md shadow-sm  justify-center items-center"
                      previousLabel="< previous"
                      nextLabel="next >"
                      breakLabel="..."
                      pageCount={totalPageArtistReaders}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={3}
                      onPageChange={handlePaginationArtistRider}
                      pageClassName="border border-black"
                      pageLinkClassName=" relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-0 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                      previousLinkClassName=" pe-2 border border-black relative inline-flex items-center rounded-l-md px-2 py-[6px] text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                      nextLinkClassName="ps-2 border border-black  relative inline-flex items-center rounded-r-md px-2 py-[6px] text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                      breakClassName="border border-black"
                      breakLinkClassName="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                      activeLinkClassName="hover:bg-red-500 relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white outline-0 b-0 m-0"
                    />
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
