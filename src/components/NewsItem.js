import React, { Component } from "react";
import { Link } from "react-router-dom";
export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="card my-1" style={{ width: "18rem" }}>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <Link href="/newsdetail" className="btn btn-sm btn-primary">
            Read More
          </Link>
        </div>
      </div>
    );
  }
}

export default NewsItem;
