import React, {Component} from 'react'
export default  class UpdateBeer extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: this.props.beer.name,
            brewery: this.props.beer.brewery,
            abv: this.props.beer.abv,
            img: this.props.beer.img,
            url: this.props.beer.url,
            description: this.props.beer.description
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event){
        this.setState({[event.target.id]: event.target.value})
    }
    async handleSubmit(beer){
        try {
            let response = await fetch(`${this.props.baseURL}/beers/${beer._id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    name: this.state.name,
                    brewery: this.state.brewery,
                    abv: this.state.abv,
                    img: this.state.img,
                    url: this.state.url,
                    description: this.state.description
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            let data = await response.json()
            console.log(data);
            const foundBeer = this.state.beers.findIndex (
              foundItem => (foundItem._id === beer._id)
            )
            const copyBeers = [...this.props.beers]
            copyBeers[foundBeer].name = data.name
            copyBeers[foundBeer].brewery = data.brewery
            copyBeers[foundBeer].abv = data.abv
            copyBeers[foundBeer].img = data.img
            copyBeers[foundBeer].url = data.url
            copyBeers[foundBeer].description = data.description
            this.props.handleUpdateBeer(copyBeers)
        } catch (e) {
            console.error('Error', e);
        }
    }
    render(){
        return(
            <div>
                <form onSubmit={(event) => {
                  event.preventDefault()
                  this.handleSubmit(this.props.beer)}}>
                    <input type="text" id="name" placeholder="beer name" onChange={this.handleChange}/>
                    <input type="text" id="brewery" placeholder="brewery" onChange={this.handleChange}/>
                    <input type="text" id="abv" placeholder="ABV" onChange={this.handleChange}/>
                    <input type="text" id="url" placeholder="brewery link" onChange={this.handleChange}/>
                    <input type="text" id="img" placeholder="image" onChange={this.handleChange}/>
                    <textarea type="text" id="description" placeholder="description" onChange={this.handleChange}/>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    }
}
