import React, { Component } from 'react'
import NavItem from './navitem.js'
// NavItem is the sub-components

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state={
      'NavItemActive':''
    }
  }

  activeitem=(itemId)=>
  {
    if(this.state.NavItemActive.length>0) {
      document.getElementById(this.state.NavItemActive).classList.remove('active');
    }

    this.setState({'NavItemActive':itemId}, ()=> {
      document.getElementById(this.state.NavItemActive).classList.add('active');
    });
  };

  render() {
    return (
    <div>
      <div className="navBg"></div>
      <div className="nav">
        <NavItem item="About" tolink="/" activec={this.activeitem}></NavItem>
        <NavItem item="Projects" tolink="/projects" activec={this.activeitem}></NavItem>
        <NavItem item="Work" tolink="/work" activec={this.activeitem}></NavItem>
        <NavItem item="Photography" tolink="/photography" activec={this.activeitem}></NavItem>
        <NavItem item="Refs" tolink="/refs" activec={this.activeitem}></NavItem>
        <NavItem item="Contact" tolink="/contact" activec={this.activeitem}></NavItem>
      </div>
    </div>
    )
  }
}

export default NavBar
