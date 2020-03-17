import React from 'react'
import UpdateBeer from './UpdateBeer.js'


class Beer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showForm: false
        }
        this.toggleShowForm = this.toggleShowForm.bind(this)
    }
    toggleShowForm(){
        this.setState({showForm: !this.state.showForm})
    }
  render() {
    return(
      <div className="card">
          <img src={this.props.beer.img}></img>
          <h1 className="card-header">{this.props.beer.name}</h1>
          <h4>{this.props.beer.abv}</h4>
          <h2><a href={this.props.beer.url}>{this.props.beer.brewery}</a></h2>
          <p>{this.props.beer.description}</p>
          <button onClick={()=> this.toggleShowForm()}>Edit</button>
          <button onClick={()=> this.props.deleteBeer(this.props.beer._id)}>Delete</button>
          {
              this.state.showForm
              ? <UpdateBeer baseURL={this.props.baseURL} handleUpdateBeer={this.props.handleUpdateBeer} beer={this.props.beer}
              beers={this.props.beers}
              toggleShowForm={this.toggleShowForm} />
              : null
          }

      </div>
    )
  }
}

export default Beer
