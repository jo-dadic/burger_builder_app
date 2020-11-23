import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-app-b55cd.firebaseio.com/",
});

export default instance;
