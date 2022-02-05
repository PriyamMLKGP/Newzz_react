import React, { Component } from 'react';

export class Newsitem extends Component {
    render() {
        let { title, desc, imageurl, newsurl, author, date, source } = this.props;
        return <div>

            {/* cards ar ebest suited for making news items */}
            <div className="card my-3">
                <img src={imageurl ? imageurl : ""} className="card-img-top" alt="..." />
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: "80%" }}>
                    {source}
                </span>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <p className="card-text">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</p>
                    <a href={newsurl} className="btn btn-dark">Read more</a>
                </div>
            </div>
        </div>;
    }
}

export default Newsitem;
