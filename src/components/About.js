import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

const quote = {
    marginLeft: '0em',
    maxWidth: '100%',
    width: '80%',
    textAlign: 'left',
}
class About extends Component {
    state = {  }
    render() { 
        return (<div className='about'>
            <div className='about-content'>
            <h1><Fade bottom>About.</Fade></h1>
            <Fade bottom>
                    <p >{data.abouttextcaption}</p>
                    <p>{data.abouttext}</p>
                    <p>{data.abouttextGeneral}</p>
                    <p>{data.abouttextPersonal}</p>
                    <img style={quote} src={data.phraseline}></img>
            </Fade>
            </div>
            <div className='about-content'>
            {data.ShowAboutImage ? <img src={data.aboutImage} alt='about image'></img> : null}
            </div>
            

        </div>  );
    }
}
 
export default About;