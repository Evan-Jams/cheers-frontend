import React, {Component} from 'react'


class NewBeer extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            brewery: '',
            abv: '',
            img: '',
            url: '',
            description: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event){
        this.setState({[event.target.id]: event.target.value})
    }
    async handleSubmit(event){
        event.preventDefault()
        try {
            let response = await fetch(this.props.baseURL + '/beers', {
                method: 'POST',
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
            this.props.handleAddBeer(data)
            this.setState({
                name: '',
                brewery: '',
                abv: '',
                img: '',
                url: '',
                description: ''
            })
        } catch (e) {
            console.error('Error', e);
        }
    }
    render(){
        return(
            <div >
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input type="text" id="name" placeholder="beer name" onChange={this.handleChange}/>
                    </div>
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



export default NewBeer
