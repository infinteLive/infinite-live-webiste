import { READ_RENT,READ_FIXED, READ_CATEGORY_RENT, READ_SUBCATEGORY_RENT, UPDATE_RENT } from"./actionTypes"

const BASE_URL = "http://localhost:3000";
// const BASE_URL = "https://90b9399s-3000.asse.devtunnels.ms"
export const actionGenerator = (type, payload) => {
    return {
      type,
      payload,
    };
  };

  export const fetchRent = () => {
    return async (dispatch) => {
      try {
        const response = await fetch(BASE_URL + "/rent", {
          method: "get",
          headers: {
            "Content-Type": "application/json",
            // access_token: localStorage.getItem("access_token"),
          },
        });
        const responseJSON = await response.json();
        dispatch(actionGenerator(READ_RENT, responseJSON));
        // console.log(responseJSON,"dari log");
        console.log(response);
      } catch (error) {
        console.log(error, "<<<<<<<<<");
      }
    };
  };
  export const fetchFixed = () => {
    return async (dispatch) => {
      try {
        const response = await fetch(BASE_URL + "/fixed", {
          method: "get",
          headers: {
            "Content-Type": "application/json",
            // access_token: localStorage.getItem("access_token"),
          },
        });
        const responseJSON = await response.json();
        dispatch(actionGenerator(READ_FIXED, responseJSON));
        // console.log(responseJSON,"dari log");
        // console.log(response);
      } catch (error) {
        console.log(error, "<<<<<<<<<");
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
        // console.log(responseJSON,"dari log");
        console.log(response);
      } catch (error) {
        console.log(error, "<<<<<<<<<");
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
        // console.log(responseJSON,"dari log");
        console.log(response);
      } catch (error) {
        console.log(error, "<<<<<<<<<");
      }
    }
  }
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
  
        dispact(fetchRent(),actionGenerator(UPDATE_RENT));
      } catch (error) {
        console.log(error);
      }
    };
  };