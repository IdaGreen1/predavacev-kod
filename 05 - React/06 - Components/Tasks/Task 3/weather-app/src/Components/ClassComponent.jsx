import React from 'react';

class ClassComponent extends React.Component {
    render() {
        let forecastData = [
            {
                day: "Monday",
                high: 24,
                low: 18,
                conditions: "Sunny"
            },
            {
                day: "Tuesday",
                high: 27,
                low: 20,
                conditions: "Clear",
            },
            {
                day: "Wednsday",
                high: 25,
                low: 19,
                conditions: "Partly-Cloudly",
            },
            {
                day: "Thursday",
                high: 23,
                low: 17,
                conditions: "Rainy",
            },
            {
                day: "Friday",
                high: 26,
                low: 20,
                conditions: "Sunny",
            },

        ];

        forecastData.map(( day) => console.log(day))

        return (
            <div>
                <h1>Class Component:5-Day Weather Forecast</h1>
                <table>
                    <tr>
                        <th>day</th>
                        <th>high</th>
                        <th>low</th>
                        <th>conditions</th>
                    </tr>
                    <tr>
                       
                    </tr>


                </table>
            </div>
        )
    }
}

export default ClassComponent;