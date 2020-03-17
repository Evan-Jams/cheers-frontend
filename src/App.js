import React from 'react';
import NewBeer from './components/NewBeerForm.js'
import Beer from './components/Beer.js'


let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'https://cheers-backend.herokuapp.com/'
}


export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      beers: []
    }
    this.handleAddBeer = this.handleAddBeer.bind(this)
  }
  handleAddBeer(beer){
      const copyBeers = [beer, ...this.state.beers]
      this.setState({
          beers: copyBeers
      })
  }

  render() {
    return(
      <div>
        Hello from App
        <NewBeer baseURL={baseURL} handleAddBeer={this.handleAddBeer}/>
        {
          this.state.beers.map((beer, i) => {
            return(
              <Beer key={i} beer={beer}/>
            )
          })
        }

      </div>
    )
  }
}
