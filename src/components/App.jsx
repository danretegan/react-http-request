import { Component } from 'react';
import axios from 'axios';
import ArticleList from './ArticleList';

axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';

class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: '',
  };

  async retriveArticles() {
    try {
      this.setState({
        isLoading: true,
        error: '', // Resetăm eroarea la fiecare cerere
      });

      const response = await axios.get('/search?query=react');

      this.setState({
        articles: response.data.hits,
      });
    } catch (error) {
      this.setState({
        error: error.message, // Setăm eroarea primită de la server în starea componentei
      });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  }

  async componentDidMount() {
    this.retriveArticles();
  }

  render() {
    const { articles, isLoading, error } = this.state;

    if (isLoading) {
      return <p>Waiting for data...</p>;
    }

    return (
      <>
        {error?.length > 0 && <p>{error}</p>}
        {articles.length > 0 ? <ArticleList articles={articles} /> : null}
      </>
    );
  }
}

export default App;
