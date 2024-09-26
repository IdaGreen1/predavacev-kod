export default function FunctionalComponent() {
    const CurrentWeather = {
        city: "NewYork",
        temperature: 22,
        conditions: "Partly-Cloudly",
        humidity: 60,
        windSpeed: 5
    };

    return (
        <div>
            <h1>Functional Component: Current Weather</h1>
            <h2>{CurrentWeather.city}</h2>
            <p>{CurrentWeather.conditions}</p>
            <p>{CurrentWeather.humidity}</p>
            <p>{CurrentWeather.windSpeed}</p>
        </div>
    );
};