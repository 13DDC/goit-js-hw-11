export function pixabayApi(findText) {
  const BASE_URL = 'https://pixabay.com/api/';

  const params = new URLSearchParams({
    key: '44163417-71574278e0bc921a5136b7d8e',
    q: findText,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  const url = `${BASE_URL}?${params}`;
  return fetch(url).then(res => res.json());
}
