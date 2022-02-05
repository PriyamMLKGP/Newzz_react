import React, { Component } from 'react';

export class About extends Component {
  render() {
    return <div>
        <div className="card my-3 text-center container">
        {/* here either you use the import image or require function to get the image */}
        <img src={require('./myimage.jpeg')} style={{width: "200px",alignSelf:'center'}} className="card-img-top" alt="Founder's Image"/>
        <div className="card-body">
            <h5 className="card-title">Creater of Website -Priyam Goenka</h5>
            <p className="card-text">Platform made for news enthusiast looking into the importance of News in our life.</p>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Enjoys Headlines</li>
            <li className="list-group-item">Get Updated on each news</li>
            <li className="list-group-item">Happy Learning</li>
        </ul>
        </div>
    </div>;
  }
}

export default About;
