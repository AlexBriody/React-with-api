import React, { Component } from "react";
import NewSingle from "./NewSingle";
import axios from "axios";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }

  componentDidMount() {
    const url =
      "https://newsapi.org/v2/everything?q=travel&airlines&accommodations&flights&from=2019-12-01&sortBy=publishedAt&apiKey=0280946441554f9a95693f8a68599537";
    axios
      .get(url)
      .then(response => {
        this.setState({
          news: response.data.articles
        });
      })
      .catch(error => console.log(error));
  }

  renderItems() {
    return this.state.news.map(item => (
      <NewSingle key={item.url} item={item} />
    ));
  }

  render() {
    return <div className='row'>{this.renderItems()}</div>;
  }
}

export default News;
