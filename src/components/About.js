import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class About extends Component {
    state = {  }
    render() { 
        return (<div className='about'>
            <div className='about-content'>
            <h1><Fade bottom>About.</Fade></h1>
            <Fade bottom>
                    <p >{data.abouttextcaption}</p>
                    <p>{data.abouttext}</p>
            </Fade>
            </div>
            <div className='about-content'>
            {data.ShowAboutImage ? <img src={data.aboutImage} alt='about image'></img> : null}
            </div>
            

        </div>  );
    }
}
 
export default About;