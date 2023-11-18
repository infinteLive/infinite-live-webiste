import { FaSearch } from "react-icons/fa";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFixed,
  fetchCategoryFixed,
  fetchBrandFixed,
  fetchFixedSearch,
  fetchTotalPage,
} from "../stores/actionCreator";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
export default function ProductRent() {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const { dataFixed } = useSelector((state) => {
    return state.dataFixed;
  });

  const { totalPage } = useSelector((state) => state.totalPage);

  const [datasFixed, setDatasFixed] = useState(dataFixed);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [pageNotFound, setPageNotFound] = useState(false);
  const [searchFixed, setSearchFixed] = useState("");

  useEffect(() => {
    dispatch(fetchFixed());
    dispatch(fetchCategoryFixed());
    dispatch(fetchBrandFixed());
    dispatch(fetchTotalPage("fixeds"));
  }, []);

  useEffect(() => {
    if (dataFixed) {
      setDatasFixed(dataFixed);
    }
  }, [dataFixed]);

  useEffect(() => {
    dispatch(fetchFixedSearch(searchFixed));
  }, [searchFixed]);

  const { dataCategoryFixed } = useSelector((state) => {
    return state.dataCategoryFixed;
  });

  const { dataBrandFixed } = useSelector((state) => {
    return state.dataBrandFixed;
  });

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSubCategory(null);
  };

  const handleSubCategoryClick = (subCategory) => {
    setSelectedSubCategory(subCategory);
  };

  const handleAllClick = () => {
    setSelectedCategory(null);
    setSelectedSubCategory(null);
  };
  const { dataFixedSearch } = useSelector((state) => {
    return state.dataFixedSearch;
  });

  const searchProductRent = (e) => {
    setSearchFixed(e.target.value.toLowerCase()); // Ubah input pencarian menjadi huruf kecil
    setDatasFixed(dataFixedSearch);

    if (dataFixedSearch.length === 0) {
      setPageNotFound(true);
    }
  };
  const handlePageClick = (data) => {
    let currentPage = data.selected + 1;
    dispatch(fetchFixed(currentPage));
  };

  return (
    <div className="background">
      <section className="w-full h-[450px] overflow-hidden bg-[url(https://ik.imagekit.io/zhbznxloz/wallpaperflare%209.png?updatedAt=1694795196606)] bg-cover bg-center bg-no-repeat relative">
        <div className=" mt-32 p-8 md:p-12 lg:px-16 lg:py-24 h-full">
          <div className="justify-center items-center text-center flex flex-col">
            <h1 className="text-white text-5xl font-bold mb-4">
              System Integrator
            </h1>
          </div>
        </div>
      </section>
      <div className="min-[320px]:px-5  container">
        <h1 className="text-orange-500 font-bold text-2xl">
          Systems Integrator
        </h1>
        <h2 className="text-white font-bold text-lg  min-[320px]:mt-2 sm:mt-5">
          Kami perusahaan yang berspesialisasi dalam menyatukan subsistem
          komponen Audio Visual menjadi satu kesatuan agar dapat menyampaikan
          materi konten dengan maksimal.
        </h2>
        <div className="mt-20 min-[320px]:gap-3 flex justify-between mb-5">
          <h1 className="text-white font-bold min-[320px]:text-2xl sm:text-3xl ">
            Category
          </h1>
          <div className="relative min-[320px]:w-[50%] sm:w-[40%] md:w-[23%]">
            <input
              onChange={searchProductRent}
              type="text"
              className="w-full  pl-8 pr-4 py-2 border border-gray-300 rounded-full text-white bg-neutral-600 placeholder-white::placeholder mr-20"
              placeholder="Cari disini..."
            />
            <FaSearch className="absolute top-0 mt-3 left-3 text-gray-300" />
          </div>
        </div>
        {/* search end */}
        <div className="min-[320px]:flex-wrap sm:flex-nowrap min-[320px]:gap-3 sm:gap-5 min-[320px]:justify-center items-center flex ">
          <div
            onClick={handleAllClick}
            className="min-[320px]:w-[60px] min-[320px]:h-[40px]  sm:w-[200px] sm:h-[50px] md:w-[300px] md:h-[100px]  bg-white shadow-lg rounded-xl overflow-hidden  relative"
          >
            <h2 className="text-black font-bold min-[320px]:text-sm sm:text-xl mb-2 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              ALL
            </h2>
            <img
              className="w-full object-cover object-center h-full"
              src="https://i.pinimg.com/474x/dc/22/d5/dc22d5cbbb686bf567e8fd47a5984840.jpg"
              alt="Card"
            />
          </div>
          {dataCategoryFixed.map((category) => {
            // console.log("category", category.name);
            return (
              <div
                key={category.id}
                onClick={() => handleCategoryClick(category.name)}
                className="min-[320px]:w-[100px] min-[320px]:h-[40px] sm:w-[200px] sm:h-[50px] md:w-[300px] md:h-[100px] bg-white shadow-lg rounded-xl overflow-hidden  relative"
              >
                <h2 className="text-gray-900 font-bold min-[320px]:text-sm sm:text-xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] break-words ">
                  {category.name}
                </h2>
                <img
                  className="w-full object-cover object-center h-full "
                  src="https://i.pinimg.com/474x/dc/22/d5/dc22d5cbbb686bf567e8fd47a5984840.jpg"
                  alt="Card"
                />
                {/* {category.name} */}
              </div>
            );
          })}
        </div>
        {selectedCategory && (
          <div className="flex justify-center items-center min-[320px]:mt-5 sm:mt-8">
            <div className="min-[320px]:flex-wrap sm:flex-nowrap sm:justify-center min-[320px]:justify-center items-center sm:flex gap-2  w-[90%] min-[320px]:grid min-[320px]:grid-cols-2">
              {dataBrandFixed.map((subCategory) => {
                if (subCategory?.categoryFixed?.name == selectedCategory) {
                  console.log("test", subCategory.name);
                  return (
                    <button
                      key={subCategory.id}
                      className={`bg-zinc-200 hover:bg-orange-500  min-[320px]:text-xs sm:text-xl sm:text-black hover:text-white  font-bold min-[320px]:px-2 py-2 lg:px-6 px-2 rounded ${
                        selectedSubCategory === subCategory.name
                          ? "bg-zinc-200 text-black"
                          : "bg-orange-500 text-black"
                      }`}
                      onClick={() => handleSubCategoryClick(subCategory.name)}
                    >
                      {subCategory.name}
                    </button>
                  );
                }
              })}
            </div>
          </div>
        )}

        {datasFixed.length > 0 ? (
          <div>
            <div className="mt-5">
              {selectedSubCategory ? (
                <h1 className="text-white text-3xl font-bold ">
                  {selectedSubCategory}
                </h1>
              ) : (
                <h1 className="text-white text-3xl font-bold ">Products</h1>
              )}
            </div>

            <div className="grid md:grid-cols-3 mt-5 lg:grid-cols-4 min-[320px]:grid-cols-2  min-[320px]:gap-0 sm:gap-7 ">
              {datasFixed
                .filter((product) => {
                  if (selectedSubCategory) {
                    return (
                      product?.SubCategoryRent?.name === selectedSubCategory
                    );
                  }
                  return true;
                })
                .map((product) => {
                  return (
                    <div
                      key={product.id}
                      className="text-center flex justify-center items-center flex-col"
                    >
                      <div className="min-[320px]:w-[160px] min-[320px]:h-[180px] sm:w-[240px] sm:h-[220px] xl:w-[250px] rounded-xl  shadow-lg  bg-zinc-300 border-2 border-black">
                        <img
                          className="w-full h-full object-cover object-center p-5"
                          src={product.url}
                          alt="Kitten"
                        />
                      </div>
                      <div className="mb-5">
                        <h2 className="text-xl font-bold mb-2 text-white mt-3 line-clamp-1">
                          {product.name}
                        </h2>
                        <button
                          onClick={() =>
                            navigate(`/detail-fixed/${product.id}`)
                          }
                          className="bg-zinc-300 hover:bg-zinc-400 text-black font-bold py-1 px-8 rounded-lg"
                        >
                          {" "}
                          Detail
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        ) : (
          <h1 className="my-16 text-3xl text-white text-center font-semibold">
            {pageNotFound ? "Product Not Found" : "Loading..."}
          </h1>
        )}

        <div className="flex min-[320px]:justify-end sm:justify-center items-center mt-5">
          <ReactPaginate
            className=" bg-white  text-black font-medium  inline-flex -space-x-px rounded-md shadow-sm  justify-center items-center"
            previousLabel="< previous"
            nextLabel="next >"
            breakLabel="..."
            pageCount={totalPage}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
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
      <Footer />
    </div>
  );
}
