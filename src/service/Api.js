import axios from "axios";
import { API_URL } from "../lib/constant";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${JSON.parse(localStorage.getItem("auth"))}`,
  },
});

