import React from 'react';

function Weather(props){

    const song = props.songData;

    return (
        <div>
        <div className="weather"><span className="bold"></span> {song[0]} </div>
        <div className="weather"><span className="bold"></span> {song[1]} </div>
        <div className="weather"><span className="bold"></span> {song[2]} </div>
        <div className="weather"><span className="bold"></span> {song[3]} </div>
        <div className="weather"><span className="bold"></span> {song[4]} </div>
        <div className="weather"><span className="bold"></span> {song[5]} </div>
        <div className="weather"><span className="bold"></span> {song[6]} </div>
        <div className="weather"><span className="bold"></span> {song[7]} </div>
        <div className="weather"><span className="bold"></span> {song[8]} </div>
        <div className="weather"><span className="bold"></span> {song[9]} </div>
    
        </div>
    );
}

export default Weather;