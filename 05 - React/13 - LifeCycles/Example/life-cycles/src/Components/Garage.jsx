export default function Garage() {
    const cars = [
        {
            id: 1,
            brand: {
                name: "BMW",
                model: "M5",
                year: 2022
            },
            soldout: true,
            colors: ["Blue", "Green", "Red"]
        },

        {
            id: 2,
            brand: {
                name: "Toyota",
                model: "Avensis",
                year: 2020
            },
            soldout: false,
            colors: ["Gold", "Silver"]
        },

        {
            id: 3,
            brand: {
                name: "Renault",
                model: "Laguna",
                year: 2012
            },
            soldout: false,
            colors: ["Black", "White"]
        },
        
    ]


return (
    <div>
        <h1>Who lives in my garage?</h1>
        <ul>
            {cars.map(car =>
                <Car key={car.id} brand={car.brand.name} 
                model={car.brand.model} year={car.brand.year} colors={car.colors}  />
                )}
        </ul>
    </div>
)
}

function Car({ brand, model, year, colors }) {
    return (
        <>
            <li>
            I am a {brand} {model} from {year}.
            </li>
            Avaliable colors are
            <ul>
                {colors.map(color => <li key={crypto.randomUUID()}>{color}</li>)}
            </ul>

        </>
      
    )
}