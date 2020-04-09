import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";

import BubbleHead from '../images/bubblehead.jpeg';
import Headshot from '../images/headshot.jpeg';
import GitHub from '../images/github.png';
import JavaScript from '../images/JavaScript.png';
import LinkedIn from '../images/LinkedIn.png';
import NewDad from '../images/thenewdad.jpeg';

export default class Home extends Component {

    render() {
        return (
            <div>
                <div className='wholethang'>
                    <img src={Headshot}
                        className='img-fluid headshot'
                        alt='banner'
                    />
                    <div className='title'>
                        BRINGING DREAMS TO LIFE!
                    </div>
                    <img
                        src={JavaScript}
                        className='jsicon'
                        alt='jsicon'>
                    </img>

                </div>
                <div className='banner'>
                    <h1 className='bannerText'>WEB DEVELOPER</h1>
                </div>
                <div className='cards'>
                    <div className="card border-light m-3" >
                        <div className="card-header"
                            style={{ backgroundColor: 'rgb(38, 53, 38)' }}>PROJECTS</div>
                        <div className="card-body">
                            <h4 className="card-title">THE NEW DAD</h4>
                            <img src={NewDad}
                            className='img-fluid newdad'
                            alt='newdad'
                            />
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </div>
                    </div>
                    <div className="card border-light m-3 h" >
                        <div className="card-header"
                            style={{ backgroundColor: 'rgb(38, 53, 38)' }}>Full Stack Development</div>
                        <div className="card-body">
                            <h4 className="card-title">JavaScript</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className='banner2'>
                    <p className='bannerText2'>"Ryan is a high-performing leader, communicator, and builds up his team and those around him. I had the privilege of teaching him as the career services manager and also worked with him on a large-scale project. He consistently addresses the why behind various situations, allowing him to communicate effectively. Every setting I see Ryan in, people want him on their teams, organizations, and networks. I trust Ryan in his work. He carries a peaceful and joyful presence about him."
                    </p>
                    <div>Sarah Bahn</div>
                    <div>Bethel School of Technology</div>
                </div>
            </div>

        );
    }
}