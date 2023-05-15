'use strict';

const api_key = '1e283ec8d29fcfb4fc2a4a75478e2231';
const imageBaseURL = 'https://image.tmdb.org/t/p/';

// Tim du lieu va chuyen ket qua json vao callback

const fetchDataFromServer = function (url, callback, optionalParam) {
  fetch(url)
    .then(response => response.json())
    .then(data => callback(data, optionalParam));
}

export { imageBaseURL, api_key, fetchDataFromServer };