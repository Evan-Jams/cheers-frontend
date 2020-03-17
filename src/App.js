import React from 'react';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      beers: []
    }
  }
  render() {
    return(
      <div>
        Hello from App
      </div>
    )
  }
}
