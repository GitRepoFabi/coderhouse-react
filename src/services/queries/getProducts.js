import axios from 'axios';
import { BASE_URL } from '../config/API';

export async function getProducts() {
  return await axios.get(`${BASE_URL}/products`);
}