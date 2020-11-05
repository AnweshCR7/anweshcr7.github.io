import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';
// import {ReactComponent as ReactLogo} from './logo.svg';

class Contact extends Component {
    state = {  }
    render() { 
        return (  <div>
        {/* <h1>
                <Fade bottom> Contact.</Fade>
        </h1> */}
        <Fade bottom>
        <div className='contact-content'>
                <h1>
                Let’s empower your data<br></br>
                <span className='amazing-color'>together</span></h1>
                    <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a>
                <ul>
                    {data.social.map((link,index)=>(
                        <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
                    ))}   
                </ul>
        </div>
        </Fade>

            <span className='footer'>Made With ❤ using React in India </span>
        </div>);
    }
}
 
export default Contact;