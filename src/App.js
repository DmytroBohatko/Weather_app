import React from 'react';
import cloud1 from './img/cloud1.png'
import cloud2 from './img/cloud2.png'
import axios from 'axios'
import Modal from './components/Modal'
import Wrapper from './components/Wrapper'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            data: [],
            showModal: true,
            error: true
        };
    }

    forecastAPI() {
        axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + this.state.search + '&appid=a0bf4ff8ca61f3bf5aa131971a6e7a99&units=imperial')
            .then(result =>
                this.setState({
                    data: result.data.list,
                    error: false
                }, () => this.toggleModal())
            )
            .catch(error => {
                alert("There is no such city, please enter correct name");
                this.setState({error: true})
            })
    }

    currentWeatherAPI() {
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.state.search + '&appid=a0bf4ff8ca61f3bf5aa131971a6e7a99&units=imperial')
            .then(result => this.setState({
                currentTemp: result.data.main.temp,
                currentHum: result.data.main.humidity,
                currentDescr: result.data.weather[0].description
            }))
    }


    handleChange = (value) => {
        this.setState({search: value});
    };

    handleChoose = (city) => {
        this.setState({search: city}, () => this.getData());
    };

    getData() {
        this.currentWeatherAPI();
        this.forecastAPI();
    }

    toggleModal() {
        if (this.state.error === false) {
            this.setState({showModal: false})
        }
    }

    onSubmit(submit) {
        if (submit) {
            this.currentWeatherAPI();
            this.forecastAPI()
        }
    }

    render() {
        const {data, currentTemp, currentDescr, currentHum} = this.state;
        const forecastDate = [];
        const forecastImg = [];
        const forecastTempMax = [];
        const forecastTempMin = [];

        let prevItem = "";


        let prevItem2 = "";
        let curArrMax = [];
        let curArrMin = [];

        function getMaxOfArray(array) {
            return Math.max.apply(null, array);
        }

        function getMinOfArray(array) {
            return Math.min.apply(null, array);
        }

        let forecastArrDate = data.map(function (name) {
            let m = name.dt_txt.charAt(5) + name.dt_txt.charAt(6);
            let month = '';
            switch (m) {
                case "01":
                    month = "Jan";
                    break;
                case "02":
                    month = "Feb";
                    break;
                case "03":
                    month = "Mar";
                    break;
                case "04":
                    month = "Apr";
                    break;
                case "05":
                    month = "May";
                    break;
                case "06":
                    month = "Jun";
                    break;
                case "07":
                    month = "Jul";
                    break;
                case "08":
                    month = "Aug";
                    break;
                case "09":
                    month = "Sep";
                    break;
                case "10":
                    month = "Oct";
                    break;
                case "11":
                    month = "Nov";
                    break;
                case "12":
                    month = "Dec";
                    break;
            }
            let curItem = month + " " + name.dt_txt.charAt(8) + name.dt_txt.charAt(9);
            if (curItem !== prevItem) {
                forecastDate.push(curItem);
                prevItem = curItem;
            }
            return forecastDate
        });

        let forecastArrImg = data.map(function (name) {
            let curItem = name.dt_txt.charAt(11) + name.dt_txt.charAt(12);
            if (curItem === "12") {
                let a = name.weather[0].icon;
                if (a.charAt(2) === "n") {
                    a = a.replace(/n/, "d");
                }
                forecastImg.push(a);
            }
            return forecastImg;
        });

        let forecastArrMaxMin = data.map(function (name, i) {
            let curItem = name.dt_txt.charAt(8) + name.dt_txt.charAt(9);
            if (prevItem2 !== curItem || i === data.length - 1) {
                if (i === data.length - 1) {
                    curArrMax.push(Math.round(name.main.temp_max));
                    curArrMin.push(Math.round(name.main.temp_min));
                }
                prevItem2 = curItem;
                if (curArrMax.length !== 0) {
                    forecastTempMax.push(getMaxOfArray(curArrMax));
                    forecastTempMin.push(getMinOfArray(curArrMin))
                }
                curArrMax = [];
                curArrMin = [];
            }
            curArrMax.push(Math.round(name.main.temp_max));
            curArrMin.push(Math.round(name.main.temp_min));
        });


        return (
            <div className="main">
                <img style={{left: (window.innerWidth - 540) / 2 - 150}} id="cloud1" src={cloud1}/>
                <img style={{right: (window.innerWidth - 540) / 2 - 80}} id="cloud2" src={cloud2}/>
                {this.state.showModal ? <Modal
                        chooseCity={this.state.search}
                        onCityChoose={this.handleChoose}
                    />
                    :
                    <Wrapper
                        searchValue={this.state.search}
                        onMainChange={this.handleChange}
                        onFilterChange={(value) => this.handleChange(value)}
                        onSubmit={(submit) => this.onSubmit(submit)}

                        cTemp={Math.round(currentTemp)}
                        cHumidity={currentHum}
                        cDescription={currentDescr}

                        fImg={forecastImg}
                        fDate={forecastDate}
                        fTempMax={forecastTempMax}
                        fTempMin={forecastTempMin}
                    />
                }

            </div>
        )
    }
}


export default App;