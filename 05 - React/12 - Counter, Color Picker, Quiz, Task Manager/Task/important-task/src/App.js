import './App.css';
import Counter from './Components/Counter';
import ColorPicker from './Components/ColorPicker';
import TaskManager from './Components/TaskManager';

export default function App() {
  return (
    <div >
      < Counter />
      <hr/>
      < ColorPicker />
      <hr/>
      < TaskManager />
      
   </div>
  );
}


