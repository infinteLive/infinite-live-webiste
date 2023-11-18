import {
  READ_RENT,
  READ_CATEGORY_RENT,
  READ_SUBCATEGORY_RENT,
  UPDATE_RENT,
  READ_BLOG,
  READ_FIXED,
  READ_TOOLS_ARTIST_RIDERS,
  READ_RENT_SEARCH,
  READ_BRAND_FIXED,
  READ_CATEGORY_FIXED,
  READ_FIXED_SEARCH,
  READ_TOOLS_VENUE_LAYOUTS,
  READ_TOOLS_VENUE_LAYOUTS_SEARCH,
  READ_TOOLS_ARTIST_RIDERS_SEARCH,
  READ_RENT_PROJECT,
  READ_RENT_PROJECT_CATEGORY,
  READ_RENT_DETAIL_PROJECT,
  READ_FIXED_PROJECT,
  READ_FIXED_PROJECT_CATEGORY,
  READ_FIXED_DETAIL_PROJECT,
  READ_TOTAL_PAGE,
  READ_BLOG_DETAIL,
  READ_BLOG_RANDOM,
} from "./actionTypes";

const BASE_URL = "https://90b9399s-3000.asse.devtunnels.ms";

// const BASE_URL = "https://90b9399s-3000.asse.devtunnels.ms"
export const actionGenerator = (type, payload) => {
  return {
    type,
    payload,
  };
};
export const fetchTotalPage = (path) => {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + `/${path}`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          // access_token: localStorage.getItem("access_token"),
        },
      });

      const responseJSON = await response.json();
      dispatch(actionGenerator(READ_TOTAL_PAGE, responseJSON.totalPages));
    } catch (error) {
      console.log(error.message, "<<<<<<<<<");
    }
  };
};

export const fetchRent = (currentPage = 1) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        BASE_URL + `/rents?page=${currentPage}&perPage=12`, {
          method: "get",
          headers: {
            "Content-Type": "application/json",
            // access_token: localStorage.getItem("access_token"),
          },
        }
      );

      console.log("current page", currentPage);
      const responseJSON = await response.json();
      dispatch(actionGenerator(READ_RENT, responseJSON.data));
    } catch (error) {
      console.log(error.message, "<<<<<<<<<");
    }
  };
};

export const fetchRentSearch = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + `/rents?searchTerm=${query}`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          // access_token: localStorage.getItem("access_token"),
        },
      });
      console.log("produk dicari", query);
      const responseJSON = await response.json();
      dispatch(actionGenerator(READ_RENT_SEARCH, responseJSON.data));
    } catch (error) {
      console.log(error.message, "<<<<<<<<<");
    }
  };
};

export const fetchCategoryRent = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + "/categoryRent", {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          // access_token: localStorage.getItem("access_token"),
        },
      });
      const responseJSON = await response.json();
      dispatch(actionGenerator(READ_CATEGORY_RENT, responseJSON));
    } catch (error) {
      console.log(error.message, "<<<<<<<<<");
    }
  };
};
export const fetchSubCategoryRent = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + "/subCategoryRent", {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          // access_token: localStorage.getItem("access_token"),
        },
      });
      const responseJSON = await response.json();
      dispatch(actionGenerator(READ_SUBCATEGORY_RENT, responseJSON));
    } catch (error) {
      console.log(error, "<<<<<<<<<");
    }
  };
};
export const editProductRent = (id, data) => {
  return async (dispact) => {
    try {
      await fetch(BASE_URL + `/rent/${id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      dispact(fetchRent(), actionGenerator(UPDATE_RENT));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchFixed = (currentPage = 1) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        BASE_URL + `/fixeds?page=${currentPage}&perPage=12`, {
          method: "get",
          headers: {
            "Content-Type": "application/json",
            // access_token: localStorage.getItem("access_token"),
          },
        }
      );
      const responseJSON = await response.json();
      dispatch(actionGenerator(READ_FIXED, responseJSON.data));
    } catch (error) {
      console.log(error, "<<<<<<<<<");
    }
  };
};

export const fetchFixedSearch = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + `/fixeds?searchTerm=${query}`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          // access_token: localStorage.getItem("access_token"),
        },
      });
      console.log("produk dicari", query);
      const responseJSON = await response.json();
      dispatch(actionGenerator(READ_FIXED_SEARCH, responseJSON.data));
    } catch (error) {
      console.log(error.message, "<<<<<<<<<");
    }
  };
};

export const fetchCategoryFixed = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + "/CategoryFixed", {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          // access_token: localStorage.getItem("access_token"),
        },
      });
      const responseJSON = await response.json();
      dispatch(actionGenerator(READ_CATEGORY_FIXED, responseJSON));
    } catch (error) {
      console.log(error.message, "<<<<<<<<<");
    }
  };
};

export const fetchBrandFixed = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + "/brandFixed", {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          // access_token: localStorage.getItem("access_token"),
        },
      });
      const responseJSON = await response.json();
      dispatch(actionGenerator(READ_BRAND_FIXED, responseJSON));
    } catch (error) {
      console.log(error.message, "<<<<<<<<<");
    }
  };
};

export const fetchBlog = (currentPage = 1) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        BASE_URL + `/blog?page=${currentPage}&perPage=4`, {
          method: "get",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const responseJSON = await response.json();
      dispatch(actionGenerator(READ_BLOG, responseJSON.data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const fetchDetailBlog = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + `/blog/${id}`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          // access_token: localStorage.getItem("access_token"),
        },
      });

      const responseJSON = await response.json();
      dispatch(actionGenerator(READ_BLOG_DETAIL, responseJSON));
    } catch (error) {
      console.log(error.message, "<<<<<<<<<");
    }
  };
};

export const fetchBlogRandom = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + `/Blogss`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          // access_token: localStorage.getItem("access_token"),
        },
      });

      const responseJSON = await response.json();
      dispatch(actionGenerator(READ_BLOG_RANDOM, responseJSON));
    } catch (error) {
      console.log(error.message, "<<<<<<<<<");
    }
  };
};

export const fetchToolsVenueLayouts = (currentPage = 1) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        BASE_URL + `/Toolss?category_id=1&page=${currentPage}&limit=10`, {
          method: "get",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const responseJSON = await response.json();
      dispatch(actionGenerator(READ_TOOLS_VENUE_LAYOUTS, responseJSON.tools));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const fetchToolsVenueLayoutsSearch = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        BASE_URL + `/Toolss?category_id=1&search=${query}`, {
          method: "get",
          headers: {
            "Content-Type": "application/json",
            // access_token: localStorage.getItem("access_token"),
          },
        }
      );
      console.log("produk dicari", query);
      const responseJSON = await response.json();
      dispatch(
        actionGenerator(READ_TOOLS_VENUE_LAYOUTS_SEARCH, responseJSON.tools)
      );
    } catch (error) {
      console.log(error.message, "<<<<<<<<<");
    }
  };
};

export const fetchToolsArtistRiders = (current = 1) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        BASE_URL + `/Toolss?category_id=2&page=${current}&limit=10`, {
          method: "get",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const responseJSON = await response.json();
      dispatch(actionGenerator(READ_TOOLS_ARTIST_RIDERS, responseJSON.tools));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const fetchToolsArtistRiderSearch = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        BASE_URL + `/Toolss?category_id=2&search=${query}`, {
          method: "get",
          headers: {
            "Content-Type": "application/json",
            // access_token: localStorage.getItem("access_token"),
          },
        }
      );
      console.log("produk dicari", query);
      const responseJSON = await response.json();
      dispatch(
        actionGenerator(READ_TOOLS_ARTIST_RIDERS_SEARCH, responseJSON.tools)
      );
    } catch (error) {
      console.log(error.message, "<<<<<<<<<");
    }
  };
};

export const fetchRentProject = (currentPage = 1) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        BASE_URL + `/rentsProject?page=${currentPage}&perPage=10`, {
          method: "get",
          headers: {
            "Content-Type": "application/json",
            // access_token: localStorage.getItem("access_token"),
          },
        }
      );

      const responseJSON = await response.json();
      dispatch(actionGenerator(READ_RENT_PROJECT, responseJSON.data));
    } catch (error) {
      console.log(error.message, "<<<<<<<<<");
    }
  };
};

export const fetchRentProjectCategory = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + `/rentsProjectCategory`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          // access_token: localStorage.getItem("access_token"),
        },
      });

      const responseJSON = await response.json();
      dispatch(actionGenerator(READ_RENT_PROJECT_CATEGORY, responseJSON));
    } catch (error) {
      console.log(error.message, "<<<<<<<<<");
    }
  };
};

export const fetchDetailRentProject = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + `/rentsProject/${id}`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          // access_token: localStorage.getItem("access_token"),
        },
      });

      const responseJSON = await response.json();
      dispatch(actionGenerator(READ_RENT_DETAIL_PROJECT, responseJSON));
    } catch (error) {
      console.log(error.message, "<<<<<<<<<");
    }
  };
};

export const fetchFixedProject = (currentPage = 1) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        BASE_URL + `/fixedProject?page=${currentPage}&perPage=10`, {
          method: "get",
          headers: {
            "Content-Type": "application/json",
            // access_token: localStorage.getItem("access_token"),
          },
        }
      );

      const responseJSON = await response.json();
      dispatch(actionGenerator(READ_FIXED_PROJECT, responseJSON.data));
    } catch (error) {
      console.log(error.message, "<<<<<<<<<");
    }
  };
};

export const fetchFixedProjectCategory = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + `/fixedProjectCategory`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          // access_token: localStorage.getItem("access_token"),
        },
      });

      const responseJSON = await response.json();
      dispatch(actionGenerator(READ_FIXED_PROJECT_CATEGORY, responseJSON));
    } catch (error) {
      console.log(error.message, "<<<<<<<<<");
    }
  };
};

export const fetchDetailFixedProject = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + `/fixedProject/${id}`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          // access_token: localStorage.getItem("access_token"),
        },
      });

      const responseJSON = await response.json();
      dispatch(actionGenerator(READ_FIXED_DETAIL_PROJECT, responseJSON));
    } catch (error) {
      console.log(error.message, "<<<<<<<<<");
    }
  };
};