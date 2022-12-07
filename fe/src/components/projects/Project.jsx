import React, { Component, useState, useEffect } from 'react';
import './projects.css'

class Project extends Component {

    render() {
        return (
            <div className='contentContainer'> 
                <p>test with name: {this.props.id}</p>
            </div>
        );
    }
}

export default Project;