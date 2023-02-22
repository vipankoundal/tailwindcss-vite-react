import axios from "axios";

export const FetchAllProducts = async (url) => {
  try {
    const { data } = await axios.get(process.env.DEV_URL + url);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
