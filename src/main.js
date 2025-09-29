import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import './css/styles.css';
import './css/loader.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';

const form = document.querySelector('#search-form');
const input = document.querySelector('#query');

form.addEventListener('submit', async e => {
  e.preventDefault();

  const query = input.value.trim();
  if (!query) return;

  clearGallery();
  showLoader();

  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 15000);

  try {
    const data = await getImagesByQuery(query, ctrl.signal);

    if (!data.hits.length) {
      iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        timeout: 4000,
        progressBar: true,
        close: true,
      });
      return;
    }

    createGallery(data.hits);
  } catch (err) {
    iziToast.error({ message: err?.message || 'Request failed' });
  } finally {
    clearTimeout(t);
    hideLoader();
  }
});

window.addEventListener('DOMContentLoaded', hideLoader);