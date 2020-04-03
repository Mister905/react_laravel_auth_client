import axios from "axios";

export default axios.create({
  baseURL: "http://auth.test",
  headers: {
    Authorization: `Bearer ${localStorage.token}`
  },
});
