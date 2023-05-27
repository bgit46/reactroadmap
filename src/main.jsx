import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Test from './Test.jsx'

class Clock extends React.Component {

  state = {daet: new Date()};


  componentDidMount() {
    this.clockTimer = setInterval(()=> this.tick(),1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer)
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <h1 className='heading'>
        <span className='text'>Hello {this.state.date.toLocaleTimeString(this.props.locale)}</span>
      </h1>
    );
  }
}



ReactDOM.createRoot(document.getElementById('root')).render(
 
  <Clock locale="bn-BD" />
  
)
