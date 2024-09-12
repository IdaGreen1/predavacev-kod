import './App.css';
import randomstring from 'randomstring';
import moment from 'moment';

function App() {
  console.log(randomstring.generate());
  console.log(moment().format('MM DD YYYY, h:mm:ss a'));
  
  return (
    <div className="App">
     <h1>My second App</h1>
    </div>
   
  );
}
 


export default App;
