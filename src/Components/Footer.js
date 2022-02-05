import React, { Component } from 'react';

export class Footer extends Component {
    render() {
        return <div>
            <nav className="navbar sticky-bottom navbar-dark bg-dark">
                <div className="container-fluid text-light" style={{ textAlign: 'center' }}>
                    <p > Keep Yourself Updated!</p>
                </div>
            </nav>
        </div>;
    }
}

export default Footer;

