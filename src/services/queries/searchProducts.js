import axios from "axios";
import { BASE_URL } from "../config/API";

export async function searchProducts(textSearch) {
    return await axios.get(`${BASE_URL}/products/search?q=${textSearch}`);
}