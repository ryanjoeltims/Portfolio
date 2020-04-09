import React, { Component } from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { Container, Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';



export default class Navigation extends Component {

    // constructor (props) {
    //     super(props);

    //     this.toggle = this.toggleNavbar.bind(this);
    
    //     // https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
    //     if (typeof window !== 'undefined') {
    //       let prevScrollpos = window.pageYOffset;
    //       window.onscroll = function () {
    //         const maxScroll = document.body.clientHeight - window.innerHeight;
    //         let currentScrollPos = window.pageYOffset;
    //         if (
    //             (maxScroll > 0 && prevScrollpos > currentScrollPos && prevScrollpos <= maxScroll) 
    //           || (maxScroll <= 0 && prevScrollpos > currentScrollPos)
    //           || (prevScrollpos <= 0 && currentScrollPos <= 0)
    //           ) {
    //           document.getElementsByClassName("navbar").style.top = "0";
    //         } else {
    //           document.getElementsByClassName("navbar").style.top = "-5.0rem"; // adjustable based your need
    //         }
    //         prevScrollpos = currentScrollPos;
    //       }
    //     }
    //   }

    //   toggleNavbar() {
    //     this.setState({
    //       isOpen: !this.state.isOpen,
    //     });
    //   }



    render() {

      const navhead = (
        <div className='navtitle'>
          <h className='navhead'>RYAN TIMS</h>
          <div className='navsubhead'>WEB DEVELOPER</div>
        </div>
      )

        return (
            <div className='top'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to='#'>
                      {navhead}
                      </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor03">
                    </div>
                </nav>
            </div>
        );
    }
}