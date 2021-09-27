import axios from "axios";

const instance = axios.create({
  baseURL: " https://testing-tinder-backend.herokuapp.com",
});

export default instance;
