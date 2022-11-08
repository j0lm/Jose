import React, { Component } from 'react';
import './homepage.css'

class Summary extends Component {
    state = {  } 
    render() { 
        return (
            <div className='Summary'>
                <div className='box-row'>
                    <div className='textbox hl'>
                        <i 
                            className="fa-brands fa-github"
                            onClick={() => window.open("https://github.com/j0lm")}
                        >
                        </i>
                        <i 
                            className="fa-brands fa-linkedin"
                            onClick={() => window.open("https://linkedin.com/in/joseolmedojr")}
                        >
                        </i>                    
                    </div>
                    <div className='textbox long'>
                    <p className='am-text title'>&gt;about me</p>
                        <p className='am-text para'>
                            Currently a senior at UT Austin 
                            studying electrical and computer engineering with a concentration in software 
                            engineering. I expect to graduate in May 2023 and am looking for a software 
                            engineering role. You can see my some of my projects by "Projects" in the menu or this card. I plan on expanding the website
                            into a database so that I can log all of my projects and interesting finds.
                        </p>
                    </div>
                </div>
                <div className='box-row'>
                    <div className='textbox longer'>
                        <p className='wip'>Jose0lmedojr@gmail.com<br></br> -- contact form coming soon</p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Summary;