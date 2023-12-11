export const BASE_URL = 'https://pixabay.com/api/',
  API_KEY = '37724895-812305347465977ce91c5a0e1',
  SEARCH_PARAMS = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
  });
