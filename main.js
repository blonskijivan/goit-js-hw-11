import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import './src/css/loader.css';

import { getImagesByQuery } from './src/js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './src/js/render-functions.js';

const form = document.querySelector('#search-form');
const input = document.querySelector('#query');

form.addEventListener('submit', e => {
  e.preventDefault();
  const query = input.value.trim();

  if (!query) {
    iziToast.info({ message: 'Enter a search term, please.' });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      const { hits = [], totalHits = 0 } = data || {};

      if (!hits.length) {
        iziToast.warning({
          message: 'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      createGallery(hits);
      iziToast.success({ message: `Found ${totalHits} images.` });
    })
    .catch(() => {
      iziToast.error({ message: 'Request failed. Please try again later.' });
    })
    .finally(() => {
      hideLoader();
    });
});