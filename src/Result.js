import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import './Result.css'
import enfj from './results/enfj.md'
import enfp from './results/enfp.md'
import entj from './results/entj.md'
import entp from './results/entp.md'
import esfj from './results/esfj.md'
import esfp from './results/esfp.md'
import estj from './results/estj.md'
import estp from './results/estp.md'
import infj from './results/infj.md'
import infp from './results/infp.md'
import intj from './results/intj.md'
import intp from './results/intp.md'
import isfj from './results/isfj.md'
import isfp from './results/isfp.md'
import istj from './results/istj.md'
import istp from './results/istp.md'

class Result extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: null,
    }
  }
  componentDidMount() {
    let finalRes = this.props.result.toLowerCase();
    switch (finalRes) {
      case 'enfj':
        fetch(enfj).then((response) => response.text()).then((text) => {
          this.setState({ result: text })
        })
        break;
      case 'enfp':
        fetch(enfp).then((response) => response.text()).then((text) => {
          this.setState({ result: text })
        })
        break;
      case 'entj':
        fetch(entj).then((response) => response.text()).then((text) => {
          this.setState({ result: text })
        })
        break;
      case 'entp':
        fetch(entp).then((response) => response.text()).then((text) => {
          this.setState({ result: text })
        })
        break;
      case 'esfj':
        fetch(esfj).then((response) => response.text()).then((text) => {
          this.setState({ result: text })
        })
        break;
      case 'esfp':
        fetch(esfp).then((response) => response.text()).then((text) => {
          this.setState({ result: text })
        })
        break;
      case 'estj':
        fetch(estj).then((response) => response.text()).then((text) => {
          this.setState({ result: text })
        })
        break;
      case 'estp':
        fetch(estp).then((response) => response.text()).then((text) => {
          this.setState({ result: text })
        })
        break;
      case 'infj':
        fetch(infj).then((response) => response.text()).then((text) => {
          this.setState({ result: text })
        })
        break;
      case 'infp':
        fetch(infp).then((response) => response.text()).then((text) => {
          this.setState({ result: text })
        })
        break;
      case 'intj':
        fetch(intj).then((response) => response.text()).then((text) => {
          this.setState({ result: text })
        })
        break;
      case 'intp':
        fetch(intp).then((response) => response.text()).then((text) => {
          this.setState({ result: text })
        })
        break;
      case 'isfj':
        fetch(isfj).then((response) => response.text()).then((text) => {
          this.setState({ result: text })
        })
        break;
      case 'isfp':
        fetch(isfp).then((response) => response.text()).then((text) => {
          this.setState({ result: text })
        })
        break;
      case 'istj':
        fetch(istj).then((response) => response.text()).then((text) => {
          this.setState({ result: text })
        })
        break;
      case 'istp':
        fetch(istp).then((response) => response.text()).then((text) => {
          this.setState({ result: text })
        })
        break;
    
      default:
        break;
    }
    // let finalResult = arrOfResult.filter(fR => fR === this.props.result.toLowerCase())
    // let finalResult = this.props.result.toLowerCase()
    // console.log(finalResult);
    
    // fetch(istp).then((response) => response.text()).then((text) => {
    //   this.setState({ result: text })
    // })
  }
  render() {
    const {result} = this.state
    return (
      <React.Fragment>
        <div className="Result-text">
          {this.props.result}
        </div>
        <ReactMarkdown className="container Result-Desc" source={result}/>
      </React.Fragment>
    )
  }
}

export default Result;