import './App.css';
import { FunctionalComponent, ClassComponent, FunctionalChildrenComponent } from './Components';

export default function App() {
  
  const users = [
    { name: 'Ivan', years: 30 },
    { name: 'Marko', years: 35 },
    { name: 'Ana', years: 25 },
  ];

  return (
    <div >
      <FunctionalComponent 
      name= {users[0].name}
      age= {users[0].years} />
      <ClassComponent
       name= {users[1].name}
       age= {users[1].years}/>
      <FunctionalChildrenComponent
      name= {users[2].name}
      age= {users[2].years} />
    </div>
  );
}


