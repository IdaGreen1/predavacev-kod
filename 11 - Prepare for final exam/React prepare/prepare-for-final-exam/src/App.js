import './App.css';
import ChildrenProps from './Components/ChildrenProps';
import PropsKlase from './Components/PropsKlase';
import Props from './Components/Props';
import UseStateHook from './Components/UseStateHook';
import EventComponent from './Components/EventComponent';
 export default function App() {
  return (
    <div >
      <ChildrenProps />
      <hr/>
      <PropsKlase />
      <hr/>
      <Props />
      <hr />
      <UseStateHook />
      <hr />
      <EventComponent />
    </div>
  );
}


