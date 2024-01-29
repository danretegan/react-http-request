import axios from 'axios';

axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';

async function retriveArticles() {
  try {
    const response = await axios.get('/search?query=react');
    return response.data.hits;
  } catch (error) {
    throw error; // Re-throw the error to handle it in the calling component
  }
}

const newsService = {
  retriveArticles,
};

export default newsService;
