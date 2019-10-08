import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Counter extends React.Component{
  
    constructor(props){
      super(props);
      this.state={
        value:0
      };
      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(){
      this.setState({
        value : this.state.value + 1
      });
    }
    
    render(){
      return (
        <div>
          <h2>
            {this.state.value}
          </h2>
          <button onClick = {this.handleClick}> 
            PRESS ME</button>   
        </div>
        
      );
    }
  }
  
  class App extends React.Component {
    render() {
      return (
        <Counter/>
      );
    }
  };
  
  ReactDOM.render(
    <App></App>,
    document.getElementById("root")
  );