import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="jumbotron">
        <div className="container">
          <h1>Welcome to our onboard process!</h1>
          <p>To start working at the company, we just need you to fill out 3 simple forms.</p>
          <Button type="button" className="btn btn-primary">Click to Start Onboarding</Button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.app'));