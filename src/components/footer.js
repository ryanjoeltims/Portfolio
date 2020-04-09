import React, { Component } from 'react';
import { Link } from "react-router-dom";
import GitHub from '../images/github.png';
import LinkedIn from '../images/LinkedIn.png';

export default class Footer extends Component {

    render() {
        return (
            <div className='footer'>
                <div
                    className='footer-left'>
                    <a href='https://www.linkedin.com/in/ryantims/'
                    rel='noopener noreferrer'
                    target='_blank'>
                        <img
                        className='linkedinlogo'
                        src={LinkedIn}
                        alt='linkedinlogo'>
                        </img>
                    </a>
                        Contact Me
                        </div>
                <div className="footer_middle">
                    <h className='footerhead'>Let's Dream Big</h>
                    <p>Where could your dreams take you?</p>
                    <div className="footer_bottom">
                        <div className="footer_copyright">
                            <p>©2020 All rights reserved.</p>
                        </div>
                    </div>
                </div>
                <div className='footer_right'>
                    GitHub
                    <a href='https://github.com/ryanjoeltims'
                    rel='noopener noreferrer'
                    target='_blank'>
                        <img
                        src={GitHub}
                        className='githublogo'
                        alt='githublogo'
                        >
                        </img>
                    </a>
                </div>

            </div>
        );
    }
}
