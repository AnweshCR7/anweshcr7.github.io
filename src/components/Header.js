import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata'
import Typing from 'react-typing-animation';

const cursorStyle = {
    color: '#1DE9B6'
}

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typing_flag: 0
        }
    }

    reloadTypingComponent = (event) => {
        this.setState({
            typing_flag: Math.random()
        });
    }

    render() {
        return (<div>
        <h1 className='heading-background'>अन्वेष</h1>
            <Fade big>
                <p className='name'>
                    {data.salutation}<br/>
                    {data.name}
                </p>
            </Fade>
            <Fade>
            <p className='header-title'>
                <Typing cursor={'|'} key={this.state.typing_flag} onFinishedTyping={this.reloadTypingComponent} >
                    {data.header_tags.map(function(tag)
                        {   return (<span><Typing.Speed ms={50} />
                            <Typing.Delay ms={800} />
                            <span>{tag}</span>
                            <Typing.Backspace count={20} delay={1500}/>
                            </span>)
                        }
                    )}
                </Typing>
            </p>
            </Fade>



        </div>);
    }
}

export default Header;