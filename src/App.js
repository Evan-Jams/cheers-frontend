import React from 'react';
import NewBeer from './components/NewBeerForm.js'
import Beer from './components/Beer.js'
import Header from './components/Header.js'


let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'https://cheers-backend.herokuapp.com'
}


export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      beers: [],
      beer: null,
      isEdit: false,
      newBeer: false,
      abvFilter: 15
    }
    this.handleAddBeer = this.handleAddBeer.bind(this)
    this.getBeers = this.getBeers.bind(this)
    this.getBeer = this.getBeer.bind(this)
    this.deleteBeer = this.deleteBeer.bind(this)
    this.handleUpdateBeer = this.handleUpdateBeer.bind(this)
    this.toggleNewForm = this.toggleNewForm.bind(this)
    this.handleSlider = this.handleSlider.bind(this)
  }
  componentDidMount() {
    this.getBeers()
  }
  handleAddBeer(beer){
      const copyBeers = [beer, ...this.state.beers]
      this.setState({
          beers: copyBeers
      })
  }
  handleUpdateBeer(copyBeers){
    this.setState({
      beers: copyBeers,
      isEdit: false
    })
  }
  handleSlider(value) {
    console.log(value);
    this.setState({
      abvFilter: this.refs.slider.value
    })
  }
  getBeer(beer) {
    this.setState ({
      beer: beer
    })
  }
  toggleNewForm(){
      this.setState({
          newBeer: !this.state.newBeer
      })
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

  async deleteBeer(id){
      try {
          let response = await fetch(`${baseURL}/beers/${id}`, {
              method: 'DELETE'
          })
          await response.json()
          const foundBeer = this.state.beers.findIndex(beer =>
          beer._id === id)
          const copyBeers = [...this.state.beers]
          copyBeers.splice(foundBeer, 1)
          this.setState({beers: copyBeers})
      } catch (e) {
          console.error(e);
      }
  }


  render() {
    console.log(this.state.abvFilter);
    return(
      <>
          <Header />
          <div className="d-flex justify-content-center my-4">
              <form className="range-field" id="abv-slider" >
                  <label htmlFor="abvFilter">ABV</label>
                  <input id="slider11" className="border-0" name="abvFilter" type="range" min="0" max="15" step="0.1" ref="slider" value={this.state.abvFilter} onChange={this.handleSlider}/><span id="abv-filter">{this.state.abvFilter}%</span>
              </form>
              <span className="font-weight-bold text-primary ml-2 mt-1 valueSpan"></span>
          </div>
          <div className='container'>

          <button id="add-button" className="btn btn-warning" onClick={()=> this.toggleNewForm()}>Add New Beer</button>
          {
              this.state.newBeer
              ? <NewBeer toggleNewForm={this.toggleNewForm} baseURL={baseURL} handleAddBeer={this.handleAddBeer}/>
              : null
          }
            <div className="card-list">
            {
              this.state.beers.map((beer, i) => {
                return(

                  <div className=""
                    key={beer._id}
                    onMouseOver={() => {
                      this.getBeer(beer)
                    }}
                  ><Beer
                  key={i}
                  beers={this.state.beers}
                  beer={beer}
                  deleteBeer={this.deleteBeer}
                  baseURL={baseURL}
                  handleUpdateBeer={this.handleUpdateBeer}
                  handleSlider={this.handleSlider}
                  abvFilter={this.state.abvFilter}
                  /></div>
                )
              })
            }
            </div>
          </div>
      </>
    )
  }
}
