import './App.css';
import FunctionalContext from './Components/FunctionalContext';
import Theme from './Components/Theme';
import UserContent from './Components/UserContent'

export default function App() {
  return (
    <div>
      <h1>Context</h1>
      <UserContent/>
      <Theme/>
      <FunctionalContext/>
    </div>
  );
}
