import React from 'react'
import UpdateBeer from './UpdateBeer.js'


class Beer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showForm: false,
            showmore: false
        }
        this.toggleShowForm = this.toggleShowForm.bind(this)
        this.toggleShowMore = this.toggleShowMore.bind(this)
    }
    toggleShowForm(){
        this.setState({showForm: !this.state.showForm})
    }
    toggleShowMore(){
      this.setState({showmore: !this.state.showmore})
    }
  render() {
    return(
      <div>
      {
        parseInt(this.props.abvFilter) >= parseInt(this.props.beer.abv)
        ?
      <div className="card">


            <img className="card-img-top" src={this.props.beer.img}></img>
          <div className="card-body">
          <div className="card-header">
          <h5>{this.props.beer.name} <span id="abv">(ABV: {this.props.beer.abv} %)</span></h5>

          <h6 ><a href={this.props.beer.url} target="_blank" rel="noopener noreferrer">{this.props.beer.brewery} brewery</a></h6>

          </div>
            <span onClick={()=>this.toggleShowMore()}className="show-link">
            {
              this.state.showmore ? 'Show Less' : 'Show More'
            }
              </span>

            {
              this.state.showmore

              ? <div>
                  <div className="show-more">
                    <p>{this.props.beer.description}</p>
                  </div>
                  <div className="button-group">
                    <button className="btn btn-primary" onClick={()=> this.toggleShowForm()}>Edit</button>
                    <button className="btn btn-danger" onClick={()=> this.props.deleteBeer(this.props.beer._id)}>Delete</button>
                  </div>
              </div>

              : null
            }

          {
              this.state.showForm
              ? <UpdateBeer baseURL={this.props.baseURL} handleUpdateBeer={this.props.handleUpdateBeer} beer={this.props.beer}
              beers={this.props.beers}
              toggleShowForm={this.toggleShowForm} />
              : null
          }
          </div>
      </div>
      : null
    }
      </div>

    )
  }
}

export default Beer
