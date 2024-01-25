import axios from "axios";
const API_URL = "http://localhost:8000";
const API = async (urlObject, payload) => {
  return await axios({
    method: urlObject.method,
    url: `${API_URL}/${urlObject.endpoint}`,
    data: payload,
  });
};

export const API_URLS = {
  saveSentEmail: {
    endpoint: "save",
    method: "post",
  },
  saveUser: {
    endpoint: "saveUser",
    method: "post",
  },
};

export default API;
