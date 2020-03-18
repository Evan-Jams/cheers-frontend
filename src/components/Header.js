import React from 'react'

class Header extends React.Component {
  render() {
    return(
      <header>
          <div className="header-image">
              <img src="https://2fdltvvn8wp2rn64ywgk8o17-wpengine.netdna-ssl.com/wp-content/uploads/2014/06/beer_flights.jpg"/>
            </div>
            <div className="header-image">
              <h1 id="title">Cheers</h1>
            </div>
            <div className="header-image">
              <img id="right-image" src="https://2fdltvvn8wp2rn64ywgk8o17-wpengine.netdna-ssl.com/wp-content/uploads/2014/06/beer_flights.jpg"/>
            </div>

      </header>
    )
  }
}




export default Header
