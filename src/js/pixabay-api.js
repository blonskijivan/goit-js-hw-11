import axios from 'axios';

const API_KEY = 'THY_PIXABAY_KEY';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query, page = 1, perPage = 15) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: perPage,
  };

  return axios.get(BASE_URL, { params }).then(({ data }) => data);
}
