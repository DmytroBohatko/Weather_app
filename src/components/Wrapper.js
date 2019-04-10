import React from "react";
import Forecast from '../components/Forecast'
import SearchBar from '../components/SearchBar'
import CurrentWeather from '../components/CurrentWeather'


class Wrapper extends React.Component {

    render() {
        return (
            <div className="wrapper">
                <SearchBar
                    sValue={this.props.searchValue}
                    onFilterChange={this.props.onFilterChange}
                    onSubmit={this.props.onSubmit}
                />
                <CurrentWeather
                    curTemp={this.props.cTemp}
                    curHumidity={this.props.cHumidity}
                    curDescription={this.props.cDescription}
                />
                <Forecast
                    foreImg={this.props.fImg}
                    foreDate={this.props.fDate}
                    foreTempMax={this.props.fTempMax}
                    foreTempMin={this.props.fTempMin}
                />
            </div>
        )
    }
}

export default Wrapper