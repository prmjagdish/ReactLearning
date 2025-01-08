import logo from './logo.svg';
import './App.css';
import Visitor from './components/Visitor';
import Counter from './components/Counter';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import FunctionalClick from './components/FunctionalClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">
      {/* <Visitor /> */}
      {/* <Counter/> */}
      {/* <Greet name="Jagdish" nikename="Jairo"/> */}

      {/* <Welcome name="Jagdish" nikename="jairo"/> */}

      {/* <FunctionalClick/> */}

      {/* <ClassClick/> */}

      <EventBind />
    </div>
  );
}

export default App;
