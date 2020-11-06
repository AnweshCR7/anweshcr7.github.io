import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';
import Emoji from '../utils/emoji'
// import {ReactComponent as ReactLogo} from './logo.svg';

const footerimg_style = {
    width:'2em',
    position:'absolute',
    top:'50%',
    transform:'translate(0, -50%)'
  };

const contact_img = {
    width:'2em'
};

const ul_unpadded = {
    padding:'0'
};

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
                <ul style={ul_unpadded}>
                    {data.social.map((item, index)=>(
                        <li key={index}>
                            <a target='_blank' rel="noopener noreferrer" href={item.url}>
                                {item.img_src.length > 0 && <img src={item.img_src} style={contact_img}/>}
                            </a>
                        </li>
                    ))}   
                </ul>
        </div>
        </Fade>
        <Fade>
            <span className='footer'>Made with <Emoji symbol="❤️"/> in India </span>
            <span className='footer'> Powered by 
                <img src='https://raw.githubusercontent.com/AnweshCR7/anweshcr7.github.io/71460201d6346d58a10645211870c97a3bb0a8b6/src/assets/logo.svg' 
                style={footerimg_style} />
            </span>
        </Fade>
        </div>);
    }
}
 
export default Contact;