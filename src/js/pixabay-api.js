import axios from 'axios';

const API_KEY = '52485365-5c5aa9c7e22c008bb072ec6c7';
const BASE_URL = 'https://pixabay.com/api/';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  params: {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 40,
  },
});

/**
 * @param {string} query
 * @param {AbortSignal} [signal]
 * @returns {Promise<{hits: any[], total: number, totalHits: number}>}
 */
export async function getImagesByQuery(query, signal) {
  const q = (query ?? '').trim();
  if (!q) return { hits: [], total: 0, totalHits: 0 };

  const { data } = await api.get('', { params: { q }, signal });
  return data;
}