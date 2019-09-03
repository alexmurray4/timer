import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";
import Clock from './Clock.js';

import './Controls.scss';

function newClock(e) {
    e.preventDefault();
    console.log('The link was clicked.');
}

class Controls extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      clicked: true
    });
  }
  resetClocks() {
    console.log('resetting');
  }
	render() {
		return (
			<div className="controls">
				<nav class="menu">
				  <input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open"/>
				  <label class="menu-open-button" for="menu-open">
				    <span class="hamburger hamburger-1"></span>
				    <span class="hamburger hamburger-2"></span>
				    <span class="hamburger hamburger-3"></span>
				  </label>
          <a href="#" class="menu-item reset-clocks" onClick={this.resetClocks}> <FontAwesomeIcon icon={faRedoAlt} /> </a>
				  <a href="#" class="menu-item" onClick={this.handleClick}> <FontAwesomeIcon icon={faPlusCircle} /> </a>
          {this.state.clicked ? <Clock /> : null}
				</nav>
				<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
				    <defs>
				      <filter id="shadowed-goo">
				          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
				          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
				          <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
				          <feColorMatrix in="shadow" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2" result="shadow" />
				          <feOffset in="shadow" dx="1" dy="1" result="shadow" />
				          <feComposite in2="shadow" in="goo" result="goo" />
				          <feComposite in2="goo" in="SourceGraphic" result="mix" />
				      </filter>
				      <filter id="goo">
				          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
				          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
				          <feComposite in2="goo" in="SourceGraphic" result="mix" />
				      </filter>
				    </defs>
				</svg>
			</div>
		)
	}
}

export default Controls
