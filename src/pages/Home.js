import React, { Component } from 'react';
import video from './home.mp4'
import './home.css'
import Footer from './Footer'
class Home extends Component {
    render() {
        return (
            <div id="homeid" elevation={0} style={{ height: "95vh", overflowY: "scroll" }}>
               <header className="homehead">
      <div className="overlay"></div>
      <video className="homevideo" src={video} playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
      </video>
      <div className="homecontainer h-100">
        <div className="d-flex h-100 text-center align-items-center texthome">
          <div className="w-100 text-white">
            <h1 className="display-3"> CLB Market </h1>
         
          </div>
        </div>
      </div>
      </header> 

      <section className="" style={{textAlign:"center"}}>      <Footer/></section>

 </div>
        );
    }
}

export default Home;