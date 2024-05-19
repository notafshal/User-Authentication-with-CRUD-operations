import axios from "axios";

const baseUrl = "/api/auth/login";

const login = async (credentials) => {
  try {
    const res = await axios.post(baseUrl, credentials);
    return res.data;
  } catch (e) {
    console.error("Axios Error:", e);
    if (e.response) {
      console.log("Response Data:", e.response.data);
      console.log("Response Status:", e.response.status);
      console.log("Response Headers:", e.response.headers);
    } else if (e.request) {
      console.log("Request Data:", e.request);
    } else {
      console.log("Error Message:", e.message);
    }
    throw e;
  }
};

export default login;
