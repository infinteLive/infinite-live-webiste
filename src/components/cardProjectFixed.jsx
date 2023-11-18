import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFixedProjectCategory,
  fetchFixedProject,
  fetchTotalPage,
} from "../stores/actionCreator";

export default function CardProjectFixed() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("");
  const { dataFixedProject } = useSelector((state) => state.dataFixedProject);
  const { dataFixedProjectCategory } = useSelector(
    (state) => state.dataFixedProjectCategory
  );
  const { totalPage } = useSelector((state) => state.totalPage);

  useEffect(() => {
    dispatch(fetchFixedProject());
    dispatch(fetchFixedProjectCategory());
    dispatch(fetchTotalPage("fixedProject"));
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlerSelectedCategory = (category) => {
    setSelectedCategory(category);
  };

  const handlerShowALL = () => {
    setSelectedCategory(null);
  };

  const handlePaginationRentProject = (data) => {
    let currentPage = data.selected + 1;
    dispatch(fetchFixedProject(currentPage));
  };
  return (
    <div className="background">
      <div className="container xl:w-[85%]">
        <div className="text-center pt-20">
          <h1 className="text-red-800 italic text-4xl font-bold">
            Our Projects
          </h1>
        </div>
        <div className="flex justify-center items-center mt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 min-[320px]:p-5 sm:p-0">
            <button
              onClick={handlerShowALL}
              className="bg-zinc-200 hover:bg-orange-500  text-black hover:text-white min-[320px]:text-sm sm:text-base   font-bold py-1 px-16 rounded"
            >
              ALL
            </button>
            {dataFixedProjectCategory.length > 0 ? (
              dataFixedProjectCategory.map((item) => {
                return (
                  <button
                    key={item.id}
                    onClick={() => handlerSelectedCategory(item.name)}
                    className="bg-zinc-200 hover:bg-orange-500  text-black hover:text-white  min-[320px]:px-3 font-bold py-1 sm:px-8 min-[320px]:text-sm sm:text-base  rounded"
                  >
                    {item?.name}
                  </button>
                );
              })
            ) : (
              <p className="my-16 text-2xl text-white text-center font-semibold">
                Category tidak ada
              </p>
            )}
          </div>
        </div>
        <div className="min-[320px]:mt-2 sm:mt-8 "></div>
        <div className="flex items-center flex-col  ">
          <h1 className="text-white text-2xl font-bold mb-4 text-start w-full min-[320px]:ps-5 md:ps-0 uppercase">
            {selectedCategory ? selectedCategory : "ALL PROJECT"}
          </h1>

          <div className="grid xl:grid-cols-4 md:grid-cols-3 min-[320px]:grid-cols-2 gap-5 justify-between w-full">
            {dataFixedProject.length > 0 ? (
              dataFixedProject
                .filter((product) => {
                  if (selectedCategory) {
                    return (
                      product?.CategoryProjectFixed?.name === selectedCategory
                    );
                  }
                  return true; //show all products
                })
                .map((item) => {
                  return (
                    <div
                      key={item.id}
                      onClick={() =>
                        navigate(`/detailProject-fixed/${item.id}`)
                      }
                      className="lg:w-[280px] xl:w-[260px] lg:h-[450px] md:w-[240px] md:h-[380px] sm:w-[220px] sm:h-[340px] min-[320px]:mb-5 min-[400px]:w-[180px] min-[320px]:w-[160px] lg:mb-0  rounded-xl p-1 shadow-lg mx-auto  "
                    >
                      <div className="mx-auto max-w-xs lg:h-[300px] md:h-[255px] sm:h-[220px] min-[400px]:h-[200px] min-[320px]:h-[180px] overflow-hidden">
                        <img
                          className="mx-auto object-cover object-center min-[320px]:mt-[-30px] md:mt-[-60px] lg:mt-[-50px]"
                          src={item?.mainImg}
                          alt={item?.name}
                        />
                      </div>
                      <div className="mt-2">
                        <h2 className="min-[320px]:text-lg sm:text-2xl line-clamp-1 font-medium text-center md:mb-0 lg:mb-2 text-white md:mt-3 lg:mt-7">
                          {item?.title}
                        </h2>
                        <h4
                          className="min-[320px]:text-base text-center sm:text-[16px] font-light text-white"
                          style={{ maxWidth: "300px" }}
                        >
                          {item?.descTitle}
                        </h4>
                      </div>
                    </div>
                  );
                })
            ) : (
              <p className="my-16 text-2xl text-white text-center font-semibold">
                Product Tidak ada.
              </p>
            )}
          </div>
          <div className="flex min-[320px]:justify-end sm:justify-center items-center mt-5">
            <ReactPaginate
              className=" bg-white  text-black font-medium  inline-flex -space-x-px rounded-md shadow-sm  justify-center items-center"
              previousLabel="< previous"
              nextLabel="next >"
              breakLabel="..."
              pageCount={totalPage}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePaginationRentProject}
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
      <Footer />
    </div>
  );
}
