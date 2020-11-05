import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata'


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (<div>
        <h1 className='heading-background'>VISION</h1>
            {/* <header>
                <h1>
                    <Fade bottom cascade>{data.name}</Fade>
                </h1>
            </header> */}
            <Fade big>
                <p className='name'>
                    {data.name}</p>
            </Fade>
            <Fade bottom>
            <p className='header-title'>
            {data.headerTagline[0]}<br></br>
            {data.headerTagline[1]}<br></br>
            {/* {data.headerTagline[2]} */}
               {/* <br></br>
                    <button><a href={`mailto:${data.contactEmail}`} rel="noopener noreferrer" >Contact</a></button> */}
                </p>
            </Fade>



        </div>);
    }
}

export default Header;