import React from "react";

class CurrentWeather extends React.Component {
    render() {
        return (
            <div className="current-weather">
                <div className="current-temperature">
                    <span>{this.props.curTemp}</span>
                    <span className='degree'>{String.fromCharCode(176)}</span>
                </div>
                <div className="current-info">
                    <div className="current-scale">F</div>
                    <div className="weather-conditions">{this.props.curDescription}</div>
                    <div className="weather-humidity">{this.props.curHumidity}% Humidity</div>
                </div>
            </div>
        )
    }
}

export default CurrentWeather