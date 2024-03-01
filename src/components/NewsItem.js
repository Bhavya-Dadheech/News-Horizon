import React, { Component } from "react";
import { Link } from "react-router-dom";
export class NewsItem extends Component {
  constructor() {
    super();
    this.state = {
      customStyle: {
        lineHeight: "1.25rem",
        maxWidth: "18rem",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        textOverflow: "ellipsis",
        overflow: "hidden",
        textAlign: "left",
        padding: "1px 0px 1px 0px"
      }
    };
  }
  render() {
    return (
      <div className="card my-1">
        <div>
          <span className="badge rounded-pill bg-danger" style={{display:"flex",justifyContent:"flex-end",position:"absolute",right:"0",top:"-10px"}}>{this.props.source}</span>
        </div>
        <img
          src={this.props.imageUrl ? this.props.imageUrl : "/news.jpg"}
          className="card-img-top"
          style={{ height: "12rem" }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            <span>{this.props.title}</span>
            {/* to align UI uncomment below line*/}
            {/* <span style={{ ...this.state.customStyle, height: "4rem", WebkitLineClamp: "3" }}>{this.props.title}</span> */}
          </h5>
          <p className="card-text">
            {this.props.description ? this.props.description : "Read the article for full description."}
          </p>
          {/* to align UI uncomment below line*/}
          {/* <p className="card-text" style={{ ...this.state.customStyle, height: "5rem", WebkitLineClamp: "4" }}>
            {this.props.description ? this.props.description : "Read the article for full description."}
          </p> */}
          <label className="card-text">
            <small className="text-muted">By {this.props.author ? this.props.author : "Unknown"}</small>
          </label>
          <p className="card-text" style={{ marginBottom: "0px !important" }}>
            <small className="text-muted">{new Date(this.props.date).toGMTString()}</small>
          </p>
          {this.props.description === "[Removed]" ? (
            <div style={{ padding: "3px 0px 3px 0px" }}>&nbsp;</div>
          ) : (
            <Link className="btn btn-sm btn-primary" to={this.props.newsUrl} target="_blank" rel="noreferrer">
              Read More
            </Link>
          )}
        </div>
      </div>
    );
  }
}

export default NewsItem;
