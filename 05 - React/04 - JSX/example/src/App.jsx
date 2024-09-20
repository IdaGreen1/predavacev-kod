import './App.css';

function App() {
  const user = {
    firstName: 'Homer',
    lastName: 'Simpson',
    job: 'Nuclear Safety Inspector',
    age: 68,
    emloyed: true,
    spouse: {
      firstName: 'Marge',
      lastName: 'Simpson',
    },
    animals: ['Santas little Helper', 'Snowball II'],
  };

  function checkLegalDrinkingAge(user) {
    if (user.age >= 21) {
      return `${user.firstName} is of legal drinking age.`;
    } else {
      return `${user.firstName} is not of legal drinking age. Please do not serve them alcoholic beverages.`;
    }
  }

  return (
    <div>
      <h1>{user.firstName} {user.lastName}</h1>
      <h2>
        {`Hello ${user.firstName} ${user.lastName}`} is {user.age} year˙(s) old, his job
        is {user.job} and they are currently {' '}
        {user.employed ? 'emplyed.Woohoo.' : 'enemployed. Awh'}
      </h2>
      <h3>Our user has {user.animals.length} animal(s). They are : {' '}
      {user.animals.join(', ')}.
      </h3>
      <h4>{checkLegalDrinkingAge(user)}</h4>
      <h4>
        Spouse : {user.spouse.firstName} {user.spouse.lastName}
      </h4>
    </div>
  );
}

export default App;
