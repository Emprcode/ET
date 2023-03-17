import axios from "axios";

const userApi = "http://localhost:8000/api/v1/user";
const transApi = "http://localhost:8000/api/v1/transaction";

export const postUser = async (userObj) => {
  try {
    const { data } = await axios.post(userApi, userObj);

    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const fetchUser = async (userObj) => {
  try {
    const { data } = await axios.post(userApi + "/login", userObj);

    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const addTrans = async (obj) => {
  try {
    const { data } = await axios.post(transApi, obj);

    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
