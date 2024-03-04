import React, { Component } from "react";
import NewsItem from "./NewsItem";
import MySpinner from "./MySpinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general"
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  };

  capitalizeFirstLetter(title) {
    return title.charAt(0).toUpperCase() + title.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
    if (this.props.category !== "general") {
      document.title = `${this.capitalizeFirstLetter(this.props.category)} - News Horizon`;
    } else {
      document.title = "News Horizon - Get your daily dose of news free!";
    }
  }

  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true
    });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(50);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.country !== this.props.country) {
      // Country prop has changed, update news
      await this.updateNews();
    }
  }

  handlePrevClick = async () => {
    this.setState({
      page: this.state.page - 1
    });
    this.updateNews();
  };

  handleNextClick = async () => {
    this.setState({
      page: this.state.page + 1
    });
    this.updateNews();
  };

  fetchData = async (pg) => {
    setTimeout(async () => {
      this.setState({ page: this.state.page + 1 });
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${pg}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults
      });
    }, 1000);
  };

  render() {
    return (
      <div className="container" style={{ marginTop: "5rem" }}>
        <h2 className="text-center my-4" style={this.props.mode === "light" ? { color: "black" } : { color: "white" }}>
          News Horizon - Top {this.capitalizeFirstLetter(this.props.category)} Headlines
        </h2>
        {this.state.loading && <MySpinner />}
        <div className="row">
          {/* for no infinite scroll */}
          {/* {!this.state.loading &&
            this.state.articles &&
            this.state.articles.map((e) => {
              return (
                <div className="col-md-3 my-2" key={e.url}>
                  <NewsItem
                    title={e.title}
                    description={e.description}
                    imageUrl={e.urlToImage}
                    newsUrl={e.url}
                    author={e.author}
                    date={e.publishedAt}
                    source={e.source.name}
                  />
                </div>
              );
            })} */}
          {!this.state.loading && this.state.articles && (
            <InfiniteScroll
              style={{ overflow: "hidden" }}
              dataLength={this.state.articles.length}
              next={() => {
                this.fetchData(this.state.page + 1);
              }}
              hasMore={this.state.articles.length !== this.state.totalResults}
              loader={<MySpinner />}
              endMessage={
                <h5 className={`text-center my-2 ${this.props.mode === "light" ? "text-secondary" : "text-white-50"}`}>
                  yay! you have seen it all.
                </h5>
              }
            >
              <div className="container py-2">
                <div className="row">
                  {this.state.articles.map((element) => {
                    return (
                      <div className="col-md-3" key={element.url}>
                        <NewsItem
                          mode={this.props.mode}
                          title={element.title ? element.title : ""}
                          description={element.description ? element.description : ""}
                          imageUrl={element.urlToImage}
                          newsUrl={element.url}
                          author={element.author}
                          date={element.publishedAt}
                          source={element.source.name}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </InfiniteScroll>
          )}
        </div>
        {/* for no infinite scroll */}
        {/* <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page === 1 ? true : false}
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </div>
    );
  }
}

export default News;
