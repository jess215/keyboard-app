import logo from './logo.svg';
import './App.css';

import Keyboard, {x,y} from './Keyboard'

function App() {
  const handleClickYo = ()=>{
    y()
    console.log('clicked')
  }
  return (
    <div className="App">
     <h1 className='welcome'>Welcome to the magical keyboard of happiness!</h1>
     <Keyboard title={'Keyboard'} />
    </div>
  );
}

export default App;
