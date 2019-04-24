import React from 'react';
import {connect} from 'react-redux'

import './App.css';

class App extends React.Component{

  onInc = () => {
    this.props.dispatch({type:'INC'})
  }

  onDec = () => {
    this.props.dispatch({type:'DEC'})
  }

  render(){
    return (
      <div className="App">
        <h1>{this.props.count}</h1>
        <button onClick={this.onInc}>+</button>
        <button onClick={this.onDec}>-</button>
      </div>
    );
  }

  

}

const mapStateToProps = ({count}) => {
    return {
      count
    }
}
export default connect(mapStateToProps)(App);
