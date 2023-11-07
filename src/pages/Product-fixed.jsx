/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */
import { FaSearch } from "react-icons/fa";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryRent, fetchRent } from "../stores/actionCreator";
import { useNavigate } from "react-router-dom";
export default function ProductFixed() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  const categories = ["SOUND", "LIGHTING", "MULTIMEDIA"];
  const subCategories = {
    SOUND: ["FBT", "HK AUDIO"],
    LIGHTING: ["INFINTE LIGHT"],
    MULTIMEDIA: ["YSS TECH"],
  };

  const products = {
    FBT: [
      {
        name: "Product A11",
        image:
          "https://ngi-infinite.com/wp-content/uploads/2022/06/Soundcraft-Signature-16-265x340.jpg",
      },
      {
        name: "Product A12",
        image:
          "https://ngi-infinite.com/wp-content/uploads/2022/06/Soundcraft-Signature-16-265x340.jpg",
      },
    ],
    "HK AUDIO": [
      {
        name: "Product A21",
        image:
          "https://ngi-infinite.com/wp-content/uploads/2022/06/Soundcraft-Signature-16-265x340.jpg",
      },
      {
        name: "Product A22",
        image:
          "https://ngi-infinite.com/wp-content/uploads/2022/06/Soundcraft-Signature-16-265x340.jpg",
      },
    ],
    "INFINTE LIGHT": [
      {
        name: "Product B11",
        image:
          "https://ngi-infinite.com/wp-content/uploads/2022/06/Soundcraft-Signature-16-265x340.jpg",
      },
      {
        name: "Product B12",
        image:
          "https://ngi-infinite.com/wp-content/uploads/2022/06/Soundcraft-Signature-16-265x340.jpg",
      },
    ],
    "YSS TECH": [
      { name: "Product B21", image: "url_to_image_B21" },
      { name: "Product B22", image: "url_to_image_B22" },
    ],
    "SubCategory C1": [
      { name: "Product C11", image: "url_to_image_C11" },
      { name: "Product C12", image: "url_to_image_C12" },
    ],
    "SubCategory C2": [
      { name: "Product C21", image: "url_to_image_C21" },
      { name: "Product C22", image: "url_to_image_C22" },
    ],
  };

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
  // console.log(dataCategory);
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
      <div className="min-[320px]:px-5 container">
        <h1 className="text-orange-500 font-bold text-2xl">
          Systems Integrator
        </h1>
        <h2 className="text-white font-bold text-lg  min-[320px]:mt-2 sm:mt-5">
          Kami perusahaan yang berspesialisasi dalam menyatukan subsistem
          komponen Audio Visual menjadi satu kesatuan agar dapat menyampaikan
          materi konten dengan maksimal.
        </h2>
        <div className="mt-20 min-[320px]:gap-3 flex justify-between mb-5 ">
          <h1 className="text-white font-bold min-[320px]:text-2xl sm:text-3xl">
            Category
          </h1>
          <div className="relative min-[320px]:w-[50%] sm:w-[40%] md:w-[23%]">
            <input
              type="text"
              className="w-full  pl-8 pr-4 py-2 border border-gray-300 rounded-full text-white bg-neutral-600 placeholder-white::placeholder mr-20"
              placeholder="Cari disini..."
            />
            <FaSearch className="absolute top-0 mt-3 left-3 text-gray-300" />
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-white">
          Product Selection
        </h2>
        <div className="min-[320px]:flex-wrap sm:flex-nowrap min-[320px]:gap-3 sm:gap-5 min-[320px]:justify-center items-center flex">
          <div
            onClick={handleAllClick}
            className="min-[320px]:w-[60px] min-[320px]:h-[40px]  sm:w-[200px] sm:h-[50px] md:w-[300px] md:h-[100px]  bg-white shadow-lg rounded-xl overflow-hidden relative"
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
          {categories.map((category) => {
            console.log(category);
            return (
              <div
                key={category}
                className="min-[320px]:w-[100px] min-[320px]:h-[40px] sm:w-[200px] sm:h-[50px] md:w-[300px] md:h-[100px] bg-white shadow-lg rounded-xl overflow-hidden  relative"
              >
                <h2 className="text-gray-900 font-bold min-[320px]:text-sm sm:text-xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] break-words ">
                  {category}
                </h2>
                <img
                  onClick={() => handleCategoryClick(category)}
                  className="w-full object-cover object-center h-full"
                  src="https://i.pinimg.com/474x/dc/22/d5/dc22d5cbbb686bf567e8fd47a5984840.jpg"
                  alt="Card"
                />
                {category}
              </div>
            );
          })}
        </div>
        {selectedCategory && subCategories[selectedCategory] && (
          <div className="flex justify-center items-center min-[320px]:mt-5 sm:mt-8">
            <div className="min-[320px]:flex-wrap sm:flex-nowrap sm:justify-center min-[320px]:justify-center items-center sm:flex gap-2  w-[90%] min-[320px]:grid min-[320px]:grid-cols-2">
              {subCategories[selectedCategory].map((subCategory) => (
                <button
                  key={subCategory}
                  className={`bg-zinc-200 hover:bg-orange-500  min-[320px]:text-xs sm:text-xl sm:text-black hover:text-white  font-bold min-[320px]:px-2 py-2 lg:px-6 px-2 rounded ${
                    selectedSubCategory === subCategory
                      ? "bg-zinc-200 text-black"
                      : "bg-orange-500 text-black"
                  }`}
                  onClick={() => handleSubCategoryClick(subCategory)}
                >
                  {subCategory}
                </button>
              ))}
            </div>
          </div>
        )}
        {Object.keys(products).length > 0 && (
          <div>
            <div className="mt-5">
              {selectedSubCategory ? (
                <h1 className="text-white text-3xl font-bold ml-20 ">
                  {selectedSubCategory}
                </h1>
              ) : (
                <h1 className="text-white text-3xl font-bold ">Products</h1>
              )}
            </div>
            <div className="grid md:grid-cols-3 mt-5 lg:grid-cols-4 min-[320px]:grid-cols-2  min-[320px]:gap-0 sm:gap-7">
              {Object.keys(products)
                .filter((subCategory) =>
                  selectedSubCategory
                    ? subCategory === selectedSubCategory
                    : true
                )
                .map((subCategory) =>
                  products[subCategory].map((product) => (
                    <div
                      key={product.id}
                      className="text-center flex justify-center items-center flex-col"
                    >
                      <div className="min-[320px]:w-[160px] min-[320px]:h-[180px] sm:w-[240px] sm:h-[220px] xl:w-[250px] rounded-xl  shadow-lg  bg-zinc-300 border-2 border-black">
                        <img
                          className="w-full h-full object-cover object-center p-5"
                          src={product.image}
                          alt="Kitten"
                        />
                      </div>
                      <div className="mb-5">
                        <h2 className="text-xl font-bold mb-2 text-white mt-3">
                          {product.name}
                        </h2>
                        <button
                          onClick={() => navigate("/detailFixed")}
                          className="bg-zinc-300 hover:bg-zinc-400 text-black font-bold py-1 px-8 rounded-lg"
                        >
                          {" "}
                          Detail
                        </button>
                      </div>
                    </div>
                  ))
                )}
            </div>
          </div>
        )}
        );
      </div>
      <Footer />
    </div>
  );
}

// import React, { useState } from 'react';

// const ProductRent = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [selectedSubCategory, setSelectedSubCategory] = useState(null);

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//     setSelectedSubCategory(null); // Reset selected subcategory when a new category is clicked
//   };

//   const handleSubCategoryClick = (subcategory) => {
//     setSelectedSubCategory(subcategory);
//   };

//   const renderProducts = () => {
//     if (selectedSubCategory) {
//       // Render products based on the selected subcategory
//       return <div>Products for {selectedSubCategory}</div>;
//     } else if (selectedCategory) {
//       // Render subcategories for the selected category
//       if (selectedCategory === 'SOUND') {
//         return (
//           <div>
//             <button onClick={() => handleSubCategoryClick('Subcategory1')}>Subcategory1</button>
//             <button onClick={() => handleSubCategoryClick('Subcategory2')}>Subcategory2</button>
//           </div>
//         );
//       }
//     }

//     return null; // If no category or subcategory is selected
//   };

//   return (
//     <div className='justify-center items-center flex mt-10'>
//       <div onClick={() => handleCategoryClick('SOUND')} className="w-[200px] h-[150px] mx-auto bg-white shadow-lg rounded-xl overflow-hidden my-4 relative">
//         <h2 className="text-white font-bold text-xl mb-2 absolute top-28 left-4">Sound</h2>
//         <img className="w-full object-cover object-center h-full" src="https://i.pinimg.com/474x/9a/5a/09/9a5a092e2756920e1e07ce65194dbc24.jpg" alt="Card" />
//       </div>
//       {renderProducts()}
//     </div>
//   );
// };

// export default ProductRent;
