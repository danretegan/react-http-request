import React, { Component } from 'react';
import ArticleList from './ArticleList';
import newsService from './service/newsService';

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
        error: '',
      });

      const articles = await newsService.retriveArticles();

      this.setState({
        articles,
      });
    } catch (error) {
      this.setState({
        error: error.message,
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
