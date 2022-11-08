import React, { Component } from 'react';
import Summary from './Summary'
import './homepage.css'
import './alexandre-debieve-FO7JIlwjOtU-unsplash.jpg'

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div className='HomePage'>
                <div 
                    img={require("./alexandre-debieve-FO7JIlwjOtU-unsplash.jpg")}
                    alt="homepage image background"
                    className="homepage-bg"
                >
                    {this.renderWelcomeText()}
                </div>
                <Summary />
            </div>
        );
    }

    renderWelcomeText() {
        return (
            <div className='welcome-text'>
                <p className="jose">Jose </p>
                <p className='olmedo'>Olmedo Jr</p>
                <p className="swe-desc"><i className="fa-solid fa-terminal welcome-area"></i>entry-level software engineer</p>
            </div>
        );
    }
}
 
export default Home;