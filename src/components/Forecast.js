import React from "react";

class Forecast extends React.Component {
    constructor(props) {
        super(props);

    }

    footerItem = (i) => {
        return (
            <div key={i} className="footer-forecast">
                <div className="footer-item forecast-date">{this.props.foreDate[i]}</div>
                <div className="footer-item forecast-img">
                    <img src={"https://openweathermap.org/img/w/" + this.props.foreImg[i] + ".png"}/>
                </div>
                <div className="footer-item forecast-temp-max">{this.props.foreTempMax[i]}</div>
                <div className="footer-item forecast-temp-min">{this.props.foreTempMin[i]}</div>
            </div>
        )
    };

    render() {
        let footerItems = [];
        for (let i = 0; i < 5; i++) {
            footerItems.push(this.footerItem(i));
        }

        return (
            <div className="footer">
                {footerItems}
            </div>
        )
    }
}

export default Forecast;