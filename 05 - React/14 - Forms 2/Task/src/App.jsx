import  User  from './User';
import React, { useState } from 'react';
import NewUser from './User/NewUser';

export default function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Nino', years: 26 },
    { id: 2, name: 'Marko', years: 35 },
    { id: 3, name: 'Ana', years: 25 },
  ]);

  const handleAddUser = (name, years) => {
    const newUsers = {
      id: users.length + 1,
      name: '',
      years: parseInt(years),
    };

    setUsers([...users, ])
  };

  const handleButtonPress = () => {
    const newUsers = users.map(user => ({ ...user, years: user.years + 1 }));
    setUsers(newUsers);
  };

  const handleNameChange = (event, index) => {
    const newUsers = [...users];
    newUsers[index].name = event.target.value;
    setUsers(newUsers);
  };

  
  return (
    <div>
      <h1>React aplikacija</h1>
      <p>Ovo zbilja radi</p>
      <button onClick={handleButtonPress}>Promjena godina</button>

      {users.map((user, index) => (
        <User
          key={user.id}
          name={user.name}
          years={user.years}
          onNameChange={event => handleNameChange(event, index)}
        />
      ))}

      <br />
      <hr/>
      <p>
        <NewUser onAddUser={handleAddUser}
                 value={<User/>} /> 
                 </p>
    </div> 
  );
}; 