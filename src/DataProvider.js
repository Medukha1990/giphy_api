import API_KEY from "./heplers/keys";

export const requestTrending = (count) => {

    return fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${count}&rating=g`)
      .then(response => response.json());
};

export const requestSearch = (itemSearch, count) => {

    return fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${itemSearch}&limit=${count}&offset=0&rating=g&lang=en`)
      .then(response => response.json())
}
