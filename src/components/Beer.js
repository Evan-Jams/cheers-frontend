import React from 'react'

class Beer extends React.Component {
  render() {
    return(
      <div>
      <img src={this.props.beer.img}></img>
      <h1>{this.props.beer.name}</h1>
      <h4>{this.props.beer.abv}</h4>
      <h2><a href={this.props.beer.url}>{this.props.beer.brewery}</a></h2>
      <p>{this.props.beer.description}</p>
      <button onClick={()=> this.props.deleteBeer(this.props.beer._id)}>Delete</button>

      </div>
    )
  }
}

export default Beer
