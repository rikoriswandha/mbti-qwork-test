import React, { Component } from 'react';
import './Answers.css';

class Answers extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <button className='button btn-qwork btn-lg btn-block' onClick={this.props.handleChoice} value={this.props.t1}>{this.props.q1}</button>
        <button className='button btn-qwork btn-lg btn-block' onClick={this.props.handleChoice} value={this.props.t2}>{this.props.q2}</button>
      </div>
    )
  }
}

export default Answers;