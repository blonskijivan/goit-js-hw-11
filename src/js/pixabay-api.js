import axios from 'axios';

const API_KEY = '...';
const BASE = 'https://pixabay.com/api/';

function withTimeout(ms = 10000) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  return { signal: ctrl.signal, clear: () => clearTimeout(t) };
}

export async function getImagesByQuery(query) {
  const { signal, clear } = withTimeout(10000); // 10s

  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 40,
  });

  try {
    const res = await fetch(`${BASE}?${params}`, { signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } finally {
    clear();
  }
}
