import React, { Component } from 'react';
import Song from './Song.js'
import Title from './Title';
// import ErrorMessage from './ErrorMessage';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      songData: null,  // Used to hold data loaded from the weather API
    };
    // this.weatherData = null
  }

  handleSubmit(e) {
    e.preventDefault()

    // Form an API request URL with the apikey and zip
    const url = `http://localhost:5000/`;

    // Get data from the API with fetch
    fetch(url).then(res => {
      // Handle the response stream as JSON
      return res.json()
    }).then((json) => {
      // If the request was successful assign the data to component state
      this.setState({ songData: json })

      // ! This needs better error checking here or at renderWeather() 
      // It's possible to get a valid JSON response that is not weather 
      // data, for example when a bad zip code entered.
    }).catch((err) => {
      // If there is no data 
      this.setState({ songData: null }) // Clear the weather data we don't have any to display
      // Print an error to the console. 
      console.log('-- Error fetching --')
      console.log(err.message)
      // You may want to display an error to the screen here. 
    })
  }

  renderSong() {
    const { songData } = this.state;

    // This method returns undefined or a JSX component
    if (songData === null) {
      // If there is no data return undefined
      return undefined
    }

    // if (songData.cod === '404' || songData.cod === '400') {
    //   return <ErrorMessage message={songData.message} />;
    // }

    return <Song songData={songData} />;
  }
  render() {
    const { inputValue } = this.state;
    return (
      <div className="App">
        <div>
          <Title />
        </div>
        {/* controlled component pattern */}

        {/** Conditionally render this component */}
        {this.renderSong()}

        {/** This input uses the controlled component pattern */}
        <form onSubmit={e => this.handleSubmit(e)}>

          {/** 
          This pattern is used for input and other form elements 
          Set the value of the input to a value held in component state
          Set the value held in component state when a change occurs at the input 
          */}
          <input 
            value={ inputValue } 
            onChange={e => this.setState({ inputValue: e.target.value })}
            type="text" 
            pattern="(\d{5}([\-]\d{4})?)"
            placeholder="enter zip"
          />

          <button type="submit">Submit</button>

        </form>



      </div>
    );
  }
}

export default App;
