
   
import logo from './logo.svg';
import './App.css';

import Keyboard, {x,y} from './Keyboard'

function App() {
  const handleClickYo = ()=>{
    y()
  }
  return (
    <div className="App">
     <h1 className='welcome'>Make Your Wish</h1>
     <Keyboard title={'I wish...'} />
    </div>
  );
}

export default App;