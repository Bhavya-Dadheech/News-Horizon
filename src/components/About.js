import React, { Component } from "react";

export class About extends Component {
  render() {
    return (
      <div
        className="container py-3 rounded"
        // style={myStyle}
      >
        <h1 style={this.props.mode === "light" ? { color: "black" } : { color: "white" }}>About Us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                style={this.props.mode === "light" ? { color: "black" } : { color: "white" }}
                className={`accordion-button bg-${this.props.mode}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                // style={myStyle}
              >
                <strong>📰 Welcome to News Horizon - Your Gateway to Global Updates!</strong>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div
                style={this.props.mode === "light" ? { color: "black" } : { color: "white", background: "#3A3B3C" }}
                className="accordion-body"
                //  style={myStyle}
              >
                Dive into the world of breaking news and stay ahead with the latest happenings across diverse
                categories. News Horizon is your go-to source for comprehensive news coverage, offering a seamless
                experience that keeps you informed and engaged.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                style={this.props.mode === "light" ? { color: "black" } : { color: "white" }}
                className={`accordion-button collapsed bg-${this.props.mode}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                // style={myStyle}
              >
                <strong>🌐 Categories for Every Interest</strong>
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div
                className="accordion-body"
                style={this.props.mode === "light" ? { color: "black" } : { color: "white", background: "#3A3B3C" }}
                //  style={myStyle}
              >
                Explore a spectrum of news categories tailored to your preferences. Whether you're into the dynamic
                realm of Business, the glitz and glamour of Entertainment, the latest breakthroughs in Health and
                Science, the thrill of Sports, or the cutting-edge developments in Technology, News Horizon has it all.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                style={this.props.mode === "light" ? { color: "black" } : { color: "white" }}
                className={`accordion-button collapsed bg-${this.props.mode}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                // style={myStyle}
              >
                <strong>🌍 Global Perspectives, Local Relevance</strong>
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div
                className="accordion-body"
                style={this.props.mode === "light" ? { color: "black" } : { color: "white", background: "#3A3B3C" }}
                // style={myStyle}
              >
                Tailor your news feed by selecting your country of interest. Get a personalized blend of global and
                local news that matters to you, ensuring that you are always in the loop with the stories that impact
                your region.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                style={this.props.mode === "light" ? { color: "black" } : { color: "white" }}
                className={`accordion-button collapsed bg-${this.props.mode}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
                // style={myStyle}
              >
                <strong>🌙 Dark Mode - Illuminate Your News Experience</strong>
              </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div
                className="accordion-body"
                style={this.props.mode === "light" ? { color: "black" } : { color: "white", background: "#3A3B3C" }}
                // style={myStyle}
              >
                Immerse yourself in a comfortable and visually pleasing reading experience with our Dark Mode feature.
                Whether it's late-night scrolling or preference for a sleek aesthetic, [News App Name] adapts to your
                reading style.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                style={this.props.mode === "light" ? { color: "black" } : { color: "white" }}
                className={`accordion-button collapsed bg-${this.props.mode}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
                // style={myStyle}
              >
                <strong>📲 Free Access, Premium Quality</strong>
              </button>
            </h2>
            <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div
                className="accordion-body"
                style={this.props.mode === "light" ? { color: "black" } : { color: "white", background: "#3A3B3C" }}
                // style={myStyle}
              >
                News Horizon believes in making information accessible to all. Enjoy free access to a wealth of news
                content without any subscription fees. Stay informed without compromise.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
