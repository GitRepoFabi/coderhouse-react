import axios from "axios";
import { BASE_URL } from "../config/API";

export async function getCategories () {
    return await axios.get(`${BASE_URL}/products/categories`)
}