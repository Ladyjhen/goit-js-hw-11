export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43695781-37520996cf2f13ffb5a7a3fb5';

export const options = {
  params: {
    key: API_KEY,
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 40,
  },
};