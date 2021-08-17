import React, { Component } from 'react';
import './footer.css'
class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer-custom">
    <div className="container">
        <div className="row">
            <div className="col-md-4 footer-copyright">
            <p className="text-center">©2021 Itzik Duek & Omer  Gatenio</p>
            </div>
            <div className="col-md-4 mx-auto">
                <h3 className="text-center"><i className="fas fa-chart-line" aria-hidden="true"></i>
                CLB Market
                </h3>
                
            </div>
        </div>
    </div>
</footer>
            </div>
        );
    }
}

export default Footer;