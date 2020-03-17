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
    this.getBeers = this.getBeers.bind(this)
  }
  handleAddBeer(beer){
      const copyBeers = [beer, ...this.state.beers]
      this.setState({
          beers: copyBeers
      })
  }
  componentDidMount() {
    this.getBeers()
  }
  async getBeers() {
    try {
      let response = await fetch(`${baseURL}/beers`)
      let data = await response.json()
      this.setState({
        beers: data
      })

    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return(
      <div>
        Hello from App
        <NewBeer baseURL={baseURL} handleAddBeer={this.handleAddBeer}/>
        <ul>
        {
          this.state.beers.map((beer, i) => {
            return(
              <li key={i}><Beer key={i} beer={beer}/></li>
            )
          })
        }
        </ul>
      </div>
    )
  }
}
