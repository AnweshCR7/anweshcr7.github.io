import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

const justify_desc = {
    textAlign: 'justify',
    textJustify: 'inter-character',
}

class Project extends Component {
    state = {  }
    render() { 
        return ( 
        <Fade bottom>
        <div className='project'>
        <a href={this.props.url}>
            <img src={this.props.imageSrc} alt={this.props.title}></img>
            </a>
            <span className='project-text'>
                <h1>{this.props.title}</h1>
                <span>{this.props.service}</span>
                <p style={justify_desc}>{this.props.desc}</p>
            </span>
        </div> 
            </Fade>);
    }
}
 
export default Project;