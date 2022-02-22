import './App.css';
import Keyboard from './Keyboard';
import DemoContainer from './DemoContainer';

function App() {
    return (
        <div>
            <h1>What do you wish for?</h1>
            <DemoContainer header='Enter You Wish'>
                <Keyboard />
            </DemoContainer>
        </div>
    );
}

export default App;