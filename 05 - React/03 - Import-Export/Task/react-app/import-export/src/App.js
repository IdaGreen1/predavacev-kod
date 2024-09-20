import './App.css';
import './helpers/Default-export';
import { heloo, divide, dogName, dogAge } from './helpers/Named-export';

function App() {
  return (
    <div>
      <h1>Welcome</h1>
    </div>
  );

  
}

heloo("Ida", "Bahun");
divide(10, 5);

function MyDog() {
  return (
    <div>
      <p>My dog is called {dogName} , and she is { dogAge } years old</p>
    </div>
  )
}

export default App;
export { MyDog };
