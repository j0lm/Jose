import React, { Component, useState, useEffect } from 'react';
import './projects.css'
import Project from './Project.jsx';

class Projects extends Component {

    render() {
        return ( 
            <div className='Projects'>
                <h1 className='text'>Projects</h1>
                <div className="pContainer"> 
                    {this.renderProject(1)}
                    {this.renderProject(2)}
                    {this.renderProject(3)}
                    {this.renderProject(4)}
                </div>
            </div> 
        );
    }

    renderProject(i) {
        return (
            <Project 
                id={i}
            />
        );
    };

    
}

export default Projects;