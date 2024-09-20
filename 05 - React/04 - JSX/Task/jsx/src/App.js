import './App.css';

function App() {
  const person = {
    firstName: "Luka",
    lastName: "Horvat",
  };

  function greet() {
    return `Hello my name is ${person.firstName} ${person.lastName}!`
  };

  function checkLastName(personObject) {
    if (personObject.lastName == 'Horvat') {
      return 'Hello, Friend'
    } else {
      return 'Hello, Stranger'
    };
  }

  return (
    <div >
      <h1>JSX VJEŽBA</h1>
      {greet()}
      <br />
      {checkLastName(person)}
      <br/>
      {person.lastName === 'Horvat' ? 'I trust you' : "I don't trust you"}
      <br />
    </div>

  );
}

export default App;
